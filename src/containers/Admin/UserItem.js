import React from 'react'

const UserItem = ({ item }) => {
    console.log(item)
  return (
    <div className='card mt-2'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img_url} alt='' />
        </div>
        <div className="py-2">
       <h1>{item.firstname} {item.lastname}</h1>
          <ul>
            <li>
              <strong>Email:</strong> {item.email}
            </li>
            <li>
              <strong>Mobile:</strong> {item.mobile}
            </li>
            <li>
              <strong>Graduation Year:</strong> {item.graduation_year}
            </li>
            <li>
              <strong>Whats App:</strong> {item.whatsapp}
            </li>
            <li>
              <strong>Preparing For:</strong> {item.preparing_for}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserItem