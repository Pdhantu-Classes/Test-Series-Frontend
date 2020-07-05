import React from 'react'
import avatar from '../../asset/avatar.svg'

const UserItem = ({ item }) => {
  console.log(item)
  return (
    <div className='card mt-2'>
      <div className='card-inner'>
        <div className='card-back bg-white mt--2'>
          {
            item.image_url === null ?
              <img src={avatar} alt='' />
              :
              <img src={item.image_url} alt='' />
          }
        </div>
        <div className="py-2 card-front">
          <h5>{item.firstname} {item.lastname}</h5>
          <ul>
            <li>
              <strong>Email:</strong> {item.email}
            </li>
            <li>
              <strong>Mobile:</strong> {item.mobile}
            </li>
            <li>
              <strong>Graduation Year:</strong>
              {
                item.graduation_year === null ?
                  <span> NA</span>
                  :
                  <span>{item.graduation_year}</span>
              }
            </li>
            <li>
              <strong>Whatsapp:</strong>
              {
                item.whatsapp === null ?
                  <span>NA</span>
                  :
                  <span> {item.whatsapp}</span>
              }
            </li>
            <li>
              <strong>Preparing For:</strong>
              {
                item.preparing_for === null ?
                  <span> NA</span>
                  :
                  <span>{item.preparing_for}</span>
              }
            </li>
            <li>
              <strong>Joined at: </strong>{item.created_at}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserItem