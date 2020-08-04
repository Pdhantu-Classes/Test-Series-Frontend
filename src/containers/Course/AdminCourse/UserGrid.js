import React from 'react'
import UserItem from './UserItem'


const UserGrid = ({ items, isLoading }) => {
  return  isLoading ? null: (
     <section className='cards'>
      {
        items && items.length > 0 ?
        items.map((item) => (
          <UserItem  key ={item.id} item={item}></UserItem>
        ))
      :
      null
    }
    </section>
  ) 
}

export default UserGrid