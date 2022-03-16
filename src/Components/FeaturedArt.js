import React from 'react'
import { useContext } from 'react'
import {NoteContext} from '../Components/Category/NoteContext'
import { Link } from 'react-router-dom';

const FeaturedArt = () => {
// const [data, setData] = useContext(NoteContext);
const [data] = useContext(NoteContext);
console.log(data[20].img);

// const hndl=()=>{
//            console.log(data[0].title);
         
//     }
    return (
        <div>
            <>
        <div className='featured_art1'>
          <Link to='/bolly/bollywood/21'> <img src= {data[20].img} alt='my'/></Link>
        </div>
        <div className='featured_art2'>
            <div className='small_1'> <Link to='/bolly/bollywood/22'> <img src= {data[21].img} alt='my'/></Link></div>
            <div className='small_2'> <Link to='/bolly/bollywood/23'> <img src= {data[22].img} alt='my'/></Link></div>
            {/* <div className='small_2' onClick={hndl}></div> */}
        </div>
        </>
        </div>
    )
}

export default FeaturedArt
