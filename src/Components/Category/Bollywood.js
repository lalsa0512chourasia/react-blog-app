import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { NoteContext } from './NoteContext'

const Bollywood = () => {
  const [data] = useContext(NoteContext);
  console.log(data);
  return (
    <>
      <h1>Bollywood</h1>
      {data.filter((x) => x.id > 0 && x.id < 5).map((curElem) => {
        return (
          <div className="bollymain">
            <div className="bolly">
              <img src={curElem.img} alt="My Awesome" />
              <p>
                <h4>{curElem.title}</h4>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong> /{curElem.date_of_publish}

              </p>
              <hr />
            </div>



          </div>



        )
      })}


      <div className='bollyrightfloat2'>

        <h1>Top Post</h1>
        <div className='top top1'>
          <img src='' alt='' />
        </div>
        <div className='top top2'></div>
        <div className='top top3'></div>
        <div className='top top4'></div>
      </div>

      <div className='bollyadver'>
        Advertisement
      </div>


    </>
  )
}
export default Bollywood