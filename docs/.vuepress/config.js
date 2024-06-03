import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '前端知识体系构建',
  description: 'Constructing a Front-End Knowledge System',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/favicon.png',

    navbar: [
      {
        text: 'JavaScript',
        children: [
          '/js/introduction.md',
        ],
      },
      {
        text: 'HTML',
        children: [
          '/html/introduction.md',
          '/html/document-type.md',
        ],
      },
      {
        text: 'CSS',
        children: [
          '/css/introduction.md',
          '/css/center.md'
        ],
      }
    ],
  }),

  bundler: viteBundler(),
})
