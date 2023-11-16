import React from 'react'
import { useGlobalContext } from '../context'


export default function Count() {
    const { count } = useGlobalContext();
  return (
      <div>
          {count}
    </div>
  )
}
