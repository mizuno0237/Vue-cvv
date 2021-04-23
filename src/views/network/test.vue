<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
export default{
    data() {
        return {
            msg: "it's a test"
        }
    }
    methods: {
        msg() {
            setInterval(() => {
                console.log(this.$parent);
            }, 1000)
        }
    }
}
</script>

<style>
</style>
