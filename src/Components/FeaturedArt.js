import React from 'react'
import { useContext } from 'react/cjs/react.development'
import {NoteContext} from '../Components/Category/NoteContext'

const FeaturedArt = () => {
const [data, setData] = useContext(NoteContext);

// const hndl=()=>{
//            console.log(data[0].title);
         
//     }
    return (
        <div>
            <>
        <div className='featured_art1'>
        
        </div>
        <div className='featured_art2'>
            <div className='small_1'>Title: {data[0].title}</div>
            <div className='small_2'></div>
            {/* <div className='small_2' onClick={hndl}></div> */}
        </div>
        </>
        </div>
    )
}

export default FeaturedArt
