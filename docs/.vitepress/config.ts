import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  title: '選擇權知識庫',
  description: '選擇權問題集與 joption 雙賣平衡程式完整指南',
  lang: 'zh-TW',
  base: '/options-kb/',

  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    logo: '/logo.png',
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
          text: '📚 選擇權問題集',
          items: [
            { text: '總覽', link: '/options/' },
          ]
        },
        {
          text: 'CH 1　基本概念',
          collapsed: false,
          items: [
            { text: '什麼是選擇權', link: '/options/basics' },
            { text: '選擇權定價', link: '/options/pricing' },
          ]
        },
        {
          text: 'CH 2　希臘字母',
          collapsed: false,
          items: [
            { text: 'Delta / Gamma / Theta / Vega', link: '/options/greeks' },
          ]
        },
        {
          text: 'CH 3　策略運用',
          collapsed: false,
          items: [
            { text: '雙賣、價差、跨式、勒式', link: '/options/strategies' },
          ]
        },
        {
          text: 'CH 4　風險管理',
          collapsed: false,
          items: [
            { text: '停損與保證金控管', link: '/options/risk' },
          ]
        },
      ],

      '/joption/': [
        {
          text: '⚖️ joption 雙賣平衡程式',
          items: [
            { text: '總覽', link: '/joption/' },
          ]
        },
        {
          text: 'CH 1　認識程式',
          collapsed: false,
          items: [
            { text: '常見問題 FAQ', link: '/joption/faq' },
            { text: '什麼是幽靈單', link: '/joption/ghost-order' },
          ]
        },
        {
          text: 'CH 2　設定與操作',
          collapsed: false,
          items: [
            { text: '參數設定', link: '/joption/settings' },
            { text: '操作教學', link: '/joption/tutorial' },
          ]
        },
        {
          text: 'CH 3　問題排除',
          collapsed: false,
          items: [
            { text: '異常排除', link: '/joption/troubleshoot' },
          ]
        },
      ]
    },

    editLink: {
      pattern: 'https://github.com/joption-tw/options-kb/edit/main/docs/:path',
      text: '✏️ 在 GitHub 上編輯此頁'
    },

    footer: {
      message: '選擇權知識庫 — 共同維護，共同成長',
      copyright: '© Joption Academy'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/joption-tw/options-kb' }
    ],

    lastUpdated: {
      text: '最後更新',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '本頁目錄',
      level: [2, 3],
    },
  }
})
