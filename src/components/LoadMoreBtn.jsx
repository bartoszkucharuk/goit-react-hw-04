import React from 'react'

export default function LoadMoreBtn({ onClickLoad }) {
  return (
    <div>
      <button onClick={onClickLoad}>Load More</button>
    </div>
  )
}
