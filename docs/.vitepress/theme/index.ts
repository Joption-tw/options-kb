import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import './custom.css'

export default {
  extends: DefaultTheme,

  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },

  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
  },

  setup() {
    const route = useRoute()

    const initZoom = () => {
      mediumZoom('.main img:not(.no-zoom)', {
        background: 'rgba(0,0,0,0.8)',
        margin: 24,
      })
    }

    onMounted(() => {
      initZoom()
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}
