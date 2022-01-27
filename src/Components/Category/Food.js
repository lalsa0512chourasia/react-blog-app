import React from 'react';
import { useContext } from 'react/cjs/react.development'
import { NoteContext } from './NoteContext'

const Food = () => {
  const [data] = useContext(NoteContext);
  console.log(data);
  return (
    <>
      <h1>Food</h1>
      {data.filter((x) => x.id > 16 && x.id < 21).map((curElem) => {
        return (
          <div className="bollymain" key={curElem.id}>
            <div className="bolly">
              <img src={curElem.img} alt="My Awesome" />
              <p>
                <h3>{curElem.title}</h3>

                <span>{curElem.content}</span><br />

                <strong>{curElem.category}</strong>/ {curElem.date_of_publish}

              </p>
              <hr />
            </div>



          </div>



        )
      })}


<div className='bollyrightfloat2'>

<h1>Top Post</h1>
<div className='top top1'>
  <img src='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg' alt='' />
  <span>1</span>
</div>
<div className='top top2'>
  <img src='https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083?k=20&m=1156896083&s=612x612&w=0&h=_TOEluPtKxmbkt_80JWO2GN0v_w2ZTG0uUaHjk2TSEY=' alt=''/>
</div>
<div className='top top3'><img src='https://www.thespruceeats.com/thmb/7MY7RBsszlbq1dibyWdKC1YUk6Q=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malai-kofta-vege-balls-in-a-thick-sauce-1957964_hero-01-474bc099313944668d3b2c68b88549d5.jpg' alt=''/></div>
<div className='top top4'><img src='https://ifreezefood.com/wp-content/uploads/2020/10/Veg-1.jpg' alt=''/></div>
</div>

<div className='bollyadver'>
Advertisement
</div>


    </>
  )
}
export default Food