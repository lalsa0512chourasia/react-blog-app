import React, { useEffect, useState } from 'react';
// import React,{useContext} from 'react';
// import { NoteContext } from './NoteContext'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Fitness = () => {
  // const [data] = useContext(NoteContext);
  // console.log(data);
  const [loadm, setloadm] = useState(false)

  const [load, setload] = useState(false)
  const [blog, setBlog]= useState([]);

  const setloadmore = () => {
    setloadm(!loadm)
  }
  

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


  return (
    <>
      <h1>Fitness</h1>
      {loadm ? 
      <>
      {blog.filter((x) => x.id > 12 && x.id < 17).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
             <Link  to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" /></Link>
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
      {blog.filter((x) => x.id > 12 && x.id < 17).map((curElem) => {
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
       {blog.filter((x) => x.id > 12 && x.id < 17).map((curElem) => {
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
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kuEv1ffns-zYJGU3TogmsOt415C-wHyu9g&usqp=CAU' alt='' />
  <span>1</span>
</div>
<div className='top top2'>
  <img src='https://hdwallsource.com/img/2016/4/fitness-high-resolution-wallpaper-51317-53015-hd-wallpapers.jpg' alt=''/><span>2</span>
</div>
<div className='top top3'><img src='https://www.artofliving.org/sites/www.artofliving.org/files/wysiwyg_imageupload/Yoga-for-Naturally-Glowing-Skin-and-Face%2C.jpg' alt=''/><span>3</span></div>
<div className='top top4'><img src='https://thumbs.dreamstime.com/b/health-food-fitness-concept-fresh-t-vegetables-pulses-herbs-spices-nuts-grains-high-anthocyanins-antioxidants-102707769.jpg' alt=''/><span>4</span></div>
</div>

<div className='bollyadver'>
Advertisement
</div>

<button className='loadm' onClick={setloadmore}>{loadm === false ? "Load More" : "Load Less"}</button>

    </>
  )
}
export default Fitness