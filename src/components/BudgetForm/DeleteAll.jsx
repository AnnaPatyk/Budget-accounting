import React from 'react'

export default function DeleteAll({hadlerDelit}) {
  return (
    <button className='delete-all' onClick={hadlerDelit}>
      Видалити все
    </button>
  )
}
