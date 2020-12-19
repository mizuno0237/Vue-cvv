<template>
    <div>
        <el-row>
            <el-col :span="12" id="mainInfo">
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-white">
                            <el-tabs v-model="activeName">
                                <el-tab-pane label="Health Summary" name="first">
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/cpu-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">CPU</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/memory-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Memory</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/storage-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Local Storage</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/pci-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">CPU</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/power-supply-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Memory</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/fan-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Local Storage</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/system-board-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">CPU</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                        <el-col :span="8">
                                            <img src="../../assets/icons/other-dcgg.png">
                                            <div><router-link class="hwTypeInfo" :to="{path:'/inventory'}">Memory</router-link></div>
                                            <div class="hwInstallInfo">
                                                {{ '2' + ' / ' + '4' + ' installed'}}
                                            </div>
                                        </el-col>
                                    </el-row>
                                </el-tab-pane>
                                <el-tab-pane :label="'Active System Events('+activeEvent+')'" name="second">Active System Events ({{activeEvent}})</el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12" id="SystemInfo">
                <el-col :span="24">
                    <div class="grid-content bg-purple-white">
                    </div>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            activeName: 'first',
            activeEvent: 0
        }
    }
}
</script>

<style scoped lang="scss">
.el-tabs.el-tabs--top{
    padding: 20px 20px 0 20px;
}
.el-tabs__item.is-active {
    font-weight: 700
}
#mainInfo{
    padding-right: 10px;
    .el-col.el-col-8{
        text-align: center;
        margin-top: 22px;
        .hwInstallInfo{
            font-size: 12px;
            line-height: 28px;
        }
        .hwTypeInfo{
            font-size: 12px;
            color: #0096E7;
            a:hover{
                text-decoration: underline
            }
        }
        img{
            height: 32px;
            width: 32px;
        }
    }
}
#SystemInfo{
    padding-left: 10px;
}
.el-col {
    border-radius: 4px;
    .grid-content {
        border-radius: 4px;
        height: 450px;
    }
    .bg-purple-white {
        background: #fff;
    }
}
</style>
  