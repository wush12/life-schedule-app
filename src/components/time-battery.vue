/*
 * @Author: wush12
 * @Date: 2018-12-30 13:36:16
 * @Last Modified by: wush12
 * @Last Modified time: 2018-12-30 14:38:19
 */
<template>
  <div class="battery-wrap">
    <div class="battery-contain">电池容量：{{ date }}</div>
  </div>
</template>

<script>
export default {
  name: 'time-battery',
  props: {
    date: String
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

.battery-contain {

}
</style>

