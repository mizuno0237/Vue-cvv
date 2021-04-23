<template>
    <el-dialog title="Add a new license?" :visible.sync="ifShowLicenseAddDialog" width="36%" :before-close="closeDialog" :close-on-click-modal="false" :close-on-press-escape="false">
        
        
        
    </el-dialog>
</template>

<script>
export default {
    name: 'licenseAddDialog',
    props: {
        ifShowLicenseAddDialog: {
            type: Boolean,
            default: true,
        }
    },
    methods: {
        closeDialog() {
            this.$emit('changeDialogStatus', false);
        }
    }
}
</script>

<style scoped lang="scss">
/deep/.el-dialog{
    margin-top: 200px!important;
}
</style>
