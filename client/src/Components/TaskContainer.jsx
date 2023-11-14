import React from 'react'
import { Link } from 'react-router-dom'

const TaskContainer = ({socket}) => {
  return (
    <div className='container'>
      <div className='pending__wrapper'>
        <div className='pending__items'>
          <p>Debug the Notification Center</p>
          <p className='comment'>
            <Link to="/comments">2 comments</Link>
          </p>
        </div>
      </div>
      <div className='ongoing__wrapper'>
        <div className='ongoing__items'>
          <p>Ongoing task</p>
          <p className='comment'>
            <Link to="/comments">2 comments</Link>
          </p>
        </div>
      </div>
      <div className='completed__wrapper'>
        <div className='completed__items'>
          <p>Completed Tasks</p>
          <p className='comment'>
            <Link to="/comments">2 comments</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskContainer