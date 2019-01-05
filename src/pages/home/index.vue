/*
 * @Author: wush12
 * @Date: 2018-12-30 13:36:26
 * @Last Modified by: wush12
 * @Last Modified time: 2019-01-02 20:19:58
 */
<template>
  <div>
    <home-head @changeBirth="changeBirth"></home-head>
    <time-battery :data="batteryValue"></time-battery>
  </div>
</template>

<script>
import TimeBattery from '@/components/time-battery'
import HomeHead from './home-head'
import birthInterval from '@/utils/birth-interval'

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
  computed: {
    batteryValue () {
      if (this.birthday) {
        return birthInterval(new Date(this.birthday)) / 9
      }
      return 100
    }
  },
  methods: {
    changeBirth (date) {
      this.birthday = date
    },
    getBirthdayToNow () {
      return birthInterval(new Date(this.date)) / 900
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
