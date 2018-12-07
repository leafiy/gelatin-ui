const path = require('path')


module.exports = {
  title: 'Gelatin-Ui',
  description: '🎨 A vuejs ui toolkit from unicapsule.com',
  port: 8108,
  host: "localhost",
  base:"/gelatin-ui/",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
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
      ['/layout/', 'Layout 布局'],
      ['/popover/', 'Popover 弹出'],
      ['/checkbox/', 'Checkbox'],
      ['/radio/', 'Radio'],
      ['/modal/', 'Modal'],
      ['/confirm/', 'Confirm'],
      ['/progress/', 'Progress'],
      ['/alert/', 'Alert'],
      ['/toast/', 'Toast'],
      ['/message/','Message'],
      ['/share/','Share'],
      ['/typer/','Typer 打字机'],
      ['/carousel/','Carousel 卡片轮播']
    ]
  },
  lastUpdated: 'Last Updated',
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images'
      }
    }
  }
}
