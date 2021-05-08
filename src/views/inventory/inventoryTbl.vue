<template>
    <div>
        <div class="xccContentdiv">
            <div class="inventoryTitle">{{ title }}</div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title: {
            type: String,
            default: ''
        },
        inventoryData: {
            type: Array,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
.xccContentdiv{
    margin-bottom: 40px;
    border: 1px solid #d1d1d1;
    .inventoryTitle{
        padding: 15px;
    }
}
</style>
