import React from 'react'

// embed: https://editor.p5js.org/jeeyoonhyun/embed/5nXV80qXS
// sketch url: 'https://editor.p5js.org/jeeyoonhyun/sketches/5nXV80qXS'

const p5EditorPreview = ({ value }) => {
  const { url = '' } = value //you need the curly braces!! (destructuring)
  const splitURL = url.split('/')
  // ["https:", "", "editor.p5js.org", "jeeyoonhyun", "sketches", "5nXV80qXS"]
  const [, , , user, , hash] = splitURL
  const embedUrl = `https://editor.p5js.org/${user}/embed/${hash}`
  // bypass for server-side rendering (ignore window element in node)
  // https://github.com/gatsbyjs/gatsby/issues/9214#issuecomment-431073612
  // https://github.com/gatsbyjs/gatsby/issues/9038
  return (
    <iframe
      src={embedUrl}
      height="370"
      style={{ width: '100%' }}
      scrolling="no"
      title="p5.js Editor Embed"
      frameBorder="no"
      allowTransparency
      allowFullScreen
    />
  )
}

export default {
  name: 'p5editor',
  type: 'object',
  title: 'p5.js Editor Embed',
  preview: {
    select: {
      url: 'url'
    },
    component: p5EditorPreview
  },
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'p5.js Editor URL'
    }
  ]
}
