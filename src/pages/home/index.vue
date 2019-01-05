/*
 * @Author: wush12
 * @Date: 2018-12-30 13:36:26
 * @Last Modified by: wush12
 * @Last Modified time: 2019-01-02 20:19:58
 */
<template>
  <div>
    <home-head @changeBirth="changeBirth"></home-head>
    <time-battery></time-battery>
  </div>
</template>

<script>
import TimeBattery from '@/components/time-battery'
import HomeHead from './home-head'

export default {
  name: 'home',
  components: {
    TimeBattery,
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
  onShow () {
    wx.setTabBarStyle({
      backgroundColor: '#FFFFFF'
    })
  }
}
</script>

<style lang="less" scoped>
</style>
