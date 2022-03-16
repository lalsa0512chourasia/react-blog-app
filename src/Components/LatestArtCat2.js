import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Components/Category/NoteContext'
import { Link } from 'react-router-dom';

const LatestArtCat2 = () => {
    const [data] = useContext(NoteContext);
    // console.log(data[12])
    return (
        <div>

            <div className='cat2box_2'>
                <Link to='/bolly/Fitness/13'> <img src={data[12].img} alt='My Awesome'/>  </Link>
                <div className='cat2box_2p'>
                    <Link to='/bolly/Fitness/13'>
                        <h3>{data[12].title}</h3>

                        <span>{data[12].content}</span><br />

                        <strong>{data[12].category}</strong>/ {data[12].date_of_publish}
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default LatestArtCat2
