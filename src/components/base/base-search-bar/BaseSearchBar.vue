<template>
  <div class="base-search-bar">
    <slot ></slot>
    <div class="right-button">
      <slot name="rightBtn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSearchBar'
}
</script>

<style lang="scss" scoped>
.base-search-bar {
  display: flex;
  position: relative;
  width: 100%;
  height: 45px;
  align-items: center;
  flex-wrap: wrap;
  /*border-bottom: #ccc 1px solid;*/
  .right-button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .search-item {
    display: flex;
    font-size: 14px;
    align-items: center;
    margin-left: 10px;
    > label {
      @include ellipsis();
    }
    > div {
    }
    /deep/.el-input {
      /*width: 160px;*/
    }
    .el-range-editor {
      width: 250px;
    }
  }
}
</style>
