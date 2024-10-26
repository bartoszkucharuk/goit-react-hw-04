import React from 'react'
import styles from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClickLoad }) {
  return (
    <div>
      <button className={styles.loadMoreBtn} onClick={onClickLoad}>Load More</button>
    </div>
  )
}
