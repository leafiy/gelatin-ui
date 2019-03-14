const path = require('path')


module.exports = {
  title: 'Gelatin-Ui',
  description: '🎨 简单好看的VueJs UI from unicapsule.com',
  port: 8108,
  host: "192.168.75.132",
  base: "/",
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: 'github', link: 'https://github.com/leafiy/gelatin-ui' },
      { text: 'unicapsule', link: 'https://unicapsule.com' },
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese' },
      //     { text: 'English', link: '/language/English' }
      //   ]
      // }
    ],
    sidebar: [
      '/',
      {
        title: 'config',
        children: [
          ['/install/', '全局引用'],
          ['/depend/', '按需引用'],
          ['/animate/', '内置动画']
        ]
      },
      {
        title: 'basic',
        collapsable: false,
        children: [
          // ['/rem/', 'Rem responsive'],
          ['/layout/', 'Layout 布局'],
          ['/progress/', 'Progress'],
          ['/loading-bar/', 'Loading Bar'],
          ['/alert/', 'Alert'],
          ['/accordion/', 'Accordion 折叠'],
          ['/slide-panel/', 'Slide-Panel'],
          ['/hr/', 'Hr 分割线'],
          ['/avatar/', 'Avatar'],
          ['/tag/', 'Tag'],
          ['/tab/', 'Tab']

        ]
      },
      {
        title: 'form',
        collapsable: false,
        children: [
          // ['/autocomplete/'],
          ['/autocomplete/', 'Autocomplete'],
          ['/input/', 'Input'],
          ['/textarea/', 'Textarea'],
          ['/checkbox/', 'Checkbox'],
          ['/v/', 'V Validation'],
          // ['/select/', 'Select'],
          // ['/radio/', 'Radio'],
        ]
      },
      {
        title: 'notice',
        collapsable: false,
        children: [
          ['/modal/', 'Modal'],
          ['/confirm/', 'Confirm'],
          ['/toast/', 'Toast'],
          ['/message/', 'Message'],
          ['/popover/', 'Popover/Tooltip/Dropdown 弹出框']

        ]
      },
      {
        title: 'utils',
        collapsable: false,
        children: [
          ['/captcha/','验证码'],
          ['/image/', 'Image 图片懒加载'],
          ['/height-transition/', 'Height transition'],
          ['/router-transition/', 'Router transition'],
          ['/share/', 'Share'],
          ['/high-light/', 'High Light 文字高亮'],
          ['/typer/', 'Typer 打字机'],
          ['/carousel/', 'Carousel 卡片轮播'],
          ['/countdown/', 'Countdown 倒计时'],
          ['/sticky/', 'Sticky 滚动固定'],
        ]
      }
    ]
  },
  lastUpdated: 'Last Updated',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images',
        '@': '../'
      }
    }
  }
}
