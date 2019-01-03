<template>
     <div id="schedule-content">
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
                 <li class='no-border-bottom'>农历 <span class="icon-ellipsiod" ><i class="icon-circle" v-show="!choosed" @click="changeChooseStatus"></i><i class="icon-circle open" v-show="choosed" @click="changeChooseStatus"></i></span></li>
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
<style>
    .body{
        background: #eee;
        font-size:16px;
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
    .icon-ellipsiod{
      position:relative;
      left:65%;
      top:4px;
      display: inline-block;
      width:60px;
      height:32px;
      border:1px solid #ddd;
      border-radius:16px;
    }
    .icon-circle{
      position: absolute;
      display: inline-block;
      width:30px;
      height:30px;
      border-radius:50%;
      border:1px solid #ddd;
    }
    .open{
      position: absolute;
      background: #2bc211;
      right:0;
      top:0;
    }
</style>
