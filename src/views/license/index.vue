<template>
    <div>
        <el-row>
            <el-col :span="24" id="licenseMgmtTitle" class="xccContentdiv">
                <div>License Management</div>
            </el-col>
            <el-col :span="24" id="licenseContent" class="xccContentdiv">
                <div id="licenseBtns">
                    <span id="licenseAdd" class="commonIconBlueBorder" @click="clearAddLicense()"><i></i>Upgrade License</span>
                    <span id="licenseDelete" class="commonIconBlueBorder"><i></i>Delete</span>
                    <span id="licenseExport" class="commonIconBlueBorder"><i></i>Export</span>
                </div>
                <el-table :data="licenseList" border>
                    <el-table-column width="70px">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.ifCheck"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="type"
                        label="Descriptor Type">
                    </el-table-column>
                    <el-table-column
                        prop="feature"
                        label="Feature Description"
                        width="400">
                    </el-table-column>
                    <el-table-column
                        prop="identifierID"
                        label="UniqueIDs">
                    </el-table-column>
                    <el-table-column
                        prop="valid_through"
                        label="Constraints">
                    </el-table-column>
                    <el-table-column
                        prop="status_string"
                        label="Status">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <licenseAddDialog :ifShowLicenseAddDialog="ifShowLicenseAddDialog" @changeDialogStatus="changeDialogStatus"></licenseAddDialog>
    </div>
</template>

<script>
import API from '../../api/index.js'
import licenseAddDialog from './licenseAddDialog.vue';
export default {
    name: 'license',
    components: {
        licenseAddDialog
    },
    data() {
        return {
            licenseList: [],
            ifShowLicenseAddDialog: false
        }
    },
    mounted() {
        API.Providers.restLicenseList().then(data => {
            console.log(data);
            if(![null, undefined].includes(data.data.items) && ![null, undefined].includes(data.data.items[0])) {
                this.licenseList = data.data.items[0].keys;
                this.licenseList.forEach(itm => {
                    if(itm.valid_through === '') {
                        this.$set(itm, 'valid_through', 'No Constraints');
                    }
                    this.$set(itm, 'ifCheck', false);
                })
            }
        })
    },
    methods:{
        clearAddLicense() {
            this.ifShowLicenseAddDialog = true;
        },
        changeDialogStatus(data) {
            this.ifShowLicenseAddDialog = data;
        }
    }
}
</script>

<style scoped lang="scss">
#licenseMgmtTitle{
    font-size: 14px;
    font-weight: bold;
    padding: 20px 20px;
    margin-bottom: 20px;
}
#licenseContent{
    #licenseBtns{
        padding: 20px;
        display: flex;
        span{
            display: flex;
            margin-right: 20px;
            i{
                background-repeat: no-repeat;
                background-size: 16px 16px;
                background-position: 0px 1px;
                width: 16px;
                height: 16px;
                margin-right: 5px;
            }
        }
        #licenseAdd{
            i{
                background-image: url(../../assets/icons/upgrade-dcgg.png);
            }
        }
        #licenseDelete{
            i{
                background-image: url(../../assets/icons/remove-dcgg.png);
            }
        }
        #licenseExport{
            i{
                background-image: url(../../assets/icons/export-dcgg.png);
            }
        }
    }
    /deep/.el-table__header-wrapper{
        tr{
            th{
                background-color: #F9FAFB;
            }
            color: #000;
        }
        font-size: 12px;
    }
}
</style>
