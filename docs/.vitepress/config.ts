import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '選擇權知識庫',
  description: '選擇權問題集與 joption 雙賣平衡程式完整指南',
  lang: 'zh-TW',
  base: '/options-kb/',

  themeConfig: {
    logo: '📊',
    siteTitle: '選擇權知識庫',

    search: {
      provider: 'local'
    },

    nav: [
      { text: '首頁', link: '/' },
      { text: '選擇權問題集', link: '/options/' },
      { text: 'joption 雙賣平衡', link: '/joption/' },
    ],

    sidebar: {
      '/options/': [
        {
          text: '選擇權問題集',
          items: [
            { text: '總覽', link: '/options/' },
            { text: '基本概念', link: '/options/basics' },
            { text: '選擇權定價', link: '/options/pricing' },
            { text: '希臘字母', link: '/options/greeks' },
            { text: '策略運用', link: '/options/strategies' },
            { text: '風險管理', link: '/options/risk' },
          ]
        }
      ],
      '/joption/': [
        {
          text: 'joption 雙賣平衡程式',
          items: [
            { text: '總覽', link: '/joption/' },
            { text: '常見問題 FAQ', link: '/joption/faq' },
            { text: '什麼是幽靈單', link: '/joption/ghost-order' },
            { text: '參數設定', link: '/joption/settings' },
            { text: '操作教學', link: '/joption/tutorial' },
            { text: '異常排除', link: '/joption/troubleshoot' },
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/joption-tw/options-kb/edit/main/docs/:path',
      text: '在 GitHub 上編輯此頁'
    },

    footer: {
      message: '選擇權知識庫 — 共同維護，共同成長',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joption-tw/options-kb' }
    ]
  }
})
