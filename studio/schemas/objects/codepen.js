import React from 'react'
import Codepen from 'react-codepen-embed'

const CodePenPreview = ({ value }) => {
  const { url = '', themeId = 'dark' } = value // <= add themeId here, default it to "dark"
  const splitURL = url.split('/')
  // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=${themeId}&default-tab=result` // <= add themeId here
  return (
    <iframe
      height="370"
      style={{ width: '100%' }}
      scrolling="no"
      title="CodePen Embed"
      src={embedUrl}
      frameBorder="no"
      allowTransparency
      allowFullScreen
    />
  )
}

export default {
  name: 'codepen',
  type: 'object',
  title: 'CodePen Embed',
  preview: {
    select: {
      url: 'url',
      themeId: 'themeId' // <= add themeId here
    },
    component: CodePenPreview
  },
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'CodePen URL',
      validation: Rule => Rule.error('You have to fill out the URL.').required()
    },
    // Add the new field below
    {
      name: 'themeId',
      type: 'string',
      title: 'Theme ID',
      description: 'You can use "light" and "dark" also.'
    }
  ]
}
