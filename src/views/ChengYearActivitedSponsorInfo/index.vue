<template>
  <div class="page">
    <div class="t-index">
      <div class="title">
        ·特别感谢以下单位及个人对本次活动的赞助·
      </div>
    </div>
    <div class="attention">
      <div class="atten" v-for="(item,index) in sponsorList" :class="{'bg':index%2 != 0}">
        <div class="tTitle">{{item.sponsorName}}</div>
        <p class="t1">
          赞助{{item.sponsorItem}}
        </p>
      </div>

    </div>
    <div class="Img">
      <img src="../../image/sponsorInfo.png" alt="" class="img1">
      <img src="../../image/sponInfo.png" alt="" class="img2">
    </div>
  </div>

</template>

<script>
    import { beforeRouteLeave } from '@/common/js/mixin.js'
    import { getSporListApiF } from "../../service/requestFun";

    export default {
  name: 'ChengYearActivited',
  mixins: [beforeRouteLeave],
  data () {
      return {
          sponsorList: [],

      }
  },
  components: {  },
  methods: {
      getSporList(){
          let num = 1000; //默认传最大值
          let t = this;
          getSporListApiF(num).then(result => {
              t.sponsorList = result;
          }).catch();
      }
  },
  watch: { },
  beforeRouteLeave(to, from, next) {
    history.pushState(null, null, location.search.replace(/code/g, 'XX'))
    next()
  },
  mounted () {
      this.getSporList();
  }
}
</script>

<style lang="scss" scoped>
@import './index';
</style>
