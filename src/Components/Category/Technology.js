import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { NoteContext } from './NoteContext'

const Technology = () => {
  const [data] = useContext(NoteContext);
  console.log(data);

  const [load, setload] = useState(false)

  const setloadmore = () => {

    setload(!load)
    // setName("Load less")
  }


  return (
    <>
      <h1>Technology</h1>

      {load ?
      <>
      {data.filter((x) => x.id > 4 && x.id < 9).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
            <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" /></Link>
              <div className="bollyp">
              <Link  to={`/bolly/${curElem.category}/${curElem.id}`}>
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong> / {curElem.date_of_publish}
                </Link>
              </div>
              <hr />
            </div>
          </div>
        )
      })}

      <>
      {data.filter((x) => x.id > 4 && x.id < 9).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
            <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" />
              <div className="bollyp">
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong> / {curElem.date_of_publish}

              </div></Link>
              <hr />
            </div>
          </div>
        )
      })}
      </>
      </>
:
<>
{data.filter((x) => x.id > 4 && x.id < 9).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
            <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" />
              <div className="bollyp">
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong> / {curElem.date_of_publish}

              </div></Link>
              <hr />
            </div>
          </div>
        )
      })}
      </>
    }

   <div className='bollyrightfloat2'>

<h1>Top Post</h1>
<div className='top top1'>
  <img src='https://s3.studytonight.com/curious/uploads/pictures/1631781640-79542.jpg' alt='' />
  <span>1</span>
</div>
<div className='top top2'>
  <img src='https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/><span>2</span>
</div>
<div className='top top3'><img src='https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt=''/><span>3</span></div>
<div className='top top4'><img src='https://image.shutterstock.com/image-vector/kids-learning-coding-programming-online-600w-1777292972.jpg' alt=''/><span>4</span></div>
</div>

<div className='bollyadver'>
Advertisement
</div>

<button className='loadm' onClick={setloadmore}>{load === false ? "Load More" : "Load Less"}</button>
    </>
  )
}
export default Technology