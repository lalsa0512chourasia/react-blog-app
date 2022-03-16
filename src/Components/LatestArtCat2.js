import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Components/Category/NoteContext'
// import { Link } from 'react-router-dom';

const LatestArtCat2 = () => {
    const [data] = useContext(NoteContext);
    // console.log(data[12])
    return (
        <div>
             <div className='cat2box_2'>
            <img src={data[12].img} alt='My Awesome '/>
            <div className='cat2box_2p'>
                <h3>{data[12].title}</h3>

                <span>{data[12].content}</span><br />

                <strong>{data[12].category}</strong>/ {data[12].date_of_publish}

              </div>
              {/* <hr /> */}

            </div>
        </div>
    )
}

export default LatestArtCat2
