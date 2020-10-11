import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({ value }) => {
  // const { url } = value
  // const id = getYouTubeId(url)
  // return <YouTube videoId={id} />
  const id = getYouTubeId(value.url)
  const url = `https://www.youtube.com/embed/${id}`

  if (!id) {
    return <div>Missing YouTube URL</div>
  }

  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
