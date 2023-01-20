import React, { memo } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'

const MarkdownContent = ({ source, config }) => {
  return <MarkdownPreview source={source} {...config} />
}

export default memo(MarkdownContent)
