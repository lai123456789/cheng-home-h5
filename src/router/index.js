import Vue from 'vue'
import Router from 'vue-router'
import puGetSearch from '@/utils/puGetSearch'
import { loginApiF } from '@/service/requestFun'
import { setToken } from '@/common/js/ut'
const Home = () => import('../views/Home/index')
const MeetSummary = () => import('../views/MeetSummary/index')
const Sign = () => import('../views/Sign/index')
const ShowImage = () => import('../views/ShowImage/index')
const SignSuccess = () => import('../views/SignSuccess/index')
const Sponsor = () => import('../views/Sponsor/index')
const Selfless = () => import('../views/Selfless/index')
const ReviewStatus = () => import('../views/ReviewStatus/index')
const ActiveDetail = () => import('../views/ActiveDetail/index')
const PublicWelfare = () => import('../views/PublicWelfare/index')
const FundingApply = () => import('../views/FundingApply/index')
const WelfareIntroduce = () => import('../views/WelfareIntroduce/index')
const WelfareInfo = () => import('../views/WelfareInfo/index')
const WelfareAction = () => import('../views/WelfareAction/index')
const MineInfo = () => import('../views/MineInfo/index')
const MeetTrip = () => import('../views/MeetTrip/index')
const BindPhone = () => import('../views/BindPhone/index')
const Release = () => import('../views/Release/index')
const Broadcast = () => import('../views/Broadcast/index')
const HelpSpecification = () => import('../views/HelpSpecification/index')
const MemberTerms = () => import('../views/MemberTerms/index')
const InformationDisclosure = () => import('../views/InformationDisclosure/index')
const ChengOrigin = () => import('../views/ChengOrigin/index')
const ChengDistribution = () => import('../views/ChengDistribution/index')
const FamilyTree = () => import('../views/FamilyTree/index')
const ChengCelebrity = () => import('../views/ChengCelebrity/index')
const ChengCelebrityInfo = () => import('../views/ChengCelebrityInfo/index')
const ClansmenAssociation = () => import('../views/ClansmenAssociation/index')
const CulturalResearch = () => import('../views/CulturalResearch/index')
const WelfareList = () => import('../views/WelfareList/index')
const MyPublicWelfare = () => import('../views/MyPublicWelfare/index')
const FundraisingDetail = () => import('../views/FundraisingDetail/index')
const myFundraising = () => import('../views/myFundraising/index') //我的筹款
const FundraisingPay = () => import('../views/FundraisingPay/index')
const DetailA = () => import('../views/DetailA/index')
const activitedInfo = () => import('../views/activitedInfo/index')
const activitedList = () => import('../views/activitedList/index')
const IframLink = () => import('../views/IframLink/index')
const ChengOriginInfo = () => import('../views/ChengOriginInfo/index')
const FamilyTreeInfo = () => import('../views/FamilyTreeInfo/index')
const ChengYearActivited = () => import('../views/ChengYearActivited/index')
const ChengYearActivitedUploadPic = () => import('../views/ChengYearActivitedUploadPic/index')
const ChengYearActivitedAllpicture = () => import('../views/ChengYearActivitedAllpicture/index')
const ChengYearActivitedInfoPic = () => import('../views/ChengYearActivitedInfoPic/index')
const ChengYearActivitedRule = () => import('../views/ChengYearActivitedRule/index')
const ChengYearActivitedSponsorInfo = () => import('../views/ChengYearActivitedSponsorInfo/index')
const ChengYearActivitedIntroduce = () => import('../views/ChengYearActivitedIntroduce/index')
const ChengYearActivitedRedpackShow = () => import('../views/ChengYearActivitedRedpackShow/index')
//数据收集模块
const memberRegistration = () => import('../views/dataCollection/memberRegistration/index')
const replaceRegiste = () => import('../views/dataCollection/replaceRegiste/index')

Vue.use(Router)
const VueRouter = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/meetSummary',
        name: 'meetSummary',
        component: MeetSummary
    },
    {
        path: '/sign',
        name: 'sign',
        component: Sign
    },
    {
        path: '/signSuccess',
        name: 'signSuccess',
        component: SignSuccess
    },
    {
        path: '/showImage',
        name: 'showImage',
        component: ShowImage
    },
    {
        path: '/sponsor',
        name: 'sponsor',
        component: Sponsor
    },
    { // 无私奉献
        path: '/selfless',
        name: 'selfless',
        component: Selfless
    },
    { // 审核状态
        path: '/reviewStatus',
        name: 'reviewStatus',
        component: ReviewStatus
    },
    { // 活动详情
        path: '/activeDetail',
        name: 'activeDetail',
        component: ActiveDetail
    },
    { // 成氏公益
        path: '/publicWelfare',
        name: 'publicWelfare',
        component: PublicWelfare
    },
    { // 资助申请
        path: '/fundingApply',
        name: 'fundingApply',
        component: FundingApply
    },
    { // 基金会介绍
        path: '/welfareIntroduce',
        name: 'welfareIntroduce',
        component: WelfareIntroduce
    },
    { // 信息公开
        path: '/welfareInfo',
        name: 'welfareInfo',
        component: WelfareInfo
    },
    { // 基金会行动
        path: '/welfareAction',
        name: 'welfareAction',
        component: WelfareAction
    },
    { // 填写个人信息
        path: '/mineInfo',
        name: 'mineInfo',
        component: MineInfo
    },
    { // 会议行程
        path: '/meetTrip',
        name: 'meetTrip',
        component: MeetTrip
    },
    { // 绑定手机
        path: '/bindPhone',
        name: 'bindPhone',
        component: BindPhone
    },
    { // 绑定手机
        path: '/release',
        name: 'release',
        component: Release
    },
    { // 绑定手机
        path: '/broadcast',
        name: 'broadcast',
        component: Broadcast
    },
    { // 求助规范
        path: '/helpSpecification',
        name: 'helpSpecification',
        component: HelpSpecification
    },
    { // 会员条款
        path: '/memberTerms',
        name: 'memberTerms',
        component: MemberTerms
    },
    { // 会员条款
        path: '/informationDisclosure',
        name: 'informationDisclosure',
        component: InformationDisclosure
    },
    { // 成氏源流
        path: '/chengOrigin',
        name: 'chengOrigin',
        component: ChengOrigin
    },
    { // 成氏源流详情页
      path: '/ChengOriginInfo',
      name: 'ChengOriginInfo',
      component: ChengOriginInfo
    },
    { // 成氏分布
        path: '/chengDistribution',
        name: 'chengDistribution',
        component: ChengDistribution
    },
    { // 成氏家谱
        path: '/familyTree',
        name: 'familyTree',
        component: FamilyTree
    },
    { // 成氏家谱详情页
      path: '/FamilyTreeInfo',
      name: 'FamilyTreeInfo',
      component: FamilyTreeInfo
    },
    { // 成氏名人
        path: '/chengCelebrity',
        name: 'chengCelebrity',
        component: ChengCelebrity
    },
    { // 成氏名人
        path: '/chengCelebrityInfo',
        name: 'chengCelebrityInfo',
        component: ChengCelebrityInfo
    },
    { // 成氏名人
        path: '/clansmenAssociation',
        name: 'clansmenAssociation',
        component: ClansmenAssociation
    },
    { // 文化研究会
        path: '/culturalResearch',
        name: 'culturalResearch',
        component: CulturalResearch
    },
    { // 公益项目列表
        path: '/welfareList',
        name: 'welfareList',
        component: WelfareList
    },
    { // 我的公益
        path: '/myPublicWelfare',
        name: 'myPublicWelfare',
        component: MyPublicWelfare
    },
    { // 筹款详情
        path: '/fundraisingDetail/:id',
        name: 'fundraisingDetail',
        component: FundraisingDetail
    },
    { // 我的筹款
      path: '/myfundraising',
      name: 'myfundraising',
      component: myFundraising
    },
    { // 成氏公益-捐款页面
        path: '/fundraisingPay',
        name: 'fundraisingPay',
        component: FundraisingPay
    },
    { // 成氏新闻详情页
        path: '/detailA/:id',
        name: 'detailA',
        component: DetailA
    },
    { // 活动详情
        path: '/activitedInfo',
        name: 'activitedInfo',
        component: activitedInfo
    },
    { // 活动列表
        path: '/activitedList',
        name: 'activitedList',
        component: activitedList
    },
    { // iframe页面
        path: '/IframLink',
        name: 'IframLink',
        component: IframLink
    },
    { // 成氏团圆年活动首页
      path: '/ChengYearActivited',
      name: 'ChengYearActivited',
      component: ChengYearActivited
    },
    { // 成氏团圆年活动上传照片页
      path: '/ChengYearActivitedUploadPic',
      name: 'ChengYearActivitedUploadPic',
      component: ChengYearActivitedUploadPic
    },
    { // 成氏团圆年活动查看全部照片
      path: '/ChengYearActivitedAllpicture',
      name: 'ChengYearActivitedAllpicture',
      component: ChengYearActivitedAllpicture
    },
    { // 成氏团圆年活动查看详情照片
      path: '/ChengYearActivitedInfoPic',
      name: 'ChengYearActivitedInfoPic',
      component: ChengYearActivitedInfoPic
    },
    { // 成氏团圆年活动规则及流程
      path: '/ChengYearActivitedRule',
      name: 'ChengYearActivitedRule',
      component: ChengYearActivitedRule
    },
    { // 成氏团圆年活动赞助商列表
      path: '/ChengYearActivitedSponsorInfo',
      name: 'ChengYearActivitedSponsorInfo',
      component: ChengYearActivitedSponsorInfo
    },
    { // 成氏团圆年活动赞助商列表
      path: '/ChengYearActivitedIntroduce',
      name: 'ChengYearActivitedIntroduce',
      component: ChengYearActivitedIntroduce
    },
    { // 成氏团圆年活动 红包金额展示
      path: '/ChengYearActivitedRedpackShow',
      name: 'ChengYearActivitedRedpackShow',
      component: ChengYearActivitedRedpackShow
    },
    { // 成氏数据收集登记
      path: '/dataCollection/memberRegistration',
      name: 'memberRegistration',
      component: memberRegistration
    },
    { // 代人登记
      path: '/dataCollection/replaceRegiste',
      name: 'replaceRegiste',
      component: replaceRegiste
    }
  ]
})

export default VueRouter

const DOC_TITLE = {
    'meetTrip': '会议议程',
    'bindPhone': '绑定手机',
    'release': '六大专题',
    'broadcast': '六大专题',
    'memberTerms': '会员条款',
    'helpSpecification': '求助规范',
    'informationDisclosure': '信息公开',
    'chengOrigin': '成氏源流',
    'chengDistribution': '成氏分布',
    'familyTree': '成氏家谱',
    'chengCelebrity': '成氏名人',
    'clansmenAssociation': '宗亲总会',
    'culturalResearch': '文化研究会',
    'welfareList': '公益项目',
    'welfareIntroduce': '基金会介绍',
    'welfareInfo': '信息公开',
    'myPublicWelfare': '我的公益',
    'publicWelfare': '成氏公益',
    'fundraisingDetail': '筹款详情',
    'myfundraising': '我的筹款',
    'FundraisingPay': '捐款',
    'detailA': '查看详情',
    'activitedInfo': '活动详情',
    'activitedList': '活动列表',
    'IframLink': '第六届世界成氏恳亲大会视频/照片直播',
    'ChengOriginInfo': '成氏源流详情',
    'FamilyTreeInfo': '成氏家谱详情',
  'ChengYearActivited': '成氏团圆年',  //首页
  'ChengYearActivitedUploadPic': '上传照片',
  'ChengYearActivitedAllpicture': '查看全部照片',
  'ChengYearActivitedInfoPic':'查看具体照片',
  'ChengYearActivitedRule':'活动规则及流程',
  'ChengYearActivitedSponsorInfo':'活动赞助',
  'ChengYearActivitedIntroduce':'活动奖品介绍',
  'ChengYearActivitedRedpackShow':'红包展示',
  'memberRegistration':"总会会员注册登记",
  'replaceRegiste':"总会会员注册登记"
}
VueRouter.afterEach((to, from) => {
    let { name } = to
    document.title = DOC_TITLE[name] || '成氏之家'
    console.log(to, from);
    console.log("标题主页")
})
// VueRouter.beforeRouteLeave((to, from, next) => {
//   console.log('leave', to, from, next)
//     // next()
// })
