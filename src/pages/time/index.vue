<template>
  <div>
    <div class="time-header">{{ now }}</div>
    <swiper
      class="time-swiper"
      :indicator-dots="true"
      indicator-color="#919CA3"
      indicator-active-color="#6C7880">
      <swiper-item v-for="(item, index) in timeArr" :key="item">
        <time-battery :item-id="index" :data="90" :showTips="false"></time-battery>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import dateFormat from '@/utils/date-format'
import timeBattery from '@/components/time-battery'

export default {
  name: 'time',
  components: {
    timeBattery
  },
  data () {
    return {
      now: dateFormat(new Date(), 'YYYY年MM月DD日'),
      timeArr: ['year', 'month', 'day']
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
.time-header {
  height: 40px;
  text-align: center;
}

.time-swiper {
  height: 300px;
}
</style>
