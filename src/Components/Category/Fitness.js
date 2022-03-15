import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { NoteContext } from './NoteContext'

const Fitness = () => {
  const [data] = useContext(NoteContext);
  console.log(data);
  return (
    <>
      <h1>Fitness</h1>
      {data.filter((x) => x.id > 12 && x.id < 17).map((curElem) => {
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


    </>
  )
}
export default Fitness