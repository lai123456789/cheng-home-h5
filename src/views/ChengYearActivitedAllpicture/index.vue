<template>
  <div class='return-goods-ctner'>
      <div class="return-des-outer">
        <div class="topDiv">
          <img src="../../image/ssearch.png" alt="">
          <input type="number" placeholder="请输入照片编号查询" @input="chang" v-model="val">
        </div>
        <div class="photoList">
        </div>
      </div>
    <div class="waterfall-wrapper"  v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="30" >
      <ul class="left-waterfall" ref="left">
<!--        <li class="item" v-for="(item, index) in leftItems" v-bind:style=" {height:item.height+'px'}">{{ index }}</li>-->
        <template  v-for="(item, index) in leftItems">
          <li class="item" v-bind:style=" {height:item.height+'px'}"  @click="goOnePic(item)">
            <img :src="item.imageUrl" style="width: 100%;height: 100%"/>
            <div class="p-xin" @click.stop="thumbsUpLeft(item,index)">
              <img src="../../image/xin1.png" alt=""  :class="{ 'xin-active':index==currentLeft}">
              <p>{{item.likePoints}}</p>
            </div>
            <div class="bgtext">
              <span>编号{{item.imageNo}}</span>
              <img src='../../image/bbian.png' />
            </div>
          </li>
          <div class="text"  @click="goOnePic(item)">
            <p>{{item.imageIntroduction}}</p>
            <img src="../../image/de2.png" alt="">
          </div>
        </template>
      </ul>
      <ul class="right-waterfall" ref="right">
<!--        <li class="item" v-for="(item, index) in rightItems" v-bind:style=" {height:item.height+'px'}">{{ index }}</li>-->
        <template  v-for="(item, index) in rightItems">
          <li class="item" v-bind:style=" {height:item.height+'px'}"  @click="goOnePic(item)">
            <img :src="item.imageUrl" style="width: 100%;height: 100%"/>
            <div class="p-xin" @click.stop="thumbsUpRight(item,index)" >
              <img src="../../image/xin1.png" alt=""  :class="{ 'xin-active-right':index==currentRight}">
              <p>{{item.likePoints}}</p>
            </div>
            <div class="bgtext">
              <span>编号{{item.imageNo}}</span>
              <img src='../../image/bbian.png' />
            </div>
          </li>
          <div class="text"  @click="goOnePic(item)">
            <p>{{item.imageIntroduction}}</p>
            <img src="../../image/de2.png" alt="">
          </div>
        </template>
      </ul>
    </div>


    </div>
</template>

<script>
    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { LookAllPicApiF, thumbsUpApiF, userInfoApiF } from '../../service/requestFun'
        import dateFormat from "../../utils/dateFormat";

    export default {
        name: 'ChengYearActivitedAllpicture',
        mixins: [beforeRouteLeave],
        data () {
            return {
                val:"",
                remnant:0,
                imgList: [],
                fileSrc:"",
                imgWidth:"",
                imgHeight:"",
                dataList: [],
                leftItems: [],
                rightItems: [],
                hasMoreData: false,
                loading: false,
                openid:'',
                pageParams: {
                    pageSize: 20,
                    currentPage: 1,
                    imageNo:null
                },
              currentLeft:-1,
              currentRight:-1
            }
        },
        components: {  },
        methods: {
            updateWaterfall () {
                let _t = this
                const leftHeight = this.$refs.left.clientHeight
                const rightHeight = this.$refs.right.clientHeight
                let item = _t.dataList.shift();
                if (item == null) {
                    return
                }
                if (leftHeight <= rightHeight) {
                    this.leftItems.push(item)
                } else {
                    this.rightItems.push(item)
                }
                this.$nextTick(function () {
                    this.updateWaterfall()
                })
            },
            LookAllPicApiFA(){
              console.log(this.pageParams,"调用LookAllPicApiFA传的参数")
              let param = {
                 pageSize: this.pageParams.pageSize,
                    currentPage: this.pageParams.currentPage,
                    imageNo:this.pageParams.imageNo
              }
              LookAllPicApiF(param).then(result => {
                    let { totalPage, currentPage, data } = result
                    // this.dataList = []
                    this.dataList = this.dataList.concat(data)
                    this.hasMoreData = !(totalPage <= currentPage)
                     this.loading = false
                    if(this.dataList != ''){
                        this.updateWaterfall();
                    }else{
                        this.leftItems = []
                        this.rightItems = []
                        this.dataList = []
                    }
                    console.log("this.hasMoreData",this.hasMoreData)
                }).catch()
            },
            loadMore() {
                if (this.hasMoreData) {
                    this.loading = true
                    console.log("加载更多")
                    setTimeout(() => {
                        this.pageParams.currentPage += 1
                        this.LookAllPicApiFA()
                    }, 0);
                }else{
                    console.log("否")
                }
                console.log("刚刚刚刚刚刚刚")
            },
            goOnePic(e){
                this.$router.push({
                    path: `/ChengYearActivitedInfoPic`,
                    query: {
                        // openId: openId  //传参数  这里调用分页查看所有照片里面的  传照片编号
                        imageNo:e.imageNo
                    }
                })
            },
            chang(){
                let val = this.val
                if(val != '' || val != null){
                  this.pageParams.imageNo = val
                this.pageParams.currentPage = 1
                this.pageParams.pageSize = 20
                }
                this.LookAllPicApiFA()

            },
          thumbsUpLeft(item,index){
            this.currentLeft = index;
            let param = {
              openId : this.openid,
              imageNo : item.imageNo
            }
            let currentTime = dateFormat(new Date(), "yyyy/MM/dd hh:mm:ss");
        let endtimeGet = parseInt(Date.parse(new Date('2020/01/31 23:59:59')))  //结束时间毫秒数
        let currenttimeGet = parseInt(Date.parse(new Date(currentTime)))  //当前时间毫秒数
        if(currenttimeGet > endtimeGet){
          this.$toast("活动已结束,无法为TA点赞！")
        }else{
          let that = this
            thumbsUpApiF(param).then(res => {
              this.$toast("为TA点赞成功！")
              setTimeout(() => {
                that.leftItems = []
                that.rightItems = []
                that.dataList = []
                this.pageParams.pageSize = 20
                this.pageParams.currentPage = 1
                this.pageParams.imageNo = null
                this.LookAllPicApiFA()
              }, 1700);
            }).catch();
        }


          },
          thumbsUpRight(item,index){
            this.currentRight = index;
            let param = {
              openId : this.openid,
              imageNo : item.imageNo
            }
            let currentTime = dateFormat(new Date(), "yyyy/MM/dd hh:mm:ss");
        let endtimeGet = parseInt(Date.parse(new Date('2020/01/31 23:59:59')))  //结束时间毫秒数
        let currenttimeGet = parseInt(Date.parse(new Date(currentTime)))  //当前时间毫秒数
        if(currenttimeGet > endtimeGet){
          this.$toast("活动已结束,无法为TA点赞！")
        }else{
          let that = this
            thumbsUpApiF(param).then(res => {
              this.$toast("为TA点赞成功！")
              setTimeout(() => {
                that.leftItems = []
                that.rightItems = []
                that.dataList = []
                this.pageParams.pageSize = 20
                this.pageParams.currentPage = 1
                this.pageParams.imageNo = null
                this.LookAllPicApiFA()
              }, 1700);
            }).catch();
        }
          },
          userInfoApiFA() {
            userInfoApiF().then((result) => {
              this.openid = result.openid
              console.log(result.openid,"获取result.openid")
            }).catch(() => {
            })
          }
        },
        watch: { },
        mounted () {
            this.LookAllPicApiFA();
             setTimeout(() => {
                this.userInfoApiFA()
              },500);

        }
    }
</script>

<style lang="scss" scoped>
  @import './index';


</style>
