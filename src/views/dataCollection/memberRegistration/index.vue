<template>
  <div class="page">
    <div class="t-index">
      <img src="../../../image/decorationLeft.png">
      <div class="title">
        欢迎来到总会会员注册登记
      </div>
      <img src="../../../image/decorationRight.png">
    </div>
    <div class="t-bottom">Member registration</div>
    <div class="way">
      <div class="w-index">
        <div class="w-1">
          ·登记说明·
        </div>
        <div class="w-2">
          <div class="button">自主登记</div>
          <div class="button">代人登记</div>
        </div>

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
