<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <show-scan></show-scan>
    <pub-loading></pub-loading>
    <transition name='fade' mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>


<script>
import PubLoading from "./components/Loading"
import { userIsloginApiF, loginApiF } from '@/service/requestFun'
import puGetSearch from '@/utils/puGetSearch'
import { setToken } from '@/common/js/ut'
export default {
  name: 'app',
  components: {
    PubLoading
  },
  methods: {
    userIsloginApiFA(fun) {
        let _param = puGetSearch()  //页面url参数
        console.log(_param,"_param")
        if(_param.imageNo){  //分享链接是照片点赞页面 存在imageNo 不用弹框关注
            console.log("_param.imageNo",_param.imageNo)
            userIsloginApiF({}, fun).then((result) => {
      }).catch();
        }else{    //分享链接不存在imageNo 则强制弹框关注
          userIsloginApiF({}, fun).then((result) => {
        let { subscribe } = result
        this.$store.dispatch('showScan', subscribe)  //强制用户关注弹框图片  后面要打开
      }).catch();
        }

    }
  },
  mounted() {
    let _search = puGetSearch()
    if (_search.code) {
        loginApiF({
        code: _search.code,
        state: 1
      }).then((result) => {
        console.log("已经登录关注过")
        let { subscribe, token } = result
        setToken(token)
        this.$store.dispatch('showScan', subscribe)
      }).catch((err) => {
      });
    } else {
      this.userIsloginApiFA(this.userIsloginApiFA.bind(this))
    }

  }
}
</script>

<style  lang="scss">
@import './common/css/reset';
@import './common/css/animation';
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
