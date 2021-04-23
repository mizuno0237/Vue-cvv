<template>
    <div>
        <div id="systemtitle">
            <span>System Firmware</span>
            <el-button @click="startUpdate"><i class="xcc-icon-upgrade-active"></i>Update Firmware</el-button>
        </div>
        <el-table :data="sysFmMainInfo" style="width: 100%" stripe>
            <el-table-column prop="type" label="Type" width="280">
            </el-table-column>
            <el-table-column prop="status" label="Status" width="200">
            </el-table-column>
            <el-table-column prop="version" label="Version" width="200">
            </el-table-column>
            <el-table-column prop="build" label="Build" width="200">
            </el-table-column>
            <el-table-column prop="date" label="Release Date">
            </el-table-column>
        </el-table>
        <updateDialog :ifShowDialog="ifShowDialog" @changeDialogStatus="changeDialogStatus" :dialogTitle="'System'"></updateDialog>
    </div>
</template>

<script>
import API from '../../api';
import updateDialog from './updateDialog.vue';
export default {
    name: 'systemFimware',
    components: {
        updateDialog
    },
    data() {
        return{
            ifShowDialog: false,
            sysFmMainInfo: [{
                type: 'BMC (Primary)',
                status: 'Active',
                version: '',
                build: '',
                date: ''
            }, {
                type: 'BMC (Backup)',
                status: 'Inactive',
                version: '',
                build: '',
                date: ''
            }, {
                type: 'UEFI',
                status: 'Active',
                version: '',
                build: '',
                date: ''
            }, {
                type: 'LXPM',
                status: 'Active',
                version: '',
                build: '',
                date: ''
            }, {
                type: 'LXPM Windows Drivers',
                status: 'Active',
                version: '',
                build: '',
                date: ''
            }, {
                type: 'LXPM Linux Drivers',
                status: 'Active',
                version: '',
                build: '',
                date: ''
            }],
            bmcBackupVersionInfo:{
                version: '',
                build: '',
                date: ''
            }
        }
    },
    mounted() {
        API.Dataset.getFmInformation().then(data => {
            data.data.items.forEach(item => {
                const test = {
                    5: 0,
                    6: 1,
                    0: 2,
                    7: 3,
                    8: 4,
                    9: 5
                }
                test[item.type] >= 0 && this.assignSysFmMainInfo(item, test[item.type]);
            })
        })
    },
    methods:{
        assignSysFmMainInfo(item, index) {
            this.sysFmMainInfo[index].version = item.version;
            this.sysFmMainInfo[index].build = item.build;
            this.sysFmMainInfo[index].date = item.release_date;
        },
        startUpdate() {
            this.ifShowDialog = true;
        },
        changeDialogStatus(data) {
            this.ifShowDialog = data;
        }
    }
}
</script>

<style scoped="scoped" lang="scss">
#systemtitle{
    height: 88px;
    background-color: #fff;
    padding: 22px 40px 22px 20px;
    font-size: 16px;
    line-height: 44px;
    .el-button{
        float: right;
        .xcc-icon-upgrade-active{
            background-image: url(../../assets/icons/upgrade-dcgg.png);
            background-size: 16px;
            width: 16px;
            height: 16px;
            margin-right: 10px;
        }
        :hover{
            .xcc-icon-upgrade-active{
                background-image: url(../../assets/icons/upgrade-blue.png);
            }
        }
    }
}
</style>
