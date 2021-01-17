<template>
    <div class="base-layout">
        <el-container>
            <el-aside :class="['layout-aside', collapsed ? 'mini-aside' : '']">
                <div class="logo" v-if="!collapsed">
                    <img src="@/assets/img/logo-edu.png" alt="" />
                    <span>教务服务平台</span>
<!--                    <img src="http://scimg.zhunedu.com/logo-edu.jpg" alt="" />-->
                </div>
                <div class="smallLogo" v-else>
                    <img src="@/assets/img/logo-edu.png" alt="" />
                </div>
                <base-scroll>
                    <el-menu
                            class="aside-menu"
                            :background-color="menuOption.backgroundColor"
                            :text-color="menuOption.textColor"
                            :active-text-color="menuOption.activeTextColor"
                            :default-active="active"
                            :collapse-transition="true"
                            :collapse="collapsed"
                    >
                        <template v-for="menus of menuOption.menuData">
                            <el-submenu
                                    v-if="menus.children"
                                    :index="menus.qtid"
                                    :key="menus.qtid"
                            >
                                <template #title>
                                    <i
                                            :class="[
                                            menus.icon,
                                            activeSub(menus.qtid) ? activeIcon : '',
                                            'menu-icon-custom'
                                        ]"
                                    />
                                    <span
                                            slot="title"
                                            :class="[activeSub(menus.qtid) ? activeIcon : '']"
                                    >{{ menus.name }}</span
                                    >
                                </template>
                                <el-menu-item
                                        @click.native="goRoute(item)"
                                        :index="item.qtid"
                                        v-for="item of menus.children"
                                        :key="item.qtid"
                                >{{ item.name }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                    @click.native="goRoute(menus)"
                                    v-else
                                    :key="menus.qtid"
                                    :index="menus.qtid"
                            >
                                <i
                                        :class="[
                                        // menus.qtid === 'MeetingManagement' ? menus.icon : 'el-icon-menu',
                                        // 'menu-icon-custom',
                                        menus.icon,
                                        isActiveMenuItem(menus.qtid) ? activeIcon : ''
                                    ]"
                                ></i>
                                <span slot="title">{{ menus.name }}</span>
                            </el-menu-item>
                        </template>
                    </el-menu>
                </base-scroll>
            </el-aside>
            <el-container class="container">
                <el-header style="height: 60px">
                    <div class="layout-header">
                        <i
                            @click="collapsed = !collapsed"
                            :class="[
                                collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold',
                                'trigger'
                            ]"
                        >
                            <span style="font-size: 20px;margin-left: 20px">上海市教育学会宝山实验学校</span>
                        </i>
                      <div class="header-user">
                        <el-dropdown>
                            <span class="el-dropdown-link">
                            <img src="@/assets/img/A-H1_09.png" alt="">
                            </span>

                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>{{userInfo.xm}}
                                </el-dropdown-item>
                                <el-dropdown-item @click.native="userLoginOut">退出
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                      </div>
<!--                        <div class="header-custom">-->
<!--                                <div v-if="userInfo.avatar" class="user-logo avatar">-->
<!--                                <img :src="userInfo.avatar" alt="" />-->
<!--                            </div>-->
<!--                            <i v-else class="el-icon-user-solid user-icon" />-->
<!--                          <span> {{userInfo.nickName}} </span>-->
<!--                          <el-dropdown>-->
<!--                                <i class="el-icon-arrow-down user-down" />-->
<!--                                <el-dropdown-menu slot="dropdown">-->
<!--                                    <el-dropdown-item @click.native="userLoginOut"-->
<!--                                        >退出-->
<!--                                    </el-dropdown-item>-->
<!--                                </el-dropdown-menu>-->
<!--                            </el-dropdown>-->
<!--                        </div>-->
                    </div>
                </el-header>
                <base-tab v-show="!this.$route.query.InformationSynchronization"></base-tab>
                <el-main style="overflow: auto;min-width: 1100px" class="layout-main">
                    <slot></slot>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
// import { loginOut } from '../../API/user'
import BaseScroll from '../base-scroll/BaseScroll'
import BaseTab from '../base-tab/BaseTab'
import { deleteForceLogout } from '../../API/user'
// import { baseRequestUrl } from '../../http/baseConfig'
import { mapState } from 'vuex'
// import store from '../../http/request'
// import { setLclStore } from '../../methods/utils'
export default {
  name: 'BaseLayout',
  components: {
    BaseTab,
    BaseScroll
  },
  computed: {
    ...mapState(['userInfo', 'messageCount', 'isLogin', 'token']),
    activeSub () {
      return id => {
        return id === this.$route.path.split('/')[1]
      }
    },
    isActiveMenuItem () {
      return id => {
        return this.$route.name === id
      }
    }
  },
  data () {
    return {
      userinfo: {
        user: {
          avatar: ''
        }
      },
      collapsed: false,
      active: this.$route.name,
      activeIcon: 'active-icon',
      userData: '',
      schoolInfo: '',
      menuOption: {
        backgroundColor: '#dd484a',
        activeTextColor: '#ffffff',
        textColor: '#fff',
        menuData: [
          {
            name: '考试管理',
            icon: 'el-icon-reading',
            qtid: 'ExamManagement'
          },
          {
            name: '考场管理',
            icon: 'el-icon-office-building',
            qtid: 'ExaminationRoomManagement'
          },
          {
            name: '排考管理',
            icon: 'el-icon-s-claim',
            qtid: 'ScheduleManagement',
            children: [
              { name: '考场安排', qtid: 'ExaminationRoomArrangement' },
              { name: '监考安排', qtid: 'InvigilationArrangement' },
              { name: '准考证模板', qtid: 'AdmissionTicketTemplate' }
            ]
          },
          {
            name: '课表管理',
            icon: 'el-icon-s-order',
            qtid: 'ScheduleCourseManagement',
            children: [
              { name: '班级课表', qtid: 'ScheduleCourseManagement' },
              { name: '教师课表', qtid: 'TeacherSchedule' },
              { name: '调课审核', qtid: 'TransferApplication' }
            ]
          },
          {
            name: '选课管理',
            icon: 'el-icon-s-finance',
            qtid: 'CourseManagement',
            children: [
              { name: '学生端选课管理', qtid: 'CourseManagement' },
              { name: '教师端选课管理', qtid: 'TeacherCourseManagement' },
              { name: '选课审核', qtid: 'CourseReview' }
            ]
          },
          {
            name: '考试成绩管理',
            icon: 'el-icon-data-line',
            qtid: 'ScoreStatistics'
          },
          {
            name: '教师岗位信息',
            icon: 'el-icon-files',
            qtid: 'TeachingManagement'
          }
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    // 路由跳转
    goRoute (item) {
      this.$router.push({ name: item.qtid })
    },
    goLink () {
      this.$router.push({ name: 'Links' })
    },
    userLoginOut () {
      // loginOut().then(() => {
      //   localStorage.clear()
      //   this.$store.dispatch('refreshTabs', [
      //     {
      //       name: '首页',
      //       icon: 'home',
      //       id: 'SiteManagement',
      //       path: '/SiteManagement',
      //       notClose: true
      //     }
      //   ])
      deleteForceLogout({ token: this.token }).then(res => {
        // this.$store.commit('changeLoginState', false)
        // this.$store.commit('setUserInfo', {})
        // this.$store.commit('setMenuData', [])
        // this.$store.commit('setToken', '')
        // this.$store.commit('setApps', [])
        // setLclStore('username', '')
        sessionStorage.clear()
        // const URL = window.location.origin + process.env.VUE_APP_ROUTE_API
        window.location.replace(process.env.VUE_APP_LOGIN_OUT_REDIRECT_URL.replace('REDIRECT_URI', window.location.origin))
      })

      // this.$router.push({ name: 'Login' })
      // })
    }
  },
  watch: {
    $route () {
      this.active = this.$route.path.split('/')[2]
    }
  }
}
</script>
<style lang="scss" scope>
.base-layout {
    position: fixed;
    right: 0;
    left: 0;
    background: rgba(48, 65, 86, 0.36);
    /*侧边栏*/
    .layout-aside {
        /*height: 100vh;*/
        width: 220px !important;
        overflow: hidden;
        // background: $app-primary;
        background:$menuBg;
        height: 100vh;
        padding-bottom: 30px;
        .logo {
          display: flex;
          align-items: center;
          justify-content: center;
            height: 60px;
            background: $app-header-background;
            text-align: center;
            color: white;
            font-size: 16px;
          font-weight: 700;
            line-height: 60px;
            img {
              /*margin: 18px 5px;/*/
              /*vertical-align: middle;*/
                display: inline-block;
                height:40px;
              margin-right: 5px;
            }

        }
        .smallLogo{
            height:60px;
          background: $app-header-background;
            text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
            color: white;
            img {
                display: inline-block;
                height: 40px;
                width: 40px;
            }
        }
        .aside-menu {
            flex: 1;
            border-right: none;
            /*padding-right: 10px;*/
            .menu-icon-custom {
            }

            .active-icon {
                color:  $app-text-color;
            }

            .collapsed-color {
                color: $app-layout;
            }

            .el-submenu__icon-arrow {
                color: rgb(167, 167, 167);
            }
        }
      .el-submenu__title,
      .el-menu-item{
        i{
          color: $menuText !important;
        }
      }
      .submenu-title-noDropdown,
      .el-submenu__title {
        &:hover {
          background-color: $menuHover !important;
        }
      }

      .is-active>.el-submenu__title {
        color: $subMenuActiveText !important;
      }

      & .nest-menu .el-submenu>.el-submenu__title,
      & .el-submenu .el-menu-item {
        background-color: $menuBg !important;

        &:hover {
          background-color: $subMenuHover !important;
          color: $menuText !important;
        }
      }
      & .el-submenu .is-active{
        background-color: $menuHover !important;
      }
      & .el-menu .is-active{
        background-color: $menuHover !important;
      }
    }

    .mini-aside {
        width: 64px !important;
    }

    /*头部*/
    .el-header {
        // height: 100px;
        padding: 0 20px;
        background:$app-header-background;
        width: 100%;
    }
  .header-user {
    display: flex;
    align-items: center;
    img{
      width: 35px;
    }
    > div {
      display: flex;
      align-items: center;
      cursor: pointer;
      > p {
        margin-left: 20px;
      }
    }
    .el-button {
      margin-left: 20px;
    }
  }
    .layout-header {
        /*height: 40px;*/
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background:$app-header-background;
      color: #ffffff;
        /*padding: 0 20px;*/
        .trigger {
            font-size: 24px;
            /*line-height: 64px;*/
            cursor: pointer;
            transition: color 0.2s;
            /*padding: 0 24px;*/
            /*color: #000;*/

            // &:hover {
            //  color: $app-primary;
            // }
        }

        .header-custom {
            display: flex;
            align-items: center;
            .userInfo{
                font-size: 14px;
                color: #ffffff;
                li{
                    line-height: 20px;
                    height: 20px;
                }
            }
            .user-logo {
                color: #ffffff;
                margin-right: 5px;
                &.avatar {
                    width: 32px;
                    height: 32px;
                    background: #cccccc;
                    border-radius: 50%;
                    display: inline-block;

                    > img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .user-icon {
                font-size: 26px;
                color: #cccccc;
            }

            .user-down {
                color: #cccccc;
                font-weight: 600;
                line-height: 32px;
                font-size: 14px;
                margin-left: 10px;
            }
        }

        .ant-layout-header {
        }
    }

    /*主体*/
    .container {
        height: 100vh;
    }

    .el-main {
        background: #fff;
        height: 100%;
        min-height: 500px;
        flex: 1;
        padding: 10px 10px 40px 10px;
        margin: 10px;
        overflow: hidden;
    }
}
</style>
