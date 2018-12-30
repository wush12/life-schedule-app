<template>
  <div>
    <p class="time-title">{{ now }}</p>
  </div>
</template>

<script>
import dateFormat from '@/utils/date-format'

export default {
  name: 'time',
  data () {
    return {
      now: dateFormat(new Date(), 'YYYY年MM月DD日')
    }
  }
}
</script>

<style lang="less" scoped>
.time-title {
  text-align: center;
  letter-spacing: 4px;
}
</style>
