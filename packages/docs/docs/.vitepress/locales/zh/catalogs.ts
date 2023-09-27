export default [
  {
    text: '指南',
    items: [
      { text: '简介', link: '/zh/documentation/guide/introduction' },
      { text: '快速上手', link: '/zh/documentation/guide/quick-start' }
    ]
  },
  {
    text: '主题',
    items: [{ text: '颜色', link: '/zh/documentation/theme/colors' }]
  },
  {
    text: '组件',
    items: [
      { text: 'Button 按钮', link: '/zh/documentation/components/button' },
      { text: 'Alert 警告', link: '/zh/documentation/components/alert' },
      { text: 'Loading 加载', link: '/zh/documentation/components/loading' },
      { text: 'Input 输入框', link: '/zh/documentation/components/input' },
      { text: 'Checkbox 选择框', link: 'zh/documentation/components/checkbox' },
      { text: 'Switch 开关', link: 'zh/documentation/components/switch' },
      { text: 'Select 选择器', link: 'zh/documentation/components/select' },
      { text: 'Avatar 头像', link: 'zh/documentation/components/avatar' },
      {
        text: 'Notification 通知',
        link: 'zh/documentation/components/notification'
      },
      { text: 'Radio 单选框', link: 'zh/documentation/components/radio' },
      { text: 'Tooltip 文字提示', link: 'zh/documentation/components/tooltip' },
      { text: 'Modal 对话框', link: 'zh/documentation/components/modal' },
      {
        text: 'Pagination 分页',
        link: 'zh/documentation/components/pagination'
      },
      { text: 'Table 表格', link: 'zh/documentation/components/table' },
      { text: 'Navbar 导航栏', link: 'zh/documentation/components/navbar' },
      { text: 'Sidebar 侧边菜单', link: 'zh/documentation/components/sidebar' },
      { text: 'Card 卡片', link: 'zh/documentation/components/card' }
    ]
  }
] as const
