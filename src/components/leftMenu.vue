<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                :default-active="this.$router.path"
                router
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#333F4B"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item index="/home">
                        <i><img src="../assets/icons/home-white.png" alt="" style="width: 16px;height: 16px;"/></i>
                        <span slot="title">Home</span>
                    </el-menu-item>
                    <el-menu-item index="/event">
                        <i><img src="../assets/icons/events-white.png" alt="" style="width: 16px;height: 16px;"/></i>
                        <span slot="title">Event</span>
                    </el-menu-item>
                    <el-menu-item index="/inventory">
                        <i><img src="../assets/icons/inventory-white.png" alt="" style="width: 16px;height: 16px;"/></i>
                        <span slot="title">Inventory</span>
                    </el-menu-item>
                    <el-submenu index="">
                        <template slot="title">
                            <i><img src="../assets/icons/bmc-configuration-white.png" alt="" style="width: 16px;height: 16px;"/></i>
                            <span>BMC Configuration</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/license">License</el-menu-item>
                            <el-menu-item index="/security">Security</el-menu-item>
                            <el-menu-item index="/network">Network</el-menu-item>
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
.el-menu-vertical-demo.el-menu > .el-menu-item{
    padding: 0!important;
    display: flex;
    i{
        flex: 1;
    }
    span{
        flex: 5;
        padding-top: 1px;
    }
}
/deep/.el-submenu__title{
    padding: 0!important;
    display: flex;
    span{
        margin: 1px 0 0 9px;
    }
}
.el-submenu{
    ul{
        li{
            ul{
                li{
                    padding-left: 35px;
                }
            }
        }
    }
}
.el-menu-vertical-demo.el-menu{
    border: 0px;
}
</style>
