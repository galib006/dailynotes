import React, { useState } from 'react'

function Form() {
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
    const inputTitle = (e)=>{
      setTitle(e.target.value);
      console.log(title);
    }
     const inputDesc = (e)=>{
      setDesc(e.target.value);
    }
  const reload = (e) =>{
    e.preventDefault()
  }
  return (
    <>
      <div className='bg-blue-300 w-1/3 p-2'>
        <form action="" className='flex flex-col gap-2' onSubmit={(e)=>{reload(e)}}>
        <input type="text" placeholder='Enter Title' className='border-2 border-black active:outline-none bg-white p-1.5' maxLength="22" onChange={(e)=>{inputTitle(e)}} value={title}/>
        <textarea name="" id="" placeholder='Details (Maximum 85 character)' className='border-2 border-black active:outline-none bg-white h-20 p-1.5' maxLength="85" onChange={(e)=>{inputDesc(e)}}></textarea>
        <input type="submit" value="SUBMIT" className='btn btn-success'/>
      </form>
      </div>
    </>
  )
}

export default Form
