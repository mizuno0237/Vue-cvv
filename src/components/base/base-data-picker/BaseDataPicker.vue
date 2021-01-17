<template>
    <div class="date">
        <span class="label" v-show="label">{{ `${label}:` }}</span>
        <el-date-picker
                :clearable="clearable"
                v-model="ownTime"
                :disabled="disabled"
                :type="type"
                :style="`width:${width};`"
                size="small"
                :value-format="handleValueFormat(type)"
                :format="handleFormat(type)"
                range-separator="/"
                :placeholder="placeholder"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
                @change="changeTime"
        >
        </el-date-picker>
    </div>

</template>
<script>
export default {
  name: 'BaseDataPicker',
  props: {
    label: String,
    time: {
      type: [String, Array, Date]
    },
    width: { type: String, default: '100%' },
    // 时间选择器类型，目前有年，周，月，日，日期区间，此项必传
    type: {
      type: String,
      default: 'date',
      required: true,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return (
          ['date', 'week', 'year', 'month', 'daterange', 'datetime', 'dates'].indexOf(
            value
          ) !== -1
        )
      }
    },
    placeholder: String,
    // 是否开启日期禁选
    disableDate: Boolean,
    // 禁选 是否包含今天
    today: Boolean,
    disabled: Boolean,
    range: Array,
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      ownTime: this.time,
      pickerOptions: {
        disabledDate: time => this.disabledDate(time),
        firstDayOfWeek: 7
      }
    }
  },
  computed: {
    handleFormat () {
      return val => {
        switch (val) {
          case 'date':
            return 'yyyy-MM-dd'
          case 'dates':
            return ''
          case 'datetime':
            return 'yyyy-MM-dd HH:mm:ss'
          case 'week':
            return 'yyyy年第WW周'
          case 'year':
            return 'yyyy'
          case 'month':
            return 'yyyy-MM'
          case 'daterange':
            return ''
        }
      }
    },
    handleValueFormat () {
      return val => {
        switch (val) {
          case 'date':
          case 'dates':
          case 'daterange':
            return 'yyyy-MM-dd'
          case 'datetime':
            return 'yyyy-MM-dd HH:mm:ss'
          case 'week':
            return 'yyyy-MM-dd'
          case 'year':
            return 'yyyy'
          case 'month':
            return 'yyyy-MM'
        }
      }
    }
  },
  methods: {

    changeTime () {
      this.$emit('changeTime')
    },

    // 不可选日期 8.64e6包含今日，8.64e7不包含今日
    disabledDate (time) {
      if (this.disableDate) {
        // var times = Date.now()
        // return time.getTime() > times;
        // console.log(this.range)
        if (!this.range) {
          var times = Date.now()
          return time.getTime() > times
        } else {
          return time.getTime() < new Date(this.range[0].year, this.range[0].month, this.range[0].day) || time.getTime() > new Date(this.range[1].year, this.range[1].month, this.range[1].day)
        }
        // if (this.today) {
        //  return time.getTime() < Date.now() - 8.64e6
        // } else {
        //  return time.getTime() < Date.now() - 8.64e7
        // }
      }
    }
  },
  watch: {
    ownTime () {
      this.$emit('update:time', this.ownTime)
    },
    time () {
      // if (typeof JSON.parse(this.time) == 'object') {
      //  this.ownTime = JSON.parse(this.time)
      // } else {
      //  this.ownTime = this.time
      // }
      try {
        if (typeof JSON.parse(this.time) === 'object') {
          this.ownTime = JSON.parse(this.time)
        }
      } catch (e) {
        this.ownTime = this.time
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .date{
        display: flex;
        align-items: center;
    }
    .label {
        white-space: nowrap;
        margin-right: 10px;
        font-size: 14px;
    }
</style>
