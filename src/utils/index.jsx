import React from 'react'
import { pocketBaseUri } from '@/constants/config'
import { authorId } from '@/constants/settings'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import {
  SiSvelte,
  SiReact,
  SiVuedotjs,
  SiAngularjs,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiApollographql,
  SiGraphql,
  SiGoland,
  SiMarkdown,
  SiTailwindcss,
  SiWindicss,
  SiCss3,
  SiSass,
  SiLess,
  SiGit,
  SiVite,
  SiHtml5
} from 'react-icons/si'

// 获取Author Avatar图片
export const avatarImage = imagePath => `${pocketBaseUri}/api/files/users/${authorId}/${imagePath}`

// 序列化字符串 tags
export const serializationString = string => string.split(/,\s*/)
// Date格式化
dayjs.extend(relativeTime)
export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')
export const fullDateFormat = date => dayjs(date).format('YYYY-MM-DD HH:mm:ss')
export const dateNowFormat = date => dayjs(date).locale('zh-cn').fromNow()

//序列化Skeleton
export const limitMap = limit => Array(limit).fill(0)

// 格式化slug
export const slugFormat = slug => slug.toLowerCase().trim().replace(/\s+/g, '-')

// Snippet 中 category.slug 匹配 图标
export const snippetIcon = type => {
  switch (type) {
    case 'react':
      return <SiReact />
    case 'svelte':
      return <SiSvelte />
    case 'vue':
      return <SiVuedotjs />
    case 'angular':
      return <SiAngularjs />
    case 'javascript':
      return <SiJavascript />
    case 'typescript':
      return <SiTypescript />
    case 'node':
      return <SiNodedotjs />
    case 'apollo':
      return <SiApollographql />
    case 'graphql':
      return <SiGraphql />
    case 'go':
      return <SiGoland />
    case 'markdown':
      return <SiMarkdown />
    case 'tailwind':
      return <SiTailwindcss />
    case 'windi':
      return <SiWindicss />
    case 'css':
      return <SiCss3 />
    case 'sass':
      return <SiSass />
    case 'less':
      return <SiLess />
    case 'git':
      return <SiGit />
    case 'vite':
      return <SiVite />
    case 'html':
      return <SiHtml5 />
    default:
      return ''
  }
}
