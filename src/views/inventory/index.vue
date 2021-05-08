<template>
    <div>
        <el-alert title="The inventory information shown here is as of previous system power on." type="warning" show-icon closable id="powerOnWarning">
        </el-alert>
        <inventoryTbl title="CPU"/>
        <inventoryTbl title="DIMM"/>
    </div>
</template>

<script>
import API from '../../api/index.js'
import inventoryTbl from './inventoryTbl.vue';
export default {
    name: 'inventory',
    data() {
        return {
            CPUInfo: []
        }
    },
    components: {
        inventoryTbl
    },
    mounted() {
        API.Dataset.restGetCpuInfo().then(data => {
            this.CPUInfo = data.data.items[0].processors;
        })
    }
}
</script>

<style lang="scss" scoped>
#powerOnWarning{
    height: 50px;
    margin-bottom: 40px;
    width: 90%;
}
</style>
