import React from 'react';
import { useContext } from 'react'
import { NoteContext } from './NoteContext'

const Hollywood = () => {
  const [data] = useContext(NoteContext);
  console.log(data);
  return (
    <>
      <h1>Hollywood</h1>
      {data.filter((x) => x.id > 8 && x.id < 13).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
              <img src={curElem.img} alt="My Awesome" />
              <div className="bollyp">
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong>/ {curElem.date_of_publish}

              </div>
              <hr />
            </div>
          </div>



        )
      })}


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


    </>
  )
}
export default Hollywood