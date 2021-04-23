<template>
    <div>
        <systemFirmware></systemFirmware>
        <adapterFirmware></adapterFirmware>
        <PSUFirmware></PSUFirmware>
    </div>
</template>

<script>
import systemFirmware from './systemFimware.vue';
import adapterFirmware from './adapterFirmware.vue';
import PSUFirmware from './PSUFirmware.vue';
export default{
    name: 'fm-update',
    components:{
        systemFirmware,
        adapterFirmware,
        PSUFirmware
    },
    data() {
        return {
            msg: 'firmware update works'
        }
    }
}
</script>

<style>
</style>
