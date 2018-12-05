const path = require('path')


module.exports = {
  title: 'Gelatin-Ui',
  description: '🎨 A vuejs ui toolkit from unicapsule.com',
  port: 8108,
  host: "localhost",
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
      ['/progress/', 'Progress']
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
