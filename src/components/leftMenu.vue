<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#333F4B"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Home</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span slot="title">Event</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Inventory</span>
                    </el-menu-item>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                        <span>BMC Configuration</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">License</el-menu-item>
                            <el-menu-item index="1-2">Security</el-menu-item>
                            <el-menu-item index="1-3">Network</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'leftMenu',
    data() {
        return {
            isCollapse: true
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped lang='scss'>
.el-col.el-col-12{
    width: 100%;
}
</style>
