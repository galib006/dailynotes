import React from 'react'
import noteimg from './../images/notesBg.png'

function Note() {
  return (
    <div className="bg-cover bg-center h-[540px] w-full p-9 pt-20 pl-8 pr-5" style={{ backgroundImage: `url(${noteimg})` }}>
    <h1 className='font-bold text-3xl text-justify'>Lorem ipsum dolor sit.</h1>
    <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur omnis deleniti numquam eligendi ratione necessitatibus? Iste mollitia reiciendis quidem voluptatem quo ipsum exercitationem eius sunt nesciunt blanditiis dolor harum, architecto distinctio ducimus, laboriosam nobis, cupiditate cumque excepturi molestiae recusandae quam. Maiores minima in non delectus odio sapiente eligendi quod voluptate itaque aliquam neque mollitia quos debitis eos, vero saepe fugiat. Consequuntur, nisi accusantium tenetur numquam, vitae sequi quas optio sint illo omnis distinctio reprehenderit voluptatem obcaecati, corrupti quidem amet? Eum culpa id dolores iste porro.</p>
    </div>
  )
}

export default Note
