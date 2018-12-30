/*
 * @Author: wush12
 * @Date: 2018-12-30 13:36:26
 * @Last Modified by: wush12
 * @Last Modified time: 2018-12-30 13:57:55
 */
<template>
  <div>
    <home-head @changeBirth="changeBirth"></home-head>
    <time-battery :date="birthday"></time-battery>
  </div>
</template>

<script>
// import TimeBattery from '@/components/time-battery'
import HomeHead from './home-head'

export default {
  name: 'home',
  components: {
    // TimeBattery,
    HomeHead
  },
  data () {
    return {
      birthday: ''
    }
  },
  methods: {
    changeBirth (date) {
      this.birthday = date
    }
  },
  created () {

  }
}
</script>

<style lang="less" scoped>
</style>
