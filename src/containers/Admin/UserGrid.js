import React from 'react'
import Spinner from './Spinner'
import UserItem from './UserItem'


const UserGrid = ({ items, isLoading }) => {
  return  isLoading?(<Spinner/>): (
     <section className='cards'>
      {items.map((item) => (
        <UserItem  key ={item.id} item={item}></UserItem>
      ))}
    </section>
  ) 
}

export default UserGrid