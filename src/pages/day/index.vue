/*
 * @Author: wush12
 * @Date: 2018-12-30 19:28:50
 * @Last Modified by: wush12
 * @Last Modified time: 2019-01-02 20:20:02
 */
<template>
  <div class="day-card-wrap">
    <div class="day-card">
      <p class="data-card-title">还没有事件</p>
      <p class="data-card-content">点击下面按钮新增一个<br/>请注意！数据只保存在你的手机中，最多10条</p>
    </div>
    <p class="day-card-tip">总有一些日子让你刻骨铭心</p>
    <div class="day-card-add-wrap">
      <div class="day-card-add" @click="addSchedule">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'day',
<<<<<<< HEAD
  onLoad () {
    wx.setTabBarStyle({
      backgroundColor: '#D8F8B9'
    })
  },
  methods : {
=======
  methods:{
>>>>>>> refs/remotes/origin/master
    addSchedule(){
      console.log('跳转')
      wx.navigateTo({
        url: '../routine/routine'
      })
    }
  },
  onShow () {
    wx.setTabBarStyle({
      backgroundColor: '#D8F8B9'
    })
  }
}
</script>

<style lang="less" scoped>
.day-card-wrap {
  position:absolute;
  top:0;
  bottom:0;
  left: 0;
  right: 0;
  background: #D8F8B9;
}
.day-card {
  margin: 10px 4px;
  padding: 10px;;
  background: #FFFFFF;
  border-radius: 4px;
}

.day-card-tip {
  font-size: 10px;
  color: #6C7880;
  text-align: center
}

.day-card-add-wrap {
  text-align: center;
}

.data-card-title {
  padding: 6px 0;
  font-size: 16px;
  font-weight: 300;
}

.data-card-content {
  font-size: 12px;
  font-weight: 300;
  color: #919CA3;
}

.day-card-add {
  display: inline-block;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #FFFFFF;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  box-shadow: 0px 0px 10px #888888;
}
</style>
