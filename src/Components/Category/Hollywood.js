import React, { useContext,useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
// import React,{useContext} from 'react';
// import { NoteContext } from './NoteContext'
import axios from 'axios'


const Hollywood = () => {
  // const [data] = useContext(NoteContext);
  // console.log(data);

  const [loadm, setloadm] = useState(false)
  const [blog, setBlog]= useState([]);
  const [load, setload] = useState(false)


  const getblogs = () => {
    axios.get("https://react-blog-backen.herokuapp.com/api/v1/category")
        .then((response) => {
            console.log(response);
            setBlog(response.data)
            setload(true)
        })
}
useEffect(() => {
    getblogs()
}, [])





  const setloadmore = () => {
    setloadm(!loadm)
  }
  return (
    <>
      <h1>Hollywood</h1>
      {loadm ? 
      <>
      {blog.filter((x) => x.id > 8 && x.id < 13).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
            <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" /> </Link>
              <div className="bollyp">
              <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> 
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong>/ {curElem.date_of_publish}
                </Link>
              </div>
              <hr />
            </div>
          </div>
        )
      })}

      <>
       {blog.filter((x) => x.id > 8 && x.id < 13).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
            <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" /> 
              <div className="bollyp">
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong>/ {curElem.date_of_publish}

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
      {blog.filter((x) => x.id > 8 && x.id < 13).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
            <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" /> 
              <div className="bollyp">
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong>/ {curElem.date_of_publish}

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
  <img src='https://i.pinimg.com/736x/c4/92/17/c492177b0e60131ac8e612ae218636b4.jpg' alt='' />
  <span>1</span>
</div>
<div className='top top2'>
  <img src='https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/spider-man-arriving-early-in-india-5761-20211129130135.jpg' alt=''/> <span>2</span>
</div>
<div className='top top3'><img src='https://www.teahub.io/photos/full/256-2561554_hollywood-new-upcoming-movies.jpg' alt=''/><span>3</span></div>
<div className='top top4'><img src='https://i.pinimg.com/564x/9d/c0/a9/9dc0a948a0ffc73b9711253f3654be55.jpg' alt=''/><span>4</span></div>
</div>

<div className='bollyadver'>
Advertisement
</div>
<button className='loadm' onClick={setloadmore}>{loadm === false ? "Load More" : "Load Less"}</button>

    </>
  )
}
export default Hollywood