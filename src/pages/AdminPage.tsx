import React, { useState } from 'react'
export default function AdminPage() {
  const [text, setText] = useState('')

  const onChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <>
      <div>AdminPage</div>
      <input onChange={onChange} />
    </>
  )
}
