import React from 'react'
// import avatar from '../../../asset/avatar.svg'
import { useHistory } from 'react-router-dom'
import '../../../css/UserCard.css'
const UserItem = ({ item }) => {

  const history = useHistory()

  const handleProfileDetails =(id) =>{
    console.log(id)
    window.localStorage.setItem("user_id", id)
    history.push("/adminCourse/userDetails")
  }
  return (
    <div className='card card-user mt-2'>
      <div className='card'>
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
              <strong>Course:</strong>
              {
                item.course === null ?
                  <span> NA</span>
                  :
                  
                  <span>
                    {
                    item.course === 1 ? 'PRELIMS' :
                    item.course === 2 ? 'PRE+MAINS':
                    item.course === 3 ? 'MAINS(Hindi)':
                    item.course === 4 ? 'MAINS(English)':
                    'NA'
                    }</span>
              }
            </li>
            <li>
              <strong>Joined at: </strong>{item.created_at}
            </li>
            <li>
              <button onClick={()=>handleProfileDetails(item.id)} className="btn btn-primary">View Full Profile</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserItem