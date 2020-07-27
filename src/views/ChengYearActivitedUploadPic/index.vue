<template>
  <div class='return-goods-ctner'>
    <div class="return-action-outer">
      <div class="return-des-outer">
        <textarea class='icx-input'
                   placeholder="添加您的祝福语(限定28字)"  maxlength="28" @input="descInput" v-model="desc"
        />
        <span class="xianzhi">{{remnant}}/28</span>
        <div class="multipleImg">  <!-- 上传图片start -->
          <div class='upload' v-if="fileSrc">
            <!--显示缩略图-->
            <img :src="fileSrc"/>
            <!--删除-->
            <img src="../../image/del.png" class="deleteImg" @click="delImg"/>
          </div>
          <!--上传图片-->
          <div class='uploadDiv' >
            <input type="file" name="myfile" @change="(e)=>{onFileChange(e,index)}" />
            <span>
               <img src='../../image/photo.png' class="addImg" />
                <div>添加照片</div>
            </span>
          </div>
        </div>    <!-- 上传图片end -->

      </div>
      <div class="submit">
        <div class="submit-btn" @click="submitPic">确定上传领取红包</div>
      </div>
      <div class="text">
        <img src="../../image/messign.png"/>
        特别提示:每个微信号只允许上传一张照片,请谨慎
        选择清晰照片再上传
      </div>
      <div class="bottom">
        <div class="img">
          <img src="../../image/uploadInfo.png" alt="">
        </div>
      </div>
    </div>

    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade" >
      <div class="content">
        <img src="../../image/logo.png" alt="">
        <div class="kai" :class="{'active':animateCss}">
          <img src="../../image/kai.png" alt="" @click="kai">
        </div>
        <div class="text">
          <p>·成氏团圆年·</p>
          <p>豕辞太平岁，鼠牵富裕年</p>
        </div>
      </div>
<!--      <div class="close">-->
<!--        <img src="../../image/guanbi.png" alt="">-->
<!--      </div>-->
    </mt-popup>
    <div class="modal" v-if="popupVisible"></div>
  </div>

</template>

<script>
    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { submitPicApiF,userInfoApiF,getRedPacketApiF } from '../../service/requestFun'
    import { Popup } from 'mint-ui'; //引入弹框Popup组件
    export default {
        name: 'ChengYearActivited',
        mixins: [beforeRouteLeave],
        data () {
            return {
                animateCss:false,
                remnant:0,
                imgList: [],
                fileSrc:"",
                imgWidth:"",
                imgHeight:"",
                desc:"",
                file:"",
                // openid:"oS9Glty-4nUEKf0miX9yvqH9rXj0",
                openid:"",
                popupVisible:false
            }
        },
        components: {  },
        methods: {
            descInput(){
                let txtVal = this.desc.length;
                this.remnant = txtVal;
            },
            onFileChange(e) {
                let files = e.target.files[0];
                let _oFReader = new FileReader()
                _oFReader.readAsDataURL(files)
                _oFReader.onload = ev => {
                    this.file =  files,
                    this.fileSrc =  ev.target.result
                }
                let imgSrc = URL.createObjectURL(e.target.files[0]); //获取图片宽高
                let img = new Image();
                img.src = imgSrc;
                let _this = this
                img.onload = function () {
                    _this.imgWidth = img.width
                    _this.imgHeight = img.height
                };
            },
            delImg(){
                this.fileSrc = ''
            },
            submitPic(){
                if(this.desc.length <= 0){
                    this.$toast("请先输入祝福语！");
                    return
                }
                if(this.fileSrc == ''){
                    this.$toast("请先添加照片！");
                    return
                }
                let formData = new FormData();
                formData.append("openId",this.openid);
                formData.append("imageIntroduction",this.desc);
                formData.append("imageLength",this.imgWidth);
                formData.append("imageWidth",this.imgHeight);
                formData.append("imageUrlFile",this.file);
                submitPicApiF(formData).then(result => {
                    this.$toast('上传成功，赠送您一个红包，赶快领取吧')
                    setTimeout(() => {
                        this.popupVisible = true;//红包弹框
                    },2000)
                }).catch();

            },
            kai(){
                this.animateCss = true //开的动画效果
              // setTimeout(() => {  //这里后面要删掉  先这样静态看
              //   this.$router.push({
              //     path: `/ChengYearActivitedRedpackShow`
              //   })
              // },2000)
                this.getRedPacket()
            },
            getRedPacket(){   //点击开调用领取红包接口
                let param = {
                    openId : this.openid
                }
                getRedPacketApiF(param).then((res) => {
                    let denomination = res.denomination
                    setTimeout(() => {
                        this.$router.push({
                            path: `/ChengYearActivitedRedpackShow`,
                            query: {
                                denomination:denomination
                            }
                        })
                    },2000)
                }).catch(() =>{
                    this.$toast('红包领取失败！')
                    setTimeout(() => {
                        this.$router.push({
                            path: `/ChengYearActivited`
                        })
                    },1000)
                })
            },
            userInfoApiFA() {
                userInfoApiF().then((result) => {
                    this.openid = result.openid
                  // this.$toast(result.openid)
                    console.log(result.openid,"获取result.openid")
                }).catch(() => {
                })
            }

        },
        watch: { },
        beforeRouteLeave(to, from, next) {
            history.pushState(null, null, location.search.replace(/code/g, 'XX'))
            next()
        },
        mounted () {
            this.userInfoApiFA()
        }
    }
</script>

<style lang="scss" scoped>
  @import './index';
</style>
