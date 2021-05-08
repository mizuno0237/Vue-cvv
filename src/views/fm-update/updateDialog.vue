<template>
    <el-dialog :title="dialogTitle + ' Firmware Update'" :visible.sync="ifShowDialog" width="63%" :before-close="closeDialog" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-steps :active="activateStep" finish-status="success">
            <el-step title="Select File"></el-step>
            <el-step title="Verify Firmware"></el-step>
            <el-step title="Update Firmware"></el-step>
        </el-steps>
        <div id="verifyFmIndication" v-if="activateStep === 1">
            Verify Firmware
        </div>
        <div id="uploadIndication" v-if="[1, 2].includes(activateStep)">
            <span>Uploading File / Comparing Firmware ...</span>
        </div>
        <div id="uploadProgress" v-if="activateStep === 1 && !showFWTbl">
            <el-progress :percentage="imgUploadPercent" :text-inside="ifShowPercent" :stroke-width="26" :color="uploadProgressColor"></el-progress>
        </div>
        <div id="updateProgress" v-if="activateStep === 2">
            <div v-for="(item, index) in selctDevList" :key="index">
                <el-progress :percentage="item.updatedPercent"></el-progress>
            </div>
        </div>
        <div v-show="activateStep === 0">
            <input type="file" :accept="acceptFileType" @change="bindSeltImgChg($event)" ref="btnUpdateImgSel" id="btnUpdateImgSel"/>
        </div>
        <div v-if="activateStep === 1 && showFWTbl">
            <el-table
                :data="devList"
                style="width: 100%">
                <el-table-column
                    v-if="!psuFlash"
                    label=""
                    width="180">
                    <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.checked"></el-checkbox>
                    </template>
                </el-table-column>
                <el-table-column
                    v-if="!psuFlash"
                    prop="deviceName"
                    label="Device Name"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="newVersion"
                    label="New Version"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="installedVersion"
                    label="Installed Version">
                </el-table-column>
                <el-table-column label="Reboot Required">
                    <template slot-scope="scope">
                        <div v-if="scope.row.rebootRequired === 'Y'">
                            Yes
                        </div>
                        <div v-if="scope.row.rebootRequired === ''">
                            No
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="nextStep" :disabled="nextBtndisabled">Next</el-button>
            <el-button type="info" @click="closeDialog" :disabled="imgUploadingFlag">Cancel</el-button>
        </div>
        <el-dialog title="Do you want to restart the BMC?" :visible.sync="ifShowRestartImmDialog" width="40%" top="235px">
            <span>The BMC will be unavailable during the restart. When the restart is complete, you must log in to the BMC web console to access the BMC.</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="restartImmFunct">Restart BMC</el-button>
                <el-button type="primary" @click="closeDialog">Cancel</el-button>
            </span>
        </el-dialog>
    </el-dialog>
</template>

<script>
import API from '../../api';
import axios from 'axios';
export default {
    name: 'updateDialog',
    props: {
        ifShowDialog: {
            type: Boolean,
            default: false,
        },
        dialogTitle: {
            type: String,
            default: 'Firmware Update',
        }
    },
    data() {
        return {
            supFmItems: 0,
            activateStep: 0,
            seltImage: '',
            imgUploadPercent: 0,
            ifShowPercent: true,
            uploadProgressColor: '#1989fa',
            uploadBarFail: false,
            imgUploadingFlag: false,
            verifyResult: '',
            uploadedImgPathRes: '',
            imgHasUploadedAndBackendReturned: false,
            showFWTbl: false,
            devList: [{},{}],
            selctDevList: [],
            chkGetUpdateProgressInterval: {},
            chkGetUpdateProgressFailTimes: 0,
            bmcBackupVersionInfo: {
                version: '',
                build: '',
                date: ''
            },
            restartImmFlag: false,
            chkFiniUpdate: false,
            restartOsFlag: false
        }
    },
    mounted() {},
    methods: {
        closeDialog() {
            this.$refs.btnUpdateImgSel.value = '';
            this.activateStep = 0;
            this.seltImage = '';
            this.uploadProgressColor = '#1989fa';
            this.imgUploadPercent = 0;
            this.$emit('changeDialogStatus', false);
        },
        nextStep() {
            if (this.activateStep++ > 2) this.activateStep = 0;
            if (this.activateStep === 1) {
                this.imgUploadingFlag = true;
                API.Providers.restWebRequestSpaceURIPromise({
                    'UPD_WebReserve': 1
                }).then(data => {
                    if (!['', null].includes(data.data) && data.data.return !== 0) {
                        this.$message({
                            message: 'Failed to request web space',
                            type: 'warning'
                        });
                        this.uploadProgressColor = '#f52f20';
                        this.imgUploadPercent = 100;
                        this.ifShowPercent = false;
                        this.imgUploadingFlag = false;
                    } else if(!['', null].includes(data.data) && data.data.return === 0){
                        const updateRandomNum = (new Date()).valueOf()
                        this.GetUploadProgress(updateRandomNum);
                        return this.uploadFile(updateRandomNum, 'btnUpdateImgSel');
                    }
                })
            } else if(this.activateStep === 2) {
                if(this.showFWTbl === false) {
                    this.showFWTbl = true;
                    this.activateStep = 1;
                }else {
                    this.next2Clicked();
                }
            }
        },
        bindSeltImgChg(e) {
            this.seltImage = e.target.files;
        },
        GetUploadProgress(updateRandomNum) {
            const getUploadProgressFunct = () => {
                API.Upload.getUploadProgress(updateRandomNum).then(data => {
                    const imgUploadState = data.data.state;
                    console.log(data.data);
                    if(imgUploadState === 'uploading' && !this.uploadBarFail) {
                        this.imgUploadPercent = (data.data.received / data.data.size) * 80;
                    } else if(imgUploadState === 'done' && !this.uploadBarFail) {
                        clearInterval(getUploadProgressInterval);
                        this.imgUploadPercent = 80;
                    } else if(imgUploadState === 'starting' && this.imgUploadPercent > 80) {
                        clearInterval(getUploadProgressInterval);
                    } else if(imgUploadState === 'error') {
                        this.uploadBarFail = true;
                        this.$message({
                            message: 'Failed to upload firmware image. Note that please retry upgrade firmware after refresh browser.',
                            type: 'warning'
                        });
                        this.imgUploadingFlag = false;
                        clearInterval(getUploadProgressInterval);
                    }
                })
            }
            const getUploadProgressInterval = setInterval(getUploadProgressFunct, 3000);
        },
        uploadFile(updateRandomNum, elementId) {
            axios.post('/upload?X-Progress-ID=' + updateRandomNum, {headers: {
                    'Content-Type': undefined
                }},{transformRequest: function() {
                    const formData = new FormData();
                    formData.append(document.getElementById(elementId).files[0].name, document.getElementById(elementId).files[0]);
                    return formData;
                }}).then(data => {
                    if([null, undefined].includes(data.data) || [null, undefined].includes(data.data.items)) {
                        this.$message({
                            message: 'Failed to upload firmware image.',
                            type: 'warning'
                        });
                        this.imgUploadingFlag = false;
                    } else {
                        this.uploadedImgPathRes = data.data.items[0].path;
                        console.log("Set file name and path");
                        this.UPDSetFileName();
                    }
                })
        },
        UPDSetFileName() {
            API.Providers.restWebRequestSpaceURIPromise({'UPD_WebSetFileName': this.uploadedImgPathRes}).then(data => {
                if(data.data.return !== 0) {
                    this.$message({
                        message: 'Failed to rename uploaded image file',
                        type: 'warning'
                    });
                } else {
                    this.renameUploadedImgFile();
                }
            })
        },
        clkCheckVerifyUploadStatus() {
            const verifyUploadFileStatusFunct = () => {
                API.Providers.restWebRequestSpaceURIPromise({
                    'UPD_WebVerifyUploadFileStatus':1
                }).then(data => {
                    console.log(data.data);
                    const status = data.data.status;
                    if(status === 1) {
                        // verify image file status done
                        this.imgUploadPercent = 100;
                        this.imgUploadingFlag = false;
                        this.uploadedFmInfo();
                        clearInterval(chkGetVerifyStatusInterval);
                    } else if([0, 255].includes(status)) {
                        // verifing image file
                        if(this.imgUploadPercent < 100) {
                            this.imgUploadPercent++
                        } else {
                            this.imgUploadPercent = 100;
                            this.imgUploadingFlag = false;
                        }
                    } else if(status === 2) {
                        //failed to verify image file
                        this.imgUploadPercent = 100;
                        this.uploadProgressColor = '#f52f20';
                        this.$message({
                            message: 'Failed to get verify the image file status',
                            type: 'warning'
                        });
                        this.imgUploadingFlag = false;
                        clearInterval(chkGetVerifyStatusInterval);
                    }
                })
            }
            const chkGetVerifyStatusInterval = setInterval(verifyUploadFileStatusFunct, 3000);
        },
        renameUploadedImgFile() {
            API.Providers.restWebRequestSpaceURIPromise({'UPD_WebVerifyUploadFile':1}).then(data => {
                // get verify image status
                if(![null, undefined].includes(data.data) && data.data.return === 0) {
                    this.verifyResult = data.data;
                    this.clkCheckVerifyUploadStatus();
                } else {
                    this.$message({
                        message: 'Failed to post UPD_WebSetFileName',
                        type: 'warning'
                    });
                }
            }, () => {
                this.$message({
                    message: 'Failed to post UPD_WebSetFileName',
                    type: 'warning'
                });
            })
        },
        uploadedFmInfo() {
            API.Dataset.getUploadedImageInfoURIPromise({params:this.verifyResult}).then(data => {
                console.log('success', data.data);
                if(![null, undefined].includes(data.data) && ![null, undefined].includes(data.data.items[0])) {
                    const uploadedFmInfoResp = data.data.items[0];
                    if(['IMM', 'UEFI', 'firmware_type', '', 'LINUX DRIVER', 'WINDOWS DRIV'].includes(uploadedFmInfoResp['firmware_type'])) {
                        if(!this.sysFlash) {
                            this.$message({
                                message: 'Please upload the system firmware image!',
                                type: 'warning'
                            });
                        } else {
                            API.Dataset.getFmUpdateStatus().then(data => {
                                if(![null, undefined].includes(data.data) && ![null, undefined].includes(data.data.items)) {
                                    const [updateFmType, supportedUpdateBanks] = [data.data.items[0].firmware_type, data.data.items[0].upgrades];
                                    this.supFmItems = supportedUpdateBanks.length;
                                    if(this.supFmItems >1){
                                        [this.supFmItemSorP, this.supFmItemSorBe] = ['items', 'are'];
                                    }else{
                                        [this.supFmItemSorP, this.supFmItemSorBe] = ['item', 'is'];
                                    }
                                    supportedUpdateBanks.forEach((itm, idx) => {
                                        if(uploadedFmInfoResp.firmware_type.toUpperCase() === 'IMM') {
                                            console.log(itm)
                                            if(itm.name.indexOf("primary") !== -1){
                                                this.devList[idx].deviceName = 'BMC (Primary)';
                                                this.$set(this.devList[idx], 'checked', true);
                                            }else{
                                                this.devList[idx].deviceName = 'BMC (Backup)';
                                                this.$set(this.devList[idx], 'checked', false);
                                            }
                                        } else if(uploadedFmInfoResp.firmware_type.toUpperCase() === 'TDM') {
                                            this.devList[idx].deviceName = 'LXPM';
                                        } else if(uploadedFmInfoResp.firmware_type.toUpperCase() === 'LINUX DRIVER') {
                                            this.devList[idx].deviceName = 'LXPM Linux Drivers';
                                        } else if(uploadedFmInfoResp.firmware_type.toUpperCase() === 'WINDOWS DRIV') {
                                            this.devList[idx].deviceName = 'LXPM Windows Drivers';
                                        } else {
                                            this.devList[idx].deviceName = uploadedFmInfoResp.firmware_type;
                                        }
                                        this.devList[idx].newVersion = uploadedFmInfoResp.pending_build_id;
                                        if(itm.name.indexOf('primary') !== -1){
                                            this.devList[idx].installedVersion = uploadedFmInfoResp.primary_build_id;
                                        }else if(itm.name.indexOf('backup') !== -1){
                                            if(this.bmcBackupVersionInfo.version !== '' && this.bmcBackupVersionInfo.build !== '' && this.bmcBackupVersionInfo.date !== ''){
                                                this.devList[idx].installedVersion = this.bmcBackupVersionInfo.build;
                                            }else{
                                                this.devList[idx].installedVersion = uploadedFmInfoResp.backup_build_id;
                                            }
                                        }else{
                                            this.devList[idx].installedVersion = uploadedFmInfoResp.current_build_id;
                                        }
                                        this.devList[idx].supportedId = itm.id;
                                        this.devList[idx].updateFmType = updateFmType;
                                        if(updateFmType === 'IMM' && itm.id === 1 || updateFmType === 'UEFI'){
                                            this.devList[idx].rebootRequired = 'Y';
                                        }else{
                                            this.devList[idx].rebootRequired = '';
                                        }
                                    })
                                    this.imgHasUploadedAndBackendReturned = true;
                                    console.log(this.devList)
                                }
                            })
                        }
                    } else if(['PLDM', 'STLB', 'M2'].includes(uploadedFmInfoResp.firmware_type)) {
                        if(this.sysFlash) {
                            this.$message({
                                message: 'Please upload the system firmware image!',
                                type: 'warning'
                            });
                        } else {
                            console.log('System backend return');
                        }
                    }
                } else {
                    this.$message({
                        message: 'Failed to post imm_firmware_success',
                        type: 'warning'
                    });
                }
            }, () => {
                this.$message({
                    message: 'Failed to post imm_firmware_success',
                    type: 'warning'
                });
            })
        },
        next2Clicked() {
            console.log('Update start');
            if(this.sysFlash) {
                this.selctDevList = [];
                this.devList.forEach(itm => {
                    if(itm.checked) this.selctDevList.push(itm);
                })
                this.startSystemUpdateProcess();
            }
        },
        startSystemUpdateProcess() {
            console.log(this.selctDevList);
            if(this.selctDevList.length === 1) {
                if(this.selctDevList[0].deviceName === 'BMC (Primary)') {
                    //flash imm primary
                    this.defaultActProc();
                } else {
                    //flash imm back up
                    this.optActProc();
                }
            } else if(this.selctDevList.length === 2) {
                this.defaultActProc();
            }
        },
        defaultActProc() {
            console.log('flash imm primary');
            API.Providers.restWebRequestSpaceURIPromise({
                'UPD_WebStartDefaultAction': 1
            }).then(data => {
                if(data.data.return === 0) {
                    this.clkCheckGetUpdateProgressOk(0);
                } else {
                    this.updateCacelFunction();
                    console.error('Failed to post UPD_WebStartDefaultAction');
                }
            }, () => {
                console.error('Failed to post UPD_WebStartDefaultAction');
            })
        },
        optActProc() {
            console.log('flash imm back up');
        },
        clkCheckGetUpdateProgressOk(bankId) {
            const getUpdateProgressFunct = id => {
                console.log('start update', id);
                API.Dataset.restUpdateProgressURI().then(data => {
                    const dataObj = data.data.items[0];
                    const [actPercnt, actState, actStatus, errInfo] = [dataObj.action_percent_complete, dataObj.action_state, dataObj.action_status, dataObj.error_detail];
                    const errCode = errInfo.substr(errInfo.indexOf('(') + 1, errInfo.indexOf(')') - 1);
                    this.chkGetUpdateProgressFailTimes = 0;
                    if(actState === 'In Progress') {
                        if(actStatus === 2) {
                            if(this.sysFlash || this.selctDevList.length === 1) {
                                this.$set(this.selctDevList[id], 'updateBarFail', true);
                                this.$set(this.selctDevList[id], 'updateCompleteFlag', true);
                            } else {
                                this.multiCardsFailBars();
                            }
                            clearInterval(this.chkGetUpdateProgressInterval[id]);
                            console.log('Error occurs in updating progress!');
                            this.$message({
                                message: 'Error occurs in updating progress!',
                                type: 'warning'
                            });
                        } else {
                            this.$set(this.selctDevList[id], 'updatedPercent', actPercnt);
                            console.log(this.selctDevList[id].updatedPercent)
                        }
                    } else if(actState === 'Idle') {
                        clearInterval(this.chkGetUpdateProgressInterval[id]);
                        if(this.sysFlash || this.selctDevList.length === 1) {
                            this.$set(this.selctDevList[id], 'updateCompleteFlag', true);
                        }
                        console.log('Do nothing, exit update monitor.');
                    } else if(actState === 'Complete OK' && actStatus === 0) {
                        if(!this.sysFlash && this.selctDevList.length > 1){
                            for(let i = 0; i < this.selctDevList.length; i++) {
                                this.$set(this.selctDevList[i], 'updatedPercent', 100);
                                this.$set(this.selctDevList[i], 'isUpdatingFlag', false);
                                this.$set(this.selctDevList[i], 'updateCompleteFlag', true);
                            }
                        }else{
                            this.$set(this.selctDevList[id], 'updatedPercent', 100);
                            this.$set(this.selctDevList[id], 'isUpdatingFlag', false);
                            this.$set(this.selctDevList[id], 'updateCompleteFlag', true);
                        }
                        console.log('complete dialog');
                        clearInterval(this.chkGetUpdateProgressInterval[id]);
                    } else if(actState === 'Failed' && actStatus === 2) {
                        if(this.psuFlash) {
                            clearInterval(this.chkGetUpdateProgressInterval[id]);
                        } else if('000f' === errCode) {
                            console.log(errCode);
                        }
                    }
                })
            }
            this.chkGetUpdateProgressInterval[bankId] = setInterval(() => {getUpdateProgressFunct(bankId)}, 1500)
        },
        multiCardsFailBars() {
            this.selctDevList.forEach((item, index) => {
                console.log(item);
                this.selctDevList[index].updateBarFail = true;
                this.selctDevList[index].updateCompleteFlag = true;
            })
        },
        updateCacelFunction() {
            console.log('Update is cancelled.');
        },
        restartImmFunct() {
            API.Providers.restRestartAfterUpdate({'IMMColdReset' : 1}).then(data => {
                if(data.data.return !== 0) {
                    console.log("Failed to restarted imm");
                    this.$message({
                        message: 'Failed to restarted imm',
                        type: 'warning'
                    });
                } else {
                    console.log('Successfully restart imm. Please wait for a moment and refresh the web.');
                    this.$message({
                        message: 'Successfully restart imm. Please wait for a moment and refresh the web.',
                        type: 'success'
                    });
                    this.restartImmFlag = false;
                    this.selctDevList = [];
                }
            })
        }
    },
    computed: {
        sysFlash() {
            return this.dialogTitle === 'System';
        },
        psuFlash() {
            return this.dialogTitle === 'PSU';
        },
        nextBtndisabled() {
            if (this.activateStep === 0 && ['', null].includes(this.seltImage)) {
                return true;
            } else if (this.activateStep === 1 && !this.imgHasUploadedAndBackendReturned) {
                return true;
            } else if(this.activateStep === 2) {
                return false;
            }
            return false;
        },
        acceptFileType() {
            if(this.sysFlash) {
                return '.uxz, .upd';
            } else {
                return '.exe, .bin, .uxz, .upd';
            }
        },
        ifShowRestartImmDialog() {
            let immPrimaryRestartAlert = false;
            this.selctDevList.forEach(item => {
                if(item.updateCompleteFlag && !item.updateBarFail && item.rebootRequired === 'Y' && item.updateFmType == "IMM") {
                    this.chkFiniUpdate = true;
                    this.restartImmFlag = true;
                    immPrimaryRestartAlert = true;
                } else {
                    this.chkFiniUpdate = false;
                }
            })
            console.log(this.restartImmFlag, this.chkFiniUpdate);
            if((this.restartImmFlag && this.chkFiniUpdate) || (!this.restartImmFlag && immPrimaryRestartAlert && this.chkFiniUpdate && this.sysFlash && this.selctDevList.length > 1)){
                return true;
            } else {
                return false;
            }
        }
    }
}
</script>

<style scoped="scoped" lang="scss">
    #verifyFmIndication {
        font-size: 16px;
        margin-top: 20px;
    }

    /deep/.el-button {
        border-radius: 0;
    }

    /deep/.el-dialog__body {
        padding: 30px 70px;

        #uploadIndication {
            font-size: 15px;
            margin: 16px 0;
        }

        #uploadProgress {
            margin-top: 15px;
        }
    }

    /deep/.dialog-footer {
        display: flex;
        justify-content: space-between;
        padding: 0 50px;
    }
</style>
