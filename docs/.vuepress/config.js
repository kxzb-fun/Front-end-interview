import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: '前端知识体系构建',
  description: 'Constructing a Front-End Knowledge System',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/favicon.png',

    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
