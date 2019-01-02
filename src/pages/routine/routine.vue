<template>
     <div id="schedule-content">
         <div>
             <ul class="form-content">
                 <li><input class="input-eventname" placeholder="点这里输入事件名称"/></li>
                 <li>点击右边年月日选一个日期  <span class="choose-date" @click="showDatePick">年/月/日</span></li>
                 <li>农历</li>
             </ul>
             <p>勾选“农历”后，选中日期将以农历形式 显示</p>
             <span class="button bg-green">确定</span>
             <span class="button bg-white">取消</span>
         </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style>
    .form-content{
        width:100%; 
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
        padding-left:10px;
    }
    .form-content li{
        height:80px;
        line-height:80px;
        border-bottom:1px solid #eee;
    }
    .input{
        width:100%;
        margin-left:20px;
        height:80px;
        line-height:80px;
        border-bottom:1px solid #eee;

    }
    .choose-date{
        float:right;
        margin-right:20px;
        color:#eee;
    }
    .button{
        text-align:center;
        display:inline-block;
        width:80%;
        margin:10px auto;
        height:80px;
        line-height:80px;
    }
    .bg-green{
        background: #2bc211;
    }
    .bg-white{
        background: #fff;
    }

</style>
