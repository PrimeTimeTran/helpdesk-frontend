import React, { useState } from 'react'

export default function HomePage() {
  const [text, setText] = useState('')

  const onChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <div>HomePage</div>
      <input onChange={onChange} />
    </>
  )
}
