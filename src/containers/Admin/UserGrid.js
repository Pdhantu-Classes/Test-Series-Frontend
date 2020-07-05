import React from 'react'
import UserItem from './UserItem'


const UserGrid = ({ items, isLoading }) => {
  return  isLoading?null: (
     <section className='cards'>
      {items.map((item) => (
        <UserItem  key ={item.id} item={item}></UserItem>
      ))}
    </section>
  ) 
}

export default UserGrid