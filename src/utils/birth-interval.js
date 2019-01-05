/*
 * @Author: wush12
 * @Date: 2019-01-05 18:54:06
 * @Last Modified by: wush12
 * @Last Modified time: 2019-01-05 18:54:43
 */
export default function (birthday) {
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
}
