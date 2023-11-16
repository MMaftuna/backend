import React from 'react'

export default function Post({id, title, body}) {

  return (
      <div>
          <h2>{title}</h2>
          <p>{body}</p>
          
    </div>
  )
}
