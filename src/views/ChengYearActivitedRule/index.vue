<template>
  <div class="page">
    <div class="t-index">
      <div class="title">
        ·活动规则及流程·
      </div>
    </div>
    <div class="way">
      <div class="w-index">
        <div class="wTitle">【参与方式】</div>
        <p class="w1">
          1.于大年三十至年初七用手机/相机拍摄任意一张有关春节主题的照片,拍摄角度不限,清晰即可。
        </p>
        <p class="w2">
          2.打开“成氏之家”公众号,点击公众号菜单栏“走进成氏”,进入“成氏团圆年”活动专题栏目。
        </p>
        <p class="w3">
          3.上传您所拍摄的春节主题图片(我们将人工筛选优质图片呈现,如您上传的图片在页面有展示则表示照片合格,获得参选资格,劣质模糊/违规图片将下架处理)。
        </p>
        <p class="w4">
          4.图片上传成功后,即可直接领取由我们为您发放的祝福红包。您可以在活动页面预览到各地家人正在参选的照片,在活动结束之前您可以给您喜欢的任意照片或是自己参选的照片进行点赞,每人每天有3次点赞机会,可以拉上身边亲朋好友一起参与活动。
        </p>
        <p class="w5">
          5.活动结束后7个工作日内,后台将统计点赞数排名在前10名的照片,再公布中奖结果,最后赠送出由成氏商城及供应商所赞助的新年大礼包。
        </p>
      </div>
    </div>
    <div class="attention">
      <div class="atten">
        <div class="tTitle">【注意事项】</div>
        <p class="t1">
          1.每人每个微信ID号仅限领取1次春节祝福红包,且照片仅可上传1张,请务必认真挑选好大家认为拍得最满意的照片上传参加活动。
        </p>
        <p class="t2">
          2.照片作品反映具有年味代表性的精彩瞬间,均可参选,但必须是清晰不模糊。(如：年夜饭、全家福、写/贴春联、放鞭炮、祭祖等等与年味相关的风景、人物、生活场景均可。）
        </p>
        <p class="t3">
          3.手机、相机拍摄均可,彩色黑白不限,参选的照片须有28字以内的简短说明。
        </p>
      </div>

    </div>
  </div>

</template>

<script>
    import { beforeRouteLeave } from '@/common/js/mixin.js'
    export default {
  name: 'ChengYearActivited',
  mixins: [beforeRouteLeave],
  data () {
      return {
          pictureList: [
              {
                  text:"照片标题示例(成家尧祝愿所有成氏商城家人 新年快乐） （限定两行28字）",
                  name:"成家尧",
                  num:"1002",
                  date:"2020/01/06"
              },
          ],

      }
  },
  components: {  },
  methods: {

  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
