import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// import React,{useContext} from 'react';
// import { NoteContext } from './NoteContext'
import axios from 'axios'


const Food = () => {
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
      <h1>Food</h1>
      {loadm ?
      <>
      
      {blog.filter((x) => x.id > 16 && x.id < 21).map((curElem) => {
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

      <>
      {blog.filter((x) => x.id > 16 && x.id < 21).map((curElem) => {
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
       {blog.filter((x) => x.id > 16 && x.id < 21).map((curElem) => {
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
      </>

    }

<div className='bollyrightfloat2'>

<h1>Top Post</h1>
<div className='top top1'>
  <img src='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg' alt='' />
  <span>1</span>
</div>
<div className='top top2'>
  <img src='https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083?k=20&m=1156896083&s=612x612&w=0&h=_TOEluPtKxmbkt_80JWO2GN0v_w2ZTG0uUaHjk2TSEY=' alt=''/><span>2</span>
</div>
<div className='top top3'><img src='https://www.thespruceeats.com/thmb/7MY7RBsszlbq1dibyWdKC1YUk6Q=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malai-kofta-vege-balls-in-a-thick-sauce-1957964_hero-01-474bc099313944668d3b2c68b88549d5.jpg' alt=''/><span>3</span></div>
<div className='top top4'><img src='https://c8.alamy.com/comp/2C45C7P/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese-cuisines-asian-food-vegetarian-meal-2C45C7P.jpg' alt=''/><span>4</span></div>
</div>

<div className='bollyadver'>
Advertisement
</div>

<button className='loadm' onClick={setloadmore}>{loadm === false ? "Load More" : "Load Less"}</button>

    </>
  )
}
export default Food