<template>
  <div class="show-png-ctr">
    <img src="http://m.chengmall.cn/meetting_process.jpg" alt="">
  </div>
</template>

<script>
import dateFormat from '../../utils/dateFormat'
import puGetSearch from '../../utils/puGetSearch'
// @ is an alias to /src
export default {
  name: 'ShowImage',
  data () {
    return {
    }
  },
  components: {
  },
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
@import './index'
</style>
