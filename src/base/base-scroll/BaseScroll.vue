<template>
    <vuescroll :ops="ops"><slot></slot> </vuescroll
></template>

<script>
import vuescroll from 'vuescroll'

export default {
  name: 'BaseScroll',
  components: {
    vuescroll
  },
  data () {
    return {
      ops: {
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: false,
          background: '#b11e20',
          opacity: 1,
          hoverStyle: false,
          size: '10px'
        }
      }
    }
  }
}
</script>

<style scoped></style>
