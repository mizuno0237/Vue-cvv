<template>
    <div id="immSysInfo">
        
        <div id="sysGenInfoRight">
            <div id="immExport">Export</div>
            <div id="immUser">
                {{ username }}
            </div>
            <div id="immTime">{{ currentTime }}</div>
            <div id="immLanguage"></div>
        </div>
    </div>
</template>

<script>
import API from '../api'
export default {
    name: 'topMenu',
    data() {
        return {
            currentTime: ''
        }
    },
    computed:{
        username() {
            return 'USERID';
        }
    },
    mounted() {
        this.systemDate()
    },
    methods: {
        systemDate() {
            API.Dataset.restSysTime().then(res => {
                console.log(res.data);
                this.currentTime = res.data.items['datetime_current'];
            })
        }
    }
}
</script>

<style scoped lang="scss">
#immSysInfo{
    padding-top: 8px;
    height: 100%;
    #sysGenInfoRight{
        float: right;
        display: flex;
    }
}
</style>
