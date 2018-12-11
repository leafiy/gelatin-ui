const path = require('path')


module.exports = {
  title: 'Gelatin-Ui',
  description: '🎨 A vuejs ui toolkit from unicapsule.com',
  port: 8108,
  host: "localhost",
  base: "/gelatin-ui/",
  themeConfig: {
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
        ]
      },
      {
        title: 'basic',
        collapsable: false,
        children: [
          ['/layout/', 'Layout 布局'],
          ['/progress/', 'Progress'],
          ['/alert/', 'Alert'],
          ['/slide-panel/', 'Slide-Panel'],
        ]
      },
      {
        title: 'form',
        collapsable: false,
        children: [
          ['/checkbox/', 'Checkbox'],
          ['/radio/', 'Radio'],
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
          ['/tooltip/', 'Tooltip'],
          ['/dropdown/', 'Dropdown'],
          ['/popover/', 'Popover'],
        ]
      },
      {
        title: 'utils',
        collapsable: false,
        children: [
          ['/share/', 'Share'],
          ['/typer/', 'Typer 打字机'],
          ['/carousel/', 'Carousel 卡片轮播'],
          ['/countdown/', 'Countdown 倒计时'],
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
