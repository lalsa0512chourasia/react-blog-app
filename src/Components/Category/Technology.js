import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { NoteContext } from './NoteContext'

const Technology = () => {
  const [data] = useContext(NoteContext);
  console.log(data);


const moreitems = () =>{
  console.log("heggg");
}

  return (
    <>
      <h1>Technology</h1>
      {data.filter((x) => x.id > 4 && x.id < 9).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
              <img src={curElem.img} alt="My Awesome" />
              <p>
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong> / {curElem.date_of_publish}

              </p>
              <hr />
            </div>



          </div>



        )
      })}

   <button onClick={moreitems}>Load More</button>
   <div className='bollyrightfloat2'>

<h1>Top Post</h1>
<div className='top top1'>
  <img src='https://s3.studytonight.com/curious/uploads/pictures/1631781640-79542.jpg' alt='' />
  <span>1</span>
</div>
<div className='top top2'>
  <img src='https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/>
</div>
<div className='top top3'><img src='https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/></div>
<div className='top top4'><img src='https://image.shutterstock.com/image-vector/kids-learning-coding-programming-online-600w-1777292972.jpg' alt=''/></div>
</div>

<div className='bollyadver'>
Advertisement
</div>


    </>
  )
}
export default Technology