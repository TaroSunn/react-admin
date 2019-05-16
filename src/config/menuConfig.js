const menuConfig = [
  {
    title: '首页',
    type: 'home',
    key: '/home'
  },
  {
    title: 'UI',
    type: 'sketch',
    key: '/ui',
    children: [
      {
        title: '按钮',
        type: 'trophy',
        key: '/ui/buttons'
      },
      {
        title: '弹窗',
        type: 'credit-card',
        key: '/ui/modals'
      },
      {
        title: '/Loading',
        type: 'loading',
        key: '/ui/loading'
      },
      {
        title: '通知提醒',
        type: 'bulb',
        key: '/ui/notification'
      },
      {
        title: '全局Message',
        type: 'message',
        key: '/ui/message'
      },
      {
        title: 'Tab标签页',
        type: 'tablet',
        key: '/ui/tabs'
      }, 
      {
        title: '图片画廊',
        type: 'gold',
        key: '/ui/gallery'
      }, 
      {
        title: '轮播图',
        type: 'environment',
        key: '/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    type: 'table',
    key: '/from',
    children: [
      {
        title: '登陆',
        type: 'login',
        key: '/form/login'
      },
      {
        title: '注册',
        type: 'user',
        key: '/from/reg'
      }
    ]
  },
  {
    title: '表格',
    type: 'form',
    key: '/table',
    children: [
      {
        title: '基础表格',
        type: 'plus-square',
        key: '/table/basic'
      },
      {
        title: '高级表格',
        type: 'minus-square',
        key: '/table/high'
      }
    ]
  },
  {
    title: '富文本',
    type: 'align-center',
    key: '/rich'
  },
  {
    title: '城市管理',
    type: 'rocket',
    key: '/city'
  },
  {
    title: '订单管理',
    type: 'bars',
    key: '/order',
    btnList: [
      {
        title: '订单详情',
        type: 'cloud-download',
        key: 'detail'
      },
      {
        title: '结束订单',
        type: 'experiment',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    type: 'contacts',
    key: '/user'
  },
  {
    title: '车辆管理',
    type: 'car',
    key: '/bikeMap'
  },
  {
    title: '图标',
    type: 'dashboard',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        type: 'bar-chart',
        key: '/charts/bar'
      },
      {
        title: '饼状图',
        type: 'pie-chart',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        type: 'line-chart',
        key: '/charts/line'
      }
    ]
  },
  {
    title: '权限设置',
    type: 'idcard',
    key: '/permission'
  }
  
]
export default menuConfig