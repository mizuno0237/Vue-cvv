<template>
  <div class="base-table">
    <el-table
      :header-cell-style="{background:'#f8f8f9',color:'#515a6e',fontWeight:550}"
      :span-method="arraySpanMethod"
      v-loading="load"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, 0.8)"
      :cell-class-name="handleCell"
      :header-row-class-name="tableHeader"
      @selection-change="handleCustomSelect"
      ref="table"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      :data="tableData"
      :rowArr = 'rowSpanArr'
      style="width: 100%"
      :border="border"
    >
      <p slot="empty">
        暂无数据哦~
      </p>
      <el-table-column v-if="selection" type="selection" width="55">
      </el-table-column>
      <el-table-column label="序号" v-if="isIndex" type="index" width="80">
      </el-table-column>
      <el-table-column
        v-for="(item,index) of labelData"
        :prop="item.prop"
        :min-width="item.width ? '' : item.maxWidth"
        :width="item.maxWidth ? '' : item.width"
        :label="item.label"
        :key="index "
      >
      </el-table-column>
      <slot></slot>
    </el-table>
    <div class="table-bottom">
      <div class="a"></div>
      <slot name="batch"></slot>
      <el-pagination
        v-if="pagi"
        @size-change="handleSelectionChange "
        @current-change="getCurrentPage"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes='pageSizeArr'
        :page-size='pageSize'
        :current-page.sync="tableCurrentPage"
        :total="counts"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',
  props: {
    load: Boolean,
    tableData: Array,
    labelData: Array,
    rowSpanArr: Array,
    pagi: Boolean,
    counts: Number,
    currentPage: Number,
    selection: Boolean,
    isIndex: Boolean,
    border: Boolean,
    merge: {
      type: Boolean,
      default: false
    },
    mergeCells: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      pageSizeArr: [],
      pageSize: '',
      loading: true,
      tableHeader: 'table-header',
      tableCurrentPage: this.currentPage
    }
  },
  created () {
    this.pageSizeArr = [5, 10, 15, 20]
    this.pageSize = 1
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (this.merge) {
        // 只合并区域位置
        if (columnIndex === 0) {
          const _row = this.rowSpanArr[rowIndex]
          return {
            rowspan: _row, // 行
            colspan: 1 // 列
          }
        }
      }
      if (this.mergeCells) {
        // 只合并区域位置
        if (columnIndex === 0) {
          if (rowIndex % this.index === 0) {
            return {
              rowspan: 6,
              colspan: 1
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
      }
      // this.$emit('arraySpanMethod',{ row, column, rowIndex, columnIndex })
    },
    handleCustomSelect (row) {
      this.$emit('customSelect', row)
    },
    handleTableCurrentPage () {
      this.tableCurrentPage = 1
    },
    handleCell ({ column }) {
      switch (column.property) {
        case 'Desc':
        case 'Name':
        case 'Tooth':
        case 'Town':
        case 'SchoolAdd':
        case 'desc':
        case 'Msg':
        case 'Title':
        case 'KeyWord':
        case 'ActivityName':
        case 'ActivityAdd':
        case 'household':
          return 'table-cell'
      }
    },
    getCurrentPage (index) {
      this.$emit('pageChange', index)
    },
    handleSelectionChange (val) {
      this.$emit('selection-change', val)
    }
  },
  mounted () {},
  watch: {
    currentPage () {
      this.tableCurrentPage = this.currentPage
    }
  }
}
</script>

<style lang="scss" scoped>
.base-table {
  .table-bottom {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  /deep/.table-header {
    background: #000;
  }
  /deep/.el-table {
    .el-table__row {
      td {
      }
    }
    .table-cell {
      > .cell {
        @include ellipsis();
      }
    }
    .cell {
      .el-button {
        margin-bottom: 4px;
        margin-left: 4px;
      }
    }
  }
    /deep/.spans{
    color: $app-primary;
    margin: 0 6px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
