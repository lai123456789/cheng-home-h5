import { Domain } from '../config/index'
// 判断用户是否登陆和关注
const userIsloginApi = () => `${Domain}/api/user/islogin`

// 获取首页新闻列表
const newsPageApi = () => `${Domain}/api/news/page`

// 获取首页活动列表
const activityPageApi = () => `${Domain}/api/activity/page`

// 登录
const loginApi = () => `${Domain}/api/user/login`

// 获取jsapi配置
const jsConfigApi = () => `${Domain}/wx/js/config`

// 活动支付
const activityPayApi = () => `${Domain}/api/activity/pay`

// 活动报名
const activityApplyApi = () => `${Domain}/api/activity/apply`

// 重新报名
const activityReapplyApi = () => `${Domain}/api/activity/reapply`

// 获取代表团
const listParentApi = () => `${Domain}/common/dictionary/list/parent`

// 捐款
const sponsorDonationApi = () => `${Domain}/api/sponsor/donation`

// 捐款记录
const sponsorListApi = () => `${Domain}/api/sponsor/list`

// 获取活动的审核状态
const activityStatusApi = () => `${Domain}/api/activity/status`

// 发送验证码
const codeSendApi = () => `${Domain}/common/code/send`

// 绑定手机号
const userBindApi = () => `${Domain}/api/user/bind`

// 获取用户信息
const userInfoApi = () => `${Domain}/api/user/info`

// 编辑用户信息
const userUpdateApi = () => `${Domain}/api/user/update`

// 上传实时播报内容
const broadcastUpdateApi = () => `${Domain}/api/activity/broadcast/update`

// 获取实时播报内容
const broadcastListApi = () => `${Domain}/api/activity/broadcast/list`

// 查看行程信息
const tripInfoApi = () => `${Domain}/api/activity/trip/info`

// 活动行程添加
const tripCreateApi = () => `${Domain}/api/activity/trip/create`

// 更新行程信息
const tripUpdateApi = () => `${Domain}/api/activity/trip/update`

// 资助申请【列表】
const crowdfundingPageApi = () => `${Domain}/api/crowdfunding/page`

// 资助申请【详情】
const crowdfundingInfoApi = () => `${Domain}/api/crowdfunding/info`

// 资助记录【列表】
const crowdfundingRecordPageApi = () => `${Domain}/api/crowdfunding/record/page`

// 我发起的资助申请【列表】
const crowdfundingPageLaunchedApi = () => `${Domain}/api/crowdfunding/page/launched`

// 我参与的资助申请【列表】
const crowdfundingPagePartApi = () => `${Domain}/api/crowdfunding/page/part`

// 资助申请【创建】
const crowdfundingCreateApi = () => `${Domain}/api/crowdfunding/create`

// 资助申请【更新】
const crowdfundingUpdateApi = () => `${Domain}/api/crowdfunding/update`

// 资助记录【支付】
const crowdfundingRecordCreateApi = () => `${Domain}/api/crowdfunding/record/create`

// 资助记录【获取捐赠证书】
const crowdfundingRecordCertApi = () => `${Domain}/api/crowdfunding/record/cert`

// 我的筹款  已筹款金额 title等
const cashInfoApi = () => `${Domain}/api/crowdfunding/info/money`

// 我的筹款  申请提现
const withdrawApi = () => `${Domain}/api/crowdfunding/withdraw`

// 我的资助提现  申请提现 列表
const withdrawListApi = () => `${Domain}/api/crowdfunding/withdraw/page`

// 新闻详情
const newsInfoApi = () => `${Domain}/api/news/info`

// 获取活动详情
const activityInfoApi = () => `${Domain}/api/activity/info`

// 活动列表
const activityListApi = () => `${Domain}/api/activity/list`

// 成氏源流列表
const sourceListApi = () => `${Domain}/api/source/page`

// 成氏源流详情页
const sourceInfoApi = () => `${Domain}/api/source/info`

// 成氏族谱列表
const familyTreeApi = () => `${Domain}/api/genealogy/page`

// 成氏族谱 详情页
const genealogyApi = () => `${Domain}/api/genealogy/info`

// 成氏族谱 三级联动 省市区分布
const levelListApi = () => `${Domain}/common/city/parent`

// 获取成氏  县 村落
const villageApi = () => `${Domain}/api/distribute/list/village`

// 获取成氏分布查看  信息
const statisticsApi = () => `${Domain}/api/distribute/statistics`

// 成氏分布提交资料
const submitApi = () => `${Domain}/api/distribute/create`

// 成氏名人列表
const celebrityApi = () => `${Domain}/api/celebrity/page`

// 成氏名人详情
const celebrityInfoApi = () => `${Domain}/api/celebrity/info`

// 成氏名人   朝代
const dynastyApi = () => `${Domain}/common/dictionary/list/parent`

// 成氏团圆年  赞助商家列表
const getSporListApi = () => `${Domain}/api/act/sponsor/list`

// 成氏团圆年  首页6张推荐照片
const getrecommendsApi = () => `${Domain}/api/act/image/recommends`

// 成氏团圆年  上传图片
const submitPicApi = () => `${Domain}/api/act/image/uploadImg`

// 成氏团圆年  查看所有照片
const LookAllPicApi = () => `${Domain}/api/act/image/list`

// 成氏团圆年  查询当前用户上传的图片的接口  逻辑  首页进来判断显示我要上传或者我要点赞按钮
const IfbtnApi = () => `${Domain}/api/act/image/info`

// 成氏团圆年  给照片点赞
const thumbsUpApi = () => `${Domain}/api/act/image/like`

// 成氏团圆年  点击红包领取
const getRedPacketApi = () => `${Domain}/api/act/redenvelope/get`

export {
  userIsloginApi,
  newsPageApi,
  activityPageApi,
  loginApi,
  jsConfigApi,
  activityPayApi,
  activityApplyApi,
  activityReapplyApi,
  listParentApi,
  sponsorListApi,
  sponsorDonationApi,
  activityStatusApi,
  codeSendApi,
  userBindApi,
  userInfoApi,
  userUpdateApi,
  broadcastUpdateApi,
  broadcastListApi,
  tripInfoApi,
  tripCreateApi,
  tripUpdateApi,
  crowdfundingPageApi,
  crowdfundingInfoApi,
  crowdfundingRecordPageApi,
  crowdfundingPageLaunchedApi,
  crowdfundingPagePartApi,
  crowdfundingCreateApi,
  crowdfundingUpdateApi,
  crowdfundingRecordCreateApi,
  crowdfundingRecordCertApi,
  newsInfoApi,
  activityInfoApi,
  activityListApi,
  sourceListApi,
  sourceInfoApi,
  familyTreeApi,
  levelListApi,
  genealogyApi,
  celebrityApi,
  celebrityInfoApi,
  dynastyApi,
  villageApi,
  statisticsApi,
  submitApi,
  cashInfoApi,
  withdrawApi, //申请提现
  withdrawListApi, //提现列表
  getSporListApi, //成氏团圆年赞助商列表
  getrecommendsApi,
  submitPicApi,
  LookAllPicApi,
  IfbtnApi,
  thumbsUpApi,
  getRedPacketApi
};
