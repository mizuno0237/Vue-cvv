<template>
    <div class="base-button">
        <button 
        :disabled="ifDisabled" 
        :class="ifDisabled ? 'disabled' : 'enabled'" 
        @click="clickEvent()"
        :style="{'color' : isCancelBtn ? '#666' : '#fff', 'background-color' : isCancelBtn ? '#e1e5ec' : ''}">
        {{ isCancelBtn ? 'Cancel' : btnMsg }}
        </button>
    </div>
</template>

<script>
export default{
    name:'BaseButton',
    props:{
        ifDisabled:{
            type: Boolean,
            default: false
        },
        clickEvent: {
            type: Function,
            default: null
        },
        btnMsg: {
            type: String,
            default: ''
        },
        isCancelBtn: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
button{
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    height: 32px;
    min-width: 98px;
    border-style: none;
    padding: 0 20px;
}
.enabled{
    background-color: rgb(51,63,75);
    cursor: pointer;
}
.enabled:hover{
    outline: rgb(0, 121, 186) solid 2px;
}
.disabled{
    background-color: rgb(138,153,168);
    cursor: not-allowed;
}
.disabled:hover{
    outline: red solid 2px;
}
</style>
