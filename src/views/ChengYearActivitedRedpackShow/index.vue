<template>
  <div class="all">
    <div class="page">
      <div class="text">¥{{denomination}}</div>
      <div class="t2">恭喜您抽中红包{{denomination}}元，请前往成氏之家公众号领取！</div>
    </div>
    <div class="bb">
      <div class="btn" @click="goIndex">
        返回首页
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
          denomination:"" //红包金额  默认单位是分
      }
  },
  components: {  },
  methods: {
      initPicInfo() {
          let router = this.$route;
          let denomination = router.query.denomination | 0; //接收参数值
          denomination = denomination/100
          this.denomination = denomination
      },
      goIndex(){
          this.$router.push({
              path: `/ChengYearActivited`
          })
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
