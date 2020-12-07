<template>
  <div class="hello" height="100%">
    <el-container height="100%">
        <el-aside width="58.6%">login left</el-aside>
        <el-container width="41.4%;">
            <el-main>login left</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

</script>

<style scoped>
.el-aside {
    background-color: rgba(51, 63, 75, 1);
    color: #fff;
    text-align: center;
    line-height: 200px;
}
  
.el-main {
    background-image: url(../../assets/login_right_bg.png);
    color: #fff;
    text-align: center;
    line-height: 160px;
}
</style>