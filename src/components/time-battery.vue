/*
 * @Author: wush12
 * @Date: 2018-12-30 13:36:16
 * @Last Modified by: wush12
 * @Last Modified time: 2019-01-03 00:24:41
 */
<template>
  <div class="battery-wrap">
    <div>
      <canvas
        style="width: 400px; height: 300px;"
        canvas-id="battery"></canvas>
    </div>
    <p class="battery-tip">你就是一个小可爱！！</p>
  </div>
</template>

<script>
export default {
  name: 'time-battery',
  props: {
    date: String
  },
  methods: {
    initCanvas () {
      const context = wx.createCanvasContext('battery')
      context.setStrokeStyle('#919CA3')
      context.setLineWidth(1)
      context.moveTo(150, 60)
      context.lineTo(250, 60)
      context.lineTo(250, 240)
      context.lineTo(150, 240)
      context.lineTo(150, 60)
      context.setFillStyle('#D8F8B9')
      context.fill()
      context.stroke()
      context.draw()
    }
  },
  mounted () {
    this.initCanvas()
  }
}
</script>

<style lang="less" scoped>
.battery-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.battery-tip {
  position: absolute;
  bottom: 10px;
  color: #919CA3;
  text-align: center;
  font-size: 12px;
}
</style>

