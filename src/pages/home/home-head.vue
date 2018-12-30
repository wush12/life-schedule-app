/*
 * @Author: wush12
 * @Date: 2018-12-30 13:39:41
 * @Last Modified by: wush12
 * @Last Modified time: 2018-12-30 14:27:19
 */
<template>
  <div>
    <div class="home-head-title">中国现阶段人均寿命
      <span class="home-head-title-num">{{ maxLife }}</span>个月
    </div>
    <div class="flex-wrap mt_10">
      <picker
        v-if="!birthday"
        mode="date"
        @change="chooseBirthday"
        :end="endDate"
        fields="month">
        <button
          class="home-head-button"
          size="mini"
          plain>点此设置出生年月，查看人生进度</button>
      </picker>
      <div :style="{textAlign: 'center'}" v-else>
        <p class="home-head-birth">{{ birthdayToNow }}</p>
        <picker
          class="home-head-birth-reset"
          mode="date"
          @change="chooseBirthday"
          :end="endDate"
          fields="month">
          <button
            class="home-head-button mini mr_10 mt_10"
            size="mini"
            plain>换一个日期</button>
        </picker>
        <button
          class="home-head-button mini mt_10"
          size="mini"
          @click="clearBirth"
          plain>清除记录</button>
      </div>
    </div>
  </div>
</template>

<script>
import dateFormat from '@/utils/date-format'

export default {
  name: 'home-head',
  data () {
    return {
      maxLife: 900,
      endDate: dateFormat(new Date(), 'YYYY-MM-DD'),
      birthday: ''
    }
  },
  computed: {
    birthdayToNow () {
      let res = ''
      if (this.birthday) {
        const birthdayArr = this.birthday.split('-')
        res = `${birthdayArr[0]}年${birthdayArr[1]}月至今${this.getBirthdayToNow()}个月`
      }
      return res
    }
  },
  methods: {
    chooseBirthday (event) {
      this.birthday = event.mp.detail.value
    },
    getBirthdayToNow () {
      let birthday = new Date(this.birthday)
      let now = new Date()
      let interval = 0
      let birthYear = birthday.getFullYear()
      let nowYear = now.getFullYear()
      if (nowYear - birthYear >= 1) {
        interval += (nowYear - birthYear - 1) * 12
        // 取月份前后差
        interval += 12 - birthday.getMonth()
        interval += now.getMonth()
      } else {
        interval = now.getMonth() - birthday.getMonth()
      }
      return interval
    },
    clearBirth () {
      this.birthday = ''
    }
  },
  watch: {
    birthday () {
      this.$emit('changeBirth', this.birthday)
    }
  }
}
</script>

<style lang="less" scoped>

.home-head-title {
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: #434D54;
}

.home-head-title-num {
  padding: 0 2px;
}

.flex-wrap {
  display: flex;
  flex-direction:row;
  justify-content:center;
}

.home-head-button {
  color: #6C7880;
  border-color: #919CA3;

  &.mini {
    padding: 0 8px;
    line-height: 2;
    font-size: 12px;
  }
}

.mt_10 {
  margin-top: 10px;
}

.mr_10 {
  margin-right: 10px;
}

.home-head-birth {
  font-size: 16px;
  letter-spacing: 3px;
  color: #434D54;
}

.home-head-birth-reset {
  display: inline-block;
  width: 100px;
}
</style>
