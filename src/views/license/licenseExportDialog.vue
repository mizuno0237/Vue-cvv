<template>
    <el-dialog title="Export the selected license?" :visible.sync="ifShowLicenseExportDialog" width="36%" :before-close="closeDialog" :close-on-click-modal="false" :close-on-press-escape="false">
        <el-row id="licenseDialogBody">
            Do you want to export the license key 'Lenovo XClarity Controller Enterprise Upgrade'? The status of the license key on the BMC will remain unchanged.
        </el-row>
        <el-row id="licenseDialogBottom">
            <el-col :span="5">
                <BaseButton :clickEvent="exportLicense" btnMsg="Export" :ifDisabled="selectedLicenseData === ''"/>
            </el-col>
            <el-col :span="3">
                <BaseButton :clickEvent="closeDialog" :isCancelBtn="true"/>
            </el-col>
        </el-row>
    </el-dialog>
</template>

<script>
import BaseButton from '../../components/BaseButton.vue';
import API from '../../api/index.js'
export default{
    name: 'licenseExportDialog',
    props:{
        ifShowLicenseExportDialog:{
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
            this.$emit('changeDialogStatus', false);
        },
        exportLicense() {
            console.log(this.selectedLicenseData);
            API.Providers.exportBy({'FOD_LicenseKeyExport': this.selectedLicenseData}).then(data => {
                if(![null, undefined].includes(data.data) && data.data.return === 0) {
                    API.Download.downloadFile('/download/' + data.data.FileName, data.data.FileName)
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
        padding: 14px 20px;
    }
}
</style>
