<template>
    <div class="base-select">
        <span class="label" v-show="label">{{ `${label}:` }}</span>
        <el-select
            :filterable="isFilterable"
            @change="handleSelectChange"
            :clearable="clearable"
            :disabled="disabled"
            size="small"
            v-model="ownValue"
            :placeholder="placeholder"
        >
            <el-option
                v-for="item of ownOptions"
                :key="item[optionValue]"
                :label="item[optionName]"
                :value="item[optionValue]"
                @click.native="optionsClick(item)"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    placeholder: String,
    label: String,
    clearable: Boolean,
    isFilterable: Boolean,
    disabled: Boolean,
    notAll: Boolean,
    value: [String, Number],
    optionName: {
      type: String,
      default: 'value'
    },
    optionValue: { type: String, default: 'label' },
    options: {
      type: Array
    }
  },
  data () {
    return {
      ownValue: this.value,
      ownOptions: [{ [this.optionValue]: 0, [this.optionName]: '全部' }]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.notAll) {
        this.ownOptions = this.options
      }
    },
    handleSelectChange (val) {
      this.$emit('selectChange', val)
    },
    optionsClick (item) {
      this.$emit('optionClick', item)
    }
  },
  watch: {
    ownValue () {
      this.$emit('update:value', this.ownValue)
    },
    options () {
      if (this.notAll) {
        this.ownOptions = []
      } else {
        // if(this.all){
        this.ownOptions = [{ [this.optionValue]: 0, [this.optionName]: '全部' }]
        //  // this.ownOptions = [{ mapKey: 0, mapValue: '全部' }]
        // }else{
        //  this.ownOptions = [{ id: 0, className: '全部' }]
        // }
      }
      this.ownOptions = this.ownOptions.concat(this.options)
    },
    value () {
      this.ownValue = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.base-select {
    white-space: nowrap;
    .label {
        white-space: nowrap;
        margin-right: 10px;
        font-size: 14px;
    }
}
</style>
