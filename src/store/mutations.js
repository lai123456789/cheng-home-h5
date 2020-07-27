/** state
 * 可以把 state 想象成 组件中的 data ,专门用来存储数据的
* 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
* */
export const state = {
  isLoading: false,
  isSubscribe: true
}

/** mutations  (同步方法)
 * 如果要操作 store 中的 state 值，只能通过调用 mutations 提供的方法，才能操作对应的数据
 * 类似于实例/组件中的methods事件
 * 只能使用 this.$store.commit('方法名')调用 mutations 中的方法，最多支持两个参数，其中，
 * 参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
 * **/
export const mutations = {
  showLoading: (state, show) => {
    state.isLoading = show
  },
  showScan: (state, show) => {
    state.isSubscribe = show
  }
}

/** actions  （异步方法）
 * actions像一个装饰器，只是提交mutation，而不是直接变更状态。（actions可以包含任何异步操作，
 * mutations是同步操作，两者的目的都是为了更新state全局状态值）
 * */
export const actions = {
  showLoading: ({ commit }, show) => { commit('showLoading', show) },
  showScan: ({ commit }, show) => { commit('showScan', show) }
}

/***
 * getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，
 * getter返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。
 * 使用 getters 通过 this.$store.getters.***
 *注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，
 * 请 去找 mutations
 * **/
export const getters = {
  isLoading: () => state.isLoading,
  isSubscribe: () => state.isSubscribe
}
