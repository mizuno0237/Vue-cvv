<template>
    <el-dialog title="Add a new license?" :visible.sync="ifShowLicenseAddDialog" width="36%" :before-close="closeDialog" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-row id="licenseDialogBody">
            <el-col :span="5">
                <BaseButton :clickEvent="seltLicense" btnMsg="Browse..."/>
            </el-col>
            <el-col :span="19" v-if="licenseData.licenseName === ''">
                <div id="importLicenseNoFileSel">No file selected.</div>
            </el-col>
            <el-col :span="19" v-if="licenseData.licenseName !== ''">
                <div id="importLicenseNoFileSel">{{ licenseData.licenseName }}</div>
            </el-col>
        </el-row>
        <el-row id="licenseDialogBottom">
            <el-col :span="6">
                <BaseButton :clickEvent="addLicense" btnMsg="Import" :ifDisabled="licenseData.licenseName === ''"/>
            </el-col>
            <el-col :span="18">
                <BaseButton :clickEvent="closeDialog" :isCancelBtn="true"/>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <input type="file" accept=".key" @change="bindSeltImgChg($event)" ref="btnUpdateImgSel" id="btnUpdateImgSel"/>
            </el-col>
        </el-row>
    </el-dialog>
</template>

<script>
import axios from 'axios';
import BaseButton from '../../components/BaseButton.vue';
export default {
    name: 'licenseAddDialog',
    props: {
        ifShowLicenseAddDialog: {
            type: Boolean,
            default: true,
        }
    },
    components:{
        BaseButton
    },
    data() {
        return {
            licenseData: {
                licenseName : '',
            }
        }
    },
    methods: {
        closeDialog() {
            this.$refs.btnUpdateImgSel.value = '';
            this.licenseData.licenseName = '';
            this.$emit('changeDialogStatus', false);
        },
        bindSeltImgChg(e) {
            this.licenseData.licenseName = e.target.files[0].name;
        },
        seltLicense() {
            this.$refs.btnUpdateImgSel.click();
        },
        addLicense() {
            axios.post('/upload', {},
                {transformRequest: function() {
                    const formData = new FormData();
                    formData.append(document.getElementById('btnUpdateImgSel').files[0].name, document.getElementById('btnUpdateImgSel').files[0]);
                    return formData;
                }}).then(data => {
                    console.log(data)
                })
        }
    }
}
</script>

<style scoped lang="scss">
/deep/.el-dialog{
    margin-top: 200px!important;
    #licenseDialogBody{
        margin-bottom: 28px;
        #importLicenseNoFileSel{
            line-height: 32px;
            font-size: 14px;
            color: #333;
        }
    }
    #btnUpdateImgSel{
        display: none;
    }
}
</style>
