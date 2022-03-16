import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Components/Category/NoteContext'
import { Link } from 'react-router-dom';

const LatestArtCat3 = () => {
    const [data] = useContext(NoteContext);
    return (
        <div>
            <div className='cat3box_3'>
                <Link to='/bolly/Bollywood/1'><img src={data[0].img} alt='My Awesome' /></Link>
                {/* https://cdn.wallpapersafari.com/92/56/O3IDWP.jpg */}
                <div className='cat3box_3p'>
                    <Link to='/bolly/Bollywood/1'><h3>{data[0].title}</h3>

                        <span>{data[0].content}</span><br />

                        <strong>{data[0].category}</strong>/ {data[0].date_of_publish}
                    </Link>
                </div>
                {/* <hr /> */}



            </div>
        </div>
    )
}

export default LatestArtCat3
