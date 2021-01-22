<template>
    <div id="showRemoteConsole">
        <div id="canvasParentDiv">This is remote console</div>
    </div>
</template>

<script>
export default {
    name: 'remote',
    data () {
        return {
        }
    }
}
</script>

<style scoped lang="scss">
#showRemoteConsole{
    height: 100%;
    width: 750px;
    margin-left: auto;
    min-width: 580px;
    margin-right: auto;
    background-color: rgb(255, 255, 255);
    #canvasParentDiv{
        width: 750px;
        height: 563.91px;
        float: left;
        background-color: rgb(0, 0, 0);
        min-width: 580px;
        color: #fff;
    }
}
</style>
  