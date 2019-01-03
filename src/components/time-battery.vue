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
    <p class="battery-tip">要对自己有信心^0^</p>
  </div>
</template>

<script>
export default {
  name: 'time-battery',
  props: {
    date: String
  },
  methods: {
    drawBody (cxt, x, y, width, height, radius){
      cxt.beginPath()
      cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2)
      cxt.lineTo(width - radius + x, y)
      cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2)
      cxt.lineTo(width + x, height + y - radius)
      cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2)
      cxt.lineTo(radius + x, height +y)
      cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI)
      cxt.closePath()
    },
    drawHead (context) {
      context.moveTo(190, 60)
      context.arc(190, 60, 10, Math.PI, Math.PI*1.5)
      context.lineTo(210, 50)
      context.arc(210, 60, 10, Math.PI*1.5, 0)
      context.stroke()
    },
    initCanvas () {
      const context = wx.createCanvasContext('battery')
      context.setStrokeStyle('#919CA3')
      context.setLineWidth(1)
      // 画电池body
      this.drawBody(context, 150, 60, 100, 180, 4)
      // 填充颜色
      context.setFillStyle('#D8F8B9')
      context.fill()
      // 画电池头部
      this.drawHead(context)
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

