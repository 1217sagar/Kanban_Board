import React, { useRef } from 'react'

const AddTask = () => {
  const taskRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    console.log(taskRef.current.value);
    taskRef.current.value ='';
  }

  return (
    <form className='form__input' onSubmit={submitHandler}>
      <label htmlFor='task'></label>
      <input 
        type='text'
        name='task'
        id='task'
        className='input'
        required
        ref={taskRef}
      />
      <button className='addToDoBtn'>ADD TASK</button>
    </form>
  )
}

export default AddTask