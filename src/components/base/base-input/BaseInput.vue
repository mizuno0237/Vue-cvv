<template>
    <div class="base-input">
        <span class="label" v-show="label">{{ `${label}:` }}</span>
        <el-input
            :disabled="disabled"
            v-if="!number"
            v-model="ownValue"
            :placeholder="placeholder"
            size="small"
            :type="type"
            min="1"
            :clearable="clearable"
            :show-password="psd"
            @blur="blurs(ownValue)"
        ></el-input>
        <el-input-number
            v-else
            :controls="false"
            :disabled="disabled"
            v-model.number="ownValue"
            :placeholder="placeholder"
            size="small"
            :step="step"
            :precision="precision"
            :clearable="clearable"
            :show-password="psd"
            @blur="blurs(ownValue)"
        ></el-input-number>
    </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    size: {
      type: String,
      default: 'small'
    },
    step: Number,
    precision: Number,
    clearable: Boolean,
    disabled: Boolean,
    psd: Boolean,
    number: Boolean,
    placeholder: String,
    label: String,
    value: [String, Number],
    options: Array,
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      ownValue: this.value
    }
  },
  methods: {
    blurs (number) {
      this.$emit('blurs', number)
      // console.log(number, 'number')
    }
  },
  watch: {
    ownValue () {
      this.$emit('update:value', this.ownValue)
    },
    value () {
      this.ownValue = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
    display: flex;
    align-items: center;
    .label {
        white-space: nowrap;
        margin-right: 10px;
        font-size: 14px;
    }
}
</style>
