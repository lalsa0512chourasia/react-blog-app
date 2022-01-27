import React, { useState } from 'react';
import { useContext } from 'react/cjs/react.development'
import { NoteContext } from './NoteContext'

const Bollywood = () => {
  const [data] = useContext(NoteContext);

  const [visible, setvisible] = useState(4);
  console.log(data);

  const moreitems = () => {
    console.log(visible);
    setvisible((prevValue) => prevValue + 4)
  }
 
  return (



    <>
      <h1>Bollywood</h1>
      {data.slice(0, visible).filter((x) => x.id > 0 && x.id < 5).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
              <img src={curElem.img} alt="My Awesome" />
              <p>
                <h4>{curElem.title}</h4>

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
          <img src='https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2021/06/02172113/sherni.jpg' alt='' />
          <span>1</span>
        </div>
        <div className='top top2'>
          <img src='https://www.filmibeat.com/ph-big/2021/03/radhe_16158760261.jpg' alt=''/>
        </div>
        <div className='top top3'><img src='https://cdn.wallpapersafari.com/92/56/O3IDWP.jpg' alt=''/></div>
        <div className='top top4'><img src='https://files.oyebesmartest.com/uploads/preview/war-movie-editing-background---picsartbaxnawcndx.jpg' alt=''/></div>
      </div>

      <div className='bollyadver'>
        Advertisement
      </div>


    </>
  )
}
export default Bollywood