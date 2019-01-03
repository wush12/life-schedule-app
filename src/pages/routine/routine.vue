<template>
     <div class="schedule-content">
         <div>
             <ul class="form-content">
                 <li><input class="input" placeholder="点这里输入事件名称"/></li>
                 <li>点击右边年月日选一个日期  
                   <div class="choose-date">
                     <picker	v-if="!birthday"
                    mode="date"
                    @change="chooseDate"
                    :end="endDate"
                    fields="month">
                    <span
                      class=""
                      size="mini"
                      plain>{{pickDate}}</span>
                  </picker></div></li>
                 <li class='no-border-bottom'><span :style="{display: 'block',float: 'left'}">农历</span>
                     <view class="body-view fr" :style="{marginRight:'20px'}">
                        <switch checked bindchange=""/>
                    </view>
                     </li>
             </ul>
             <p>勾选“农历”后，选中日期将以农历形式 显示</p>
             <span class="button bg-green font-white" @click="submitEvent">确定</span>
             <span class="button bg-white">取消</span>
         </div>
         
    </div>
</template>
<script>
//import dateFormat from '@/utils/date-format'
export default {
  data (){
    return	{
      pickDate:'年/月/日',
      choosed:false
    }
  },
  methods:{
    chooseDate (e){
      this.pickDate=e.mp.detail.value
    },
    changeChooseStatus (){
      console.log(this.choosed)
      this.choosed =!this.choosed
    },
    submitEvent (){
      console.log('跳转到日子')
      wx.navigateTo({
        url: '../../pages/day/main'
      })
    }
  }
}
</script>
<style scoped>
    .schedule-content{
        background: #eee;
        font-size:16px;
        height:200vw;
    }
    .form-content{
        width:100%; 
        border-top:1px solid #ccc;
        border-bottom:1px solid #ccc;
        padding-left:10px;
    }
    .form-content li{
        height:40px;
        line-height:40px;
        border-bottom:1px solid #ccc;
    }
    .input{
        width:100%;
       
        height:100%;
        line-height:1;
       

    }
    .choose-date{
        float:right;
        margin-right:20px;
        color:#ccc;
    }
    .button{
        text-align:center;
        display:block;
        width:90%;
        margin:10px auto;
        height:40px;
        line-height:40px;
        border:1px solid #ccc;
        border-radius:10px;
    }
    .bg-green{
        background: #2bc211;
    }
    .bg-white{
        background: #fff;
    }
    .font-white{
        color:#fff;
    }
    p{
        font-size:14px;
        margin-top:10px;
    }
    .no-border-bottom{
        border-bottom:none !important;
    }
    .fr{
        float:right;
    }
</style>
