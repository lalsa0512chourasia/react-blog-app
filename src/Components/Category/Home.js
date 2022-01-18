// import React from 'react';
// import React, { useContext, useEffect} from 'react'
// import { useContext } from 'react/cjs/react.development'
// import {NoteContext} from './NoteContext'
import FeaturedArt from '../FeaturedArt';
import LatestArtAll from '../LatestArtAll';

const Home = () => {
// const [data, setData]  = useContext(NoteContext);

// useEffect(() => {
//     setData()
   
// }, [])    [1:13 in hoc wala video]

// const hndl=()=>{
//        console.log(data[0].title);
// }


    return (
        // <>
        // <div className='featured_art1'>
        
        // </div>
        // <div className='featured_art2'>
        //     <div className='small_1'>name={data[0].title}</div>
        //     <div className='small_2' onClick={hndl}></div>
        // </div>
        // </>
        <>
        <FeaturedArt/>
        <LatestArtAll/>
        <LatestArtCat1/>
        
        </>
    )
}

export default Home
