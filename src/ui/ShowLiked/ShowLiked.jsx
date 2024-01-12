import React from 'react'
import s from './ShowLiked.module.scss'
import like from '../../assets/like.svg'

export const ShowLiked = ({link}) => {
  return (
    <button className={s.liked__button}>
      <img className={s.liked__icon} src={like} alt="like" />
      <span className={s.liked__text}>Show liked</span>
    </button>
  )
}
