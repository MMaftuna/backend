import React from 'react'
import { useGlobalContext } from '../context'
import Post from './Post';


export default function Posts() {
    const { posts } = useGlobalContext();
  return (
      <div>
          {posts.map((item) => {
              return <Post key={item.id} {...item} />
          })}
    </div>
  )
}
