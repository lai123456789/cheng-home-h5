<template>
  <div class="page">
    <div class="index">
      <div class="content">
          <div class="bg-cont">
            <div class="y1">·会员说明·</div>
            <div class="y2">
              <p>成氏商城，成家人自己的网上商城！为感谢各位宗亲家人及合作厂商一年多来对成氏商城的大力支持，打造宗亲资源整合、信息共享和宣传成氏文化的网络窗口，共享商业及文化资源，推广家族优质产品，助长家族企业发展，让每一位家人都能享受到平台带来的福利。</p>
              <p>成氏商城特发起本次“成氏团圆年”活动，目的在于以成氏商城平台为依托，把全国百万的成氏族人凝聚起来，增进宗亲文化学习交流，促进宗亲事业深化发展。
                因此，在这家族团圆的春节大年里，我们希望将成氏族人春节期间的酸甜苦辣、阖家团圆的温暖时刻、各地族人家乡过年的年味习俗...记录起来，用照片讲述成氏族人的春节故事，与全国成氏族人分享每一个幸福瞬间。</p>
            </div>
          </div>
        <div class="bg-cont-prize">
          <div>【是否参加过宗亲会】</div>
          <div>
            1.任何参与此次活动的家人都可获得一个最高达2020元的成氏祝福随机大红包。<br/>
            2.参与活动上传照片点赞数前10名, 可获得相应价值成氏新年祝福大礼包。(所有商品商城均在售) <br/>
            特等奖（1名）价值8888元超值商品大礼包 <br/>
            一等奖（1名）价值3888元超值商品大礼包 <br/>
            二等奖（1名）价值2888元超值商品大礼包 <br/>
            三等奖（7名）价值1088元超值商品大礼包 <br/>
          </div>
          <div>
            <div class="infoBtn" @click="goIntroduce">
              点击查看详情
            </div>
          </div>
        </div>
        <div class="sponsor-index">
          <div class="color-div">
            【籍贯地址】
          </div>
          <div class="sponsor-list">
            <div class="nwwest-roll" id="nwwest-roll">
              <ul class="roll-ul"  v-for="(item,index) in sponsorList">
                <li ref="rollul" :class="{anim:animate==true}">
                  <p class="name">
<!--                    <img src="../../../image/y-left.png" alt="" v-if="index % 2 == 1">-->
                    <span>{{item.sponsorName}}</span>
<!--                    <img src="../../../image/y-right.png" alt="" v-if="index % 2 == 1">-->
                  </p>
                  <p class="site">{{item.sponsorItem}}</p>
                </li>
              </ul>
            </div>

          </div>
          <div class="tapInfo">
            <div class="infoBtn" @click="goSponsorInfo">
              点击查看详情
            </div>
          </div>
        </div>

        <div class="bg-cont-rule">
          <div>活动规则及流程</div>
          <div class="p1">
            <p class="v1">1.关注成氏之家</p>
            <p class="v2"><img src="../../../image/riht.png" alt=""></p>
            <p class="v1">2.成氏团圆年</p>
            <p class="v2"><img src="../../../image/riht.png" alt=""></p>
            <p class="v1">3.点击我要参与</p>
          </div>
          <div class="p1">
            <p class="v2"><img src="../../../image/riht.png" alt=""></p>
            <p class="v1">4.点击上传拍好的照片</p>
            <p class="v2"><img src="../../../image/riht.png" alt=""></p>
            <p class="v1">5.领取祝福红包</p>
            <p class="v2"><img src="../../../image/riht.png" alt=""></p>
          </div>
          <div class="p1">
            <p class="v1">6.为喜欢的照片点赞</p>
            <p class="v2"><img src="../../../image/riht.png" alt=""></p>
            <p class="v1">7.参看中奖名单</p>
          </div>
          <div class="tapInfo1">
            <div class="infoBtn" @click="goRule">
              查看更详细的规则
            </div>
          </div>
        </div>
        <div class="picture-content" v-for="(item, index) in pictureList" :key="index">
          <div class="p-c" @click="goInfoPic(item.imageNo)">
            <div class="pc1">
              <p><img :src="item.userIcon" alt=""></p>
              <p>{{item.imageIntroduction}}</p>
            </div>
            <div class="pc2">
              <img :src="item.imageUrl" alt="">
            </div>
            <div class="p-xin">
              <img src="../../../image/xin1.png" alt="" class="xin">
              <p>{{item.likePoints}}</p>
            </div>
            <div class="pc3">
              <div class="left">
                <p>{{item.userNickName}}</p>&nbsp;&nbsp;<p>照片编号：{{item.imageNo}}</p>
              </div>
              <p class="right">上传于{{item.createTime}}</p>
            </div>
          </div>
        </div>
        <div class="picture-content" v-if="showMy">  <!-- 自己照片 -->
          <div class="p-c" @click="goMyPic(mypictureList.imageNo)">
            <div class="pc1">
              <p><img :src="mypictureList.userIcon" alt=""></p>
              <p>{{mypictureList.imageIntroduction}}</p>
            </div>
            <div class="pc2">
              <img :src="mypictureList.imageUrl" alt="">
            </div>
            <div class="p-xin">
              <img src="../../../image/xin1.png" alt="" class="xin">
              <p>{{mypictureList.likePoints}}</p>
            </div>
            <div class="pc3">
              <div class="left">
                <p>{{mypictureList.userNickName}}</p>&nbsp;&nbsp;<p>照片编号：{{mypictureList.imageNo}}</p>
              </div>
              <p class="right">上传于{{mypictureList.createTime}}</p>
            </div>
          </div>
        </div>
        <div class="all-bottom">
          <div class="bottomBtn" v-if="!btnShow">   <!--v-if="!btnShow"-->
            <div class="btn" @click="goUpload">我也要上传照片领祝福红包</div>
          </div>
          <div class="bottomBtn" @click="goAllpicture" v-if="btnShow">  <!--v-if="btnShow"-->
            <div class="btn">我要点赞查看所有照片</div>
          </div>
        </div>
      </div>
      <div class="y-bottom">
        <img src="../../../image/y-bottom.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import dateFormat from "../../../utils/dateFormat";
    export default {
  name: 'ChengYearActivited',
  mixins: [beforeRouteLeave],
  data () {
      return {
        showMy:false,
        animate:true,
          videoUrl:"",
          show: true,
          pictureList: [],
          sponsorList:[],
          btnShow:true,
          openid:'',
          mypictureList:{
            imageNo:'',
            userIcon:'',
            imageIntroduction:'',
            imageUrl:'',
            likePoints:'',
            userNickName:'',
            createTime:''
          }
      }
  },
  components: {  },
  methods: {
      getSporList(){
          let num = 1000; //默认传最大值
          let t = this;
          getSporListApiF(num).then(result => {
              t.sponsorList = result;
            this.userInfoApiFA()  //获取到数据之后 再去调用用户信息 拿到openid
          }).catch();
      },
      getrecommends(){
          let num = 5; //默认传最大值
          let t = this;
          getrecommendsApiF(num).then(result => {
            t.pictureList = result
            setTimeout(function () {
              t.shareFriend();
            },2000)
          }).catch();
      },
      goUpload(){
          let currentTime = dateFormat(new Date(), "yyyy/MM/dd hh:mm:ss");
        // "2020/01/31 23:59:59"  //时间不能写24:00:00  ios无法计算！！！
        // let startimeGet = new Date(startime).getTime();  //"开始时间毫秒数"
        // let endtimeGet = new Date(endtime).getTime();  //结束时间毫秒数
        let startimeGet = parseInt(Date.parse(new Date('2020/01/22 00:00:00')))
        let endtimeGet = parseInt(Date.parse(new Date('2020/01/31 23:59:59')))
        let currenttimeGet = parseInt(Date.parse(new Date(currentTime)))  //当前时间毫秒数
        console.log("startimeGet",startimeGet)
        console.log("endtimeGet",endtimeGet)
        console.log("currenttimeGet",currenttimeGet)
        console.log("currentTime",currentTime)
        if (currenttimeGet > startimeGet && currenttimeGet < endtimeGet) {
          this.$router.push({
              name: 'ChengYearActivitedUploadPic'
          })
        }else if(currenttimeGet > endtimeGet){
          this.$toast("活动已结束！")
        } else{
          this.$toast("上传照片时间是年二十八至正月初七，敬请期待！")
        }
      },
      goAllpicture(){
          this.$router.push({
              name: 'ChengYearActivitedAllpicture'
          })
      },
      goSponsorInfo(){ //跳转查看所有赞助商列表 页面
          this.$router.push({
              name: 'ChengYearActivitedSponsorInfo'
          })
      },
      goIntroduce(){ //活动奖品介绍
          this.$router.push({
              name: 'ChengYearActivitedIntroduce'
          })
      },
      goRule(){ //活动规则流程
          this.$router.push({
              name: 'ChengYearActivitedRule'
          })
      },
      Ifbtn(){
          let openId = this.openid; //默认openid
          let t = this
          IfbtnApiF(openId).then(result => {
              if(result == null || result.length == 0 || result == ''){
                t.btnShow = false
                t.showMy = false
              }else{
                t.showMy = true  //如果上传照片了  展示自己的
                t.mypictureList.imageNo = result.imageNo
                t.mypictureList.userIcon = result.userIcon
                t.mypictureList.imageIntroduction = result.imageIntroduction
                t.mypictureList.imageUrl = result.imageUrl
                t.mypictureList.likePoints = result.likePoints
                t.mypictureList.userNickName = result.userNickName
                t.mypictureList.createTime = result.createTime
                t.btnShow = true
              }
          }).catch();
      },
      userInfoApiFA() {
          userInfoApiF().then((result) => {
              this.openid = result.openid
            // this.$toast(result.openid)
            console.log(result.openid,"获取result.openid")
            this.Ifbtn();  //拿到openid之后再去判断底部按钮显示跟我本人照片
          }).catch(() => {
          })
      },
    scroll(){  //无限滚动显示文字
      let con1 = this.$refs.rollul;
      // con1[0].setAttribute("class", "marginTop");
      // con1[0].style.margintop='0.3rem';
      this.animate = !this.animate;
      let that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function(){
        that.sponsorList.push(that.sponsorList[0]);
        that.sponsorList.shift();
        // con1[0].style.margintop='0rem';
        // con1[0].setAttribute("class", "marginop");
        that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      },0)
    },
    shareFriend () {
      let iners = [
        wechat.properties.interface.updateAppMessageShareData,
        wechat.properties.interface.updateTimelineShareData,
        wechat.properties.interface.previewImage
      ];
      let desc = "“成氏团圆年”春节照片有奖征集活动开始啦！";
      let icon = "https://mmbiz.qpic.cn/mmbiz_jpg/eicOzZeuFWpfwrtKFTAYNUJQDpu9xx1RwoTLBPRkInxI0MAXwPdI3xkM7I2kBd6RzI629Pk9oqfE5WicsTMjOTRw/0?wx_fmt=jpeg"
      let title = "晒春节年味照片，赢千元礼包大奖"
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
    },
    goInfoPic(imageNo){
        this.$router.push({
          path: `/ChengYearActivitedInfoPic`,
          query: {
            imageNo:imageNo
          }
        })
    },
    goMyPic(imageNo){
      this.$router.push({
        path: `/ChengYearActivitedInfoPic`,
        query: {
          imageNo:imageNo
        }
      })
    }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  created(){
    setInterval(() => {
          this.scroll()
        },2000)
      },
  mounted () {
      this.getSporList();
      this.getrecommends();
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
