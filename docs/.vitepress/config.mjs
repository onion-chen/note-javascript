import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "javascript",
  description: "note javascript",
  lang: "zh-CN",
  base: "/note-javascript/",

  head: [
    ["link", { rel: "icon", href: "/note-js/favicon.ico" }],
  ],

  themeConfig: {
    logo: "/favicon.ico",
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '学习目录', link: '/src/' }
    ],

    sidebar: [
      {
        text: 'javascript基础',
        items: [
          {
            text: '语法基础',
            link: '/src/base/',
            items: [
              {
                text: '语法',
                link: '/src/base/grammar/',
                items: [
                  { text: '1.语法', link: '/src/base/grammar/01语法' },
                  { text: '2.变量', link: '/src/base/grammar/02变量' },
                  { text: '3.数据类型', link: '/src/base/grammar/03数据类型' },
                  { text: '4.操作符', link: '/src/base/grammar/04操作符' },
                  { text: '5.语句', link: '/src/base/grammar/05语句' }
                ]
              },

            ]
          }
        ],
      },
      {
        text: 'javascript进阶',
        items: [
          {
            text: '作用域和闭包',
            link: '/src/elevate/scopes/',
            items: [
              { text: '1.this指向问题', link: '/src/elevate/scopes/01this指向问题' },
              { text: '2.作用域和闭包', link: '/src/elevate/scopes/02作用域和闭包' },
              { text: '3.变量和函数提升', link: '/src/elevate/scopes/03变量和函数提升' },
            ]
          }
        ],
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/onion-chen/note-javascript' }
    ]
  }
})
