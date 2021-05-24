<template>
    <el-dialog title="Remove the selected license?" :visible.sync="ifShowLicenseDeleteDialog" width="36%" :before-close="closeDialog" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-row id="licenseDialogBody">
            Do you want to remove the license key 'Lenovo XClarity Controller Enterprise Upgrade'? The functionalities entitled by the license key will be disabled.
        </el-row>
        <el-row id="licenseDialogBottom">
            <el-col :span="5">
                <BaseButton :clickEvent="deleteLicense" btnMsg="Delete" :ifDisabled="selectedLicenseData === ''"/>
            </el-col>
            <el-col :span="3">
                <BaseButton :clickEvent="closeDialog" :isCancelBtn="true"/>
            </el-col>
        </el-row>
    </el-dialog>
</template>

<script>
import API from '../../api/index.js';
import BaseButton from '../../components/BaseButton.vue';
export default{
    name: 'licenseDeleteDialog',
    data() {
        return{
            licenseList: []
        }
    },
    props:{
        ifShowLicenseDeleteDialog:{
            type: Boolean,
            default: false
        },
        selectedLicenseData:{
            type: String,
            default: ''
        }
    },
    components:{
        BaseButton
    },
    methods:{
        closeDialog() {
            this.$emit('changeDialogStatus', false, this.licenseList);
        },
        deleteLicense() {
            console.log(this.selectedLicenseData);
            API.Providers.exportDeleteLicense({'FOD_LicenseKeyDelete': this.selectedLicenseData}).then(data => {
                if(![null, undefined].includes(data.data) && data.data.return === 0) {
                    API.Providers.restLicenseList().then(data => {
                        console.log(data);
                        if(![null, undefined].includes(data.data.items) && ![null, undefined].includes(data.data.items[0])) {
                            this.licenseList = data.data.items[0].keys;
                            this.licenseList.forEach(itm => {
                                if(itm.valid_through === '') {
                                    this.$set(itm, 'valid_through', 'No Constraints');
                                }
                            })
                        }
                    })
                }
            })
            this.closeDialog();
        }
    }
}
</script>

<style lang="scss" scoped>
/deep/.el-dialog{
    margin-top: 200px!important;
    #licenseDialogBottom{
        margin-top: 30px;
    }
    .el-dialog__body{
        padding: 14px 20px!important;
    }
}
</style>
