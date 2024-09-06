import React from 'react'
import { useParams } from 'react-router-dom'

function Book() {
    const{id} = useParams();
  return (
    <div>
        <h1>Book</h1>
        <p>Book {id}</p>
    </div>
  )
}

export default Book