/*
import { clearInterval } from 'timers';
 * @Author: wush12
 * @Date: 2018-12-30 13:36:16
 * @Last Modified by: wush12
 * @Last Modified time: 2019-01-06 22:04:41
 */
<template>
  <div class="battery-wrap">
    <div>
      <canvas
        style="width: 400px; height: 300px;"
        canvas-id="battery"></canvas>
    </div>
    <p class="battery-tip" v-if="showTips">要对自己有信心^0^</p>
  </div>
</template>

<script>
export default {
  name: 'time-battery',
  props: {
    data: {
      type: Number,
      default: 100,
      showTips: {
        type: Boolean,
        default: true
      }
    }
  },
  data () {
    return {
      batteryValue: 100, // 剩余电量
      // 电池起点
      batteryOringin: {
        x: 150,
        y: 60
      },
      batteryWidth: 100, // 电池宽度
      batteryHeitgh: 180, // 电池宽度
      control: {
        x: 150,
        y: 60
      }, // 初始化波浪控制点
      radius: 4, // 电池圆角
      waveHeight: 8, // 波浪高度
      waveY: 60, // 波浪y轴
      context: null,
      waveTimer: null,
      direction: 'right' // 波浪控制点移动方向
    }
  },
  computed: {
    // 电池右上角坐标
    rightTop () {
      return {
        x: this.batteryWidth + this.batteryOringin.x,
        y: this.batteryOringin.y
      }
    },
    // 右边波浪坐标
    waveRight () {
      return {
        x: this.batteryWidth + this.batteryOringin.x,
        y: this.waveY
      }
    },
    // 右下角坐标
    rightBottom () {
      return {
        x: this.batteryWidth + this.batteryOringin.x,
        y: this.batteryOringin.y + this.batteryHeitgh
      }
    },
    // 左下角坐标
    leftBottom () {
      return {
        x: this.batteryOringin.x,
        y: this.batteryOringin.y + this.batteryHeitgh
      }
    },
    // 左边波浪
    waveLeft () {
      return {
        x: this.batteryOringin.x,
        y: this.waveY
      }
    }
  },
  methods: {
    drawBodyTop (context) {
      context.beginPath()
      context.moveTo(this.waveLeft.x, this.waveLeft.y)
      context.lineTo(this.batteryOringin.x, this.batteryOringin.y + this.radius)
      context.arc(this.batteryOringin.x + this.radius, this.batteryOringin.y + this.radius, this.radius, Math.PI, Math.PI * 3 / 2)
      context.lineTo(this.rightTop.x - this.radius, this.rightTop.y)
      context.arc(this.rightTop.x - this.radius, this.radius + this.rightTop.y, this.radius, Math.PI * 3 / 2, Math.PI * 2)
      context.lineTo(this.waveRight.x, this.waveRight.y)
      context.stroke()
    },
    drawBodyBottom (context) {
      context.moveTo(this.waveRight.x, this.waveRight.y)
      context.lineTo(this.rightBottom.x, this.rightBottom.y - this.radius)
      context.arc(this.rightBottom.x - this.radius, this.rightBottom.y - this.radius, this.radius, 0, Math.PI * 1 / 2)
      context.lineTo(this.leftBottom.x + this.radius, this.leftBottom.y)
      context.arc(this.leftBottom.x + this.radius, this.leftBottom.y - this.radius, this.radius, Math.PI * 1 / 2, Math.PI)
      context.lineTo(this.waveLeft.x, this.waveLeft.y)
    },
    drawHead (context) {
      context.moveTo(180, 60)
      context.arc(190, 60, 10, Math.PI, Math.PI*1.5)
      context.lineTo(210, 50)
      context.arc(210, 60, 10, Math.PI*1.5, 0)
      context.stroke()
    },
    // 起点，控制点
    wave (context, { x, y, x1, y1}) {
      context.moveTo(x, y)
      // 起点x,y
      // 控制点x1, y1
      // 结束点x2, y
      let x2 = x + this.batteryWidth
      context.quadraticCurveTo(x1, y1, x2, y)
      context.stroke()
    },
    initCanvas () {
      const context = wx.createCanvasContext('battery')
      this.context = context
      context.setStrokeStyle('#919CA3')
      context.setLineWidth(1)
      // 画电池body顶部
      this.drawBodyTop(context)
      // 画电池头部
      this.drawHead(context)
      // 绘制波浪
      context.beginPath()
      // this.wave(context, {x: this.batteryOringin.x, y: this.waveY, x1: this.control.x, y1: this.control.y})
      this.wave(context, {x: this.batteryOringin.x, y: this.waveY, x1: this.control.x, y1: this.control.y})
      // 画电池body底部
      this.drawBodyBottom(context)
      context.stroke()
      // 填充颜色
      context.setFillStyle('#D8F8B9')
      context.fill()
      context.font = '12px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'bottom'
      context.fillStyle = '#FFFFFF'
      context.fillText(this.batteryValue + '%', this.batteryOringin.x + this.batteryWidth / 2, this.batteryOringin.y + this.batteryHeitgh / 2)
      context.draw()
    },
    changeControl () {
      if (this.direction === 'right') {
        if (this.control.x < this.batteryOringin.x + this.batteryWidth) {
          this.control.x = this.control.x + 1
        } else {
          this.direction = 'left'
        }
      } else if (this.direction === 'left') {
        if (this.control.x > this.batteryOringin.x) {
          this.control.x = this.control.x - 1
        } else {
          this.direction = 'right'
        }
      }
      const scale = (this.control.x - this.batteryOringin.x) / (this.batteryWidth)
      const angle = Math.PI * (scale * 2)
      this.control.y = this.waveY + Math.sin(angle) * this.waveHeight
    },
    clearWaveTimer () {
      if (this.waveTimer) clearInterval(this.waveTimer)
      this.waveTimer = null
    },
    run () {
      this.clearWaveTimer()
      this.waveTimer = setInterval(() => {
        if (this.data !== 100) {
          this.changeControl()
          this.initCanvas()
        }
      }, 200)
    }
  },
  watch: {
    data () {
      // 波浪y值
      const percent = this.data / 100
      this.batteryValue = (1 - percent).toFixed(4) * 100
      this.waveY = this.batteryOringin.y + this.batteryHeitgh *  percent
      this.initCanvas()
    }
  },
  mounted () {
    this.initCanvas()
    this.run()
  },
  destroyed () {
    this.clearWaveTimer()
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

