import React, { useState, useEffect } from 'react';
// import { useContext,useEffect } from 'react'
// import { NoteContext } from './NoteContext'
import { Link } from 'react-router-dom';
import axios from 'axios'


const Bollywood = () => {
  // const [data] = useContext(NoteContext);
  const [loadm, setloadm] = useState(false);  //load more data 

  const [load, setload] = useState(false)
  const [blog, setBlog]= useState([]);

  const setloadmore = () => {

    setloadm(!loadm)
    
  }



  const getblogs = () => {
    // axios.get("http://localhost:3001/api/v1/category")
    axios.get(" https://react-blog-backen.herokuapp.com/api/v1/category")
        .then((response) => {
            console.log(response);
            setBlog(response.data)
            setload(true)
        })
}
useEffect(() => {
    getblogs()
}, [])






  // console.log(data);

  // const moreitems = () => {
  //   console.log(visible);
  // // setvisible (!visible)
  //   setvisible((prevValue) => prevValue + 4)
  // }
  // .slice(0, visible)

  return (

    <>
      <h1>Bollywood</h1>


      {loadm ?
        <>

          {blog.filter((x) => x.id > 0 && x.id < 5).map((curElem) => {
            return (
              <div className="bollymain" key={curElem.id}>
                <div className="bolly">
                  <Link to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" /></Link>
                    <div className="bollyp">
                    <Link to={`/bolly/${curElem.category}/${curElem.id}`}>
                      <h4>{curElem.title}</h4>

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
            {blog.filter((x) => x.id > 0 && x.id < 5).map((curElem) => {
              return (
                <div className="bollymain" key={curElem.id}>
                  <div className="bolly">
                    <Link to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" />
                      <div className="bollyp">
                        <h4>{curElem.title}</h4>

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
          {blog.filter((x) => x.id > 0 && x.id < 5).map((curElem) => {
            return (
              <div className="bollymain" key={curElem.id}>
                <div className="bolly">
                  <Link to={`/bolly/${curElem.category}/${curElem.id}`}> <img src={curElem.img} alt="My Awesome" />
                    <div className="bollyp">
                      <h4>{curElem.title}</h4>

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
          <img src='https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2021/06/02172113/sherni.jpg' alt='' />
          <span>1</span>
        </div>
        <div className='top top2'>
          <img src='https://www.filmibeat.com/ph-big/2021/03/radhe_16158760261.jpg' alt='' />
          <span>2</span>

        </div>
        <div className='top top3'><img src='https://cdn.wallpapersafari.com/92/56/O3IDWP.jpg' alt='' />  <span>3</span></div>
        <div className='top top4'><img src='https://files.oyebesmartest.com/uploads/preview/war-movie-editing-background---picsartbaxnawcndx.jpg' alt='' />  <span>4</span></div>
      </div>

      <div className='bollyadver'>
        Advertisement
      </div>

      {/* <button className='loadm' onClick={() => setload(!load)}>Load More</button> */}
      <button className='loadm' onClick={setloadmore}>{loadm === false ? "Load More" : "Load Less"}</button>

    </>
  )
}
export default Bollywood