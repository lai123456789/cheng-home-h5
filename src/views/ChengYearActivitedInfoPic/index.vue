<template>
  <div class="page">
    <div class="index">
      <div class="content">
        <div class="picture-content">
          <div class="p-c">
            <div class="pc1">
              <img :src="userIcon" alt="">
              <p>{{imageIntroduction}}</p>
            </div>
            <div class="pc2">
              <img :src="imageUrl" alt="">
              <p class="p-xin" v-if="likePoints > 0">
                <img src="../../image/xin1.png" alt="" :class="{'xin-active':show}">
<!--                <img src="../../image/xin.png" alt=""  v-if="!show">-->
                <span>{{likePoints}}</span>
              </p>
            </div>
            <div class="pc3">
              <div class="left">
                <p>{{userNickName}}</p>&nbsp;&nbsp;<p>照片编号：{{imageNo}}</p>
              </div>
              <p class="right">上传于{{createTime}}</p>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 100%;height: 0.1rem;background: #EEE"></div>
      <div class="tapInfo">
        <div class="infoBtn" @click="thumbsUp">
          为TA点赞
          <img src="../../image/dianzan.png" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { LookAllPicApiF,thumbsUpApiF,userInfoApiF } from '../../service/requestFun'
    import { jsConfigApi } from "../../service/apiUrl";
    import wechat from "../../common/js/wechat";
        import dateFormat from "../../utils/dateFormat";
    export default {
  name: 'ChengYearActivited',
  mixins: [beforeRouteLeave],
  data () {
      return {
          show:false,
              imageIntroduction :"",
              imageUrl:"",
              imageNo:"",
          userNickName:"",
          createTime:"",
          likePoints:"",
          userIcon:"",
          // openid:"oS9Glt9cCs06QwgwJWyIzmrDKmWs",
          openid:"",
      }
  },
  components: {  },
  methods: {
      initPicInfo() {
          let router = this.$route;
          let imageNo = router.query.imageNo; //接收参数值
          this.imageNo = imageNo
          let par = {
              pageSize:1,
              currentPage:1,
              imageNo:imageNo
          }
          let t = this
          LookAllPicApiF(par).then(res => {
                  let resData = res.data[0]
                  t.imageIntroduction = resData.imageIntroduction
                  t.imageUrl = resData.imageUrl
                  t.userNickName = resData.userNickName
                  t.createTime = resData.createTime
                  t.likePoints = resData.likePoints
                  t.userIcon = resData.userIcon
                      console.log(resData)
            this.userInfoApiFA()  //获取到具体信息之后 再调用用户信息接口拿到openid
            setTimeout(function () {
              t.shareFriend();
            },2000)
                  }).catch();
      },
      thumbsUp(){
          this.show = true
          let param = {
              openId : this.openid,
              imageNo : this.imageNo
          }
          let currentTime = dateFormat(new Date(), "yyyy/MM/dd hh:mm:ss");
        let endtimeGet = parseInt(Date.parse(new Date('2020/01/31 23:59:59')))  //结束时间毫秒数
        let currenttimeGet = parseInt(Date.parse(new Date(currentTime)))  //当前时间毫秒数
        if(currenttimeGet > endtimeGet){
          this.$toast("活动已结束,无法为TA点赞！")
        }else{
          thumbsUpApiF(param).then(res => {
              this.$toast("为TA点赞成功！");
              this.initPicInfo()
          }).catch();
        }
      },
      userInfoApiFA() {
          userInfoApiF().then((result) => {
              this.openid = result.openid
              // this.$toast(result.openid)
              console.log(result.openid,"获取result.openid")
          }).catch(() => {
          })
      },
    shareFriend () {
      let iners = [
        wechat.properties.interface.updateAppMessageShareData,
        wechat.properties.interface.updateTimelineShareData,
        wechat.properties.interface.previewImage
      ];
      let title = "我的照片\"年味足\"！大家快来为我加油！"
      let desc = "我正在参加“成氏团圆年”——晒春节年味照片，赢千元礼包大奖的活动，感谢您支持我~~";
      let icon = "https://mmbiz.qpic.cn/mmbiz_jpg/eicOzZeuFWpfwrtKFTAYNUJQDpu9xx1RwoTLBPRkInxI0MAXwPdI3xkM7I2kBd6RzI629Pk9oqfE5WicsTMjOTRw/0?wx_fmt=jpeg"
      let param = {
        title: title, // 分享标题
        link: location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: icon,
        desc: desc
      };
      wechat.config(iners, jsConfigApi(), function (r) {
        wx.ready(function () {
          wechat.updateTimelineShareData(param);
          wechat.updateAppMessageShareData(param);
        });
      });
    }

  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
        this.initPicInfo()
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
