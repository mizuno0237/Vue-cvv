<template>
    <div class="base-tabs">
        <el-row>
            <el-col :span="23">
                <el-tabs
                        class="tabs-wrapper"
                        v-model="activeKey"
                        type="card"
                        @tab-click="tabClick"
                        @edit="onEdit"
                >
                    <el-tab-pane
                            :key="item.id"
                            v-for="item of ownTabs"
                            :label="item.name"
                            :closable="!item.notClose"
                            :name="item.path"
                    >
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="1">
                <el-tooltip class="btn-item" effect="dark" content="点击清除标签" placement="left-start">
                    <el-button size="mini" type="danger" @click="deleteAllTab" class="deleteIcon" icon="el-icon-delete" > </el-button>
                </el-tooltip>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'BaseTab',
  data () {
    return {
      ownTabs: [],
      tabBarStyle: {
        background: '#000'
      },
      activeKey: this.$route.path
    }
  },
  mounted () {
    this.ownTabs = localStorage.tabs
      ? JSON.parse(localStorage.tabs)
      : [{
        icon: 'home',
        id: 'ExamManagement',
        name: '考试管理',
        notClose: true,
        path: '/ExamManagement/ExamManagement'
      }]
    const obj = {}
    this.ownTabs.map(function (e) {
      obj[e.id] = e
    })

    // console.log(this.$route.path.split('/')[2])
  },
  methods: {
    // 初始化tab
    deleteAllTab () {
      this.ownTabs = [{
        icon: 'home',
        id: 'ExamManagement',
        name: '考试管理',
        notClose: true,
        path: '/ExamManagement/ExamManagement'
      }]
      
      localStorage.removeItem('educationTabs')
      this.$router.push({ path: '/ExamManagement/ExamManagement' })
    },
    // 初始化tab
    init () {},
    onEdit (targetKey, action) {
      this[action](targetKey)
    },
    remove (targetKey) {
      console.log(this.ownTabs, targetKey)
      if (!targetKey) {
        this.ownTabs = [{
          icon: 'home',
          id: 'ExamManagement',
          name: '考试管理',
          notClose: true,
          path: '/ExamManagement/ExamManagement'
        }]
        localStorage.removeItem('educationTabs')
        this.$router.replace({ path: '/ExamManagement/ExamManagement' })
        // location.reload()
      } else {
        this.ownTabs.map((item, i) => {
          if (item.path === targetKey) {
            this.ownTabs.splice(i, 1)
            console.log(item.id, this.$route.name)
            if (!this.$route.meta.form) {
              if (item.id === this.$route.name) {
                this.$router.push({ name: this.ownTabs[i - 1].id })
              }
            } else {
              if (item.id === this.$route.path.split('/')[2]) {
                this.$router.push({ name: this.ownTabs[i - 1].id })
              }
            }
          }
        })
        localStorage.setItem('educationTabs', JSON.stringify(this.ownTabs))
        // this.$store.dispatch('refreshTabs', this.ownTabs)
      }
    },
    tabClick (item) {
      this.$router.push(item.name)
    }
  },
  watch: {
    $route (to, form) {
      if (this.$route.name !== 'ExamManagement') {
        // this.activeKey = '/' + this.$route.path.split('/')[1] + '/' + this.$route.path.split('/')[2]
        this.activeKey = this.$route.path
        console.log(this.$route.meta.form)
        if (!this.$route.meta.form) {
          if (
            this.ownTabs.findIndex(item => item.path === this.$route.path) === -1
          ) {
            this.ownTabs.push({
              id: this.$route.name,
              path: this.$route.path,
              name: this.$route.meta.label
            })
          }
          // this.$store.dispatch('refreshTabs', this.ownTabs)
          localStorage.setItem('educationTabs', JSON.stringify(this.ownTabs))
        } else {
          this.activeKey = '/' + form.path.split('/')[1] + '/' + form.path.split('/')[2]
          console.log(this.activeKey)
        }
      } else {
        this.activeKey = '/ExamManagement/ExamManagement'
      }
    }
  }
}
</script>
<style lang="scss">
.base-tabs {
    background-color: #fff;
    justify-content: space-between;
    align-items: center;
    .deleteIcon{
        cursor: pointer;
    }
    .tabs-wrapper {
        background: #ffffff;
        .el-tabs__header {
            margin: 0;
            .el-tabs__item {
                background: #ffffff;
            }
            .el-tabs__nav-next,
            .el-tabs__nav-prev {
                color: white;
                font-size: 16px;
            }
        }
    }
  .btn-item{
    margin-top: 5px;
  }
    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: $app-primary;
        border-bottom-width: 2px;
    }
}
</style>
