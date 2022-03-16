import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Components/Category/NoteContext'
import { Link } from 'react-router-dom';

const LatestArtCat1 = () => {
    const [data] = useContext(NoteContext);
    // console.log(data[6])
    return (
        <div className='maincat1'>
            <h2>Latest Article</h2>
            <div className='cat1box_1'>
                {/* <div><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiatvnews.com%2Fentertainment%2Fbollywood%2Fajay-devgn-kajol-starrer-tanhaji-gets-tax-exemption-in-up-579339&psig=AOvVaw2lHdJVwVPROZroB2EnfuEd&ust=1642611015424000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCJ9Zvhu_UCFQAAAAAdAAAAABAP'/></div> */}
                <Link to='/bolly/Technology/7'> <img src={data[6].img} alt='My Awesome' /> </Link>
                <div className='cat1box_1p'>
                    <Link to='/bolly/Technology/7'>
                        <h3>{data[6].title}</h3>
                        <span>{data[6].content}</span><br />
                        <strong>{data[6].category}</strong>/ {data[6].date_of_publish}
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default LatestArtCat1
