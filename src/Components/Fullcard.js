import React, { useContext } from 'react';
import { NoteContext } from './Category/NoteContext'
import { useParams } from 'react-router-dom';
import LatestArtAll from './LatestArtAll';
// import { Link } from 'react-router-dom';

const Fullcard = () => {
    const [data] = useContext(NoteContext);

    const { category } = useParams();
    const { id } = useParams();
    console.log(category);
    console.log(id);
    return (

        <>
            <div className='categorytop'>
                {data.filter((value) => (value.id === id && value.category === category)).map((val) => (
                    <div className='article' key={id}>
                        <img src={val.img} alt="My Awesome" />
                        <p>{val.title}</p>
                        <p>{val.category}</p>
                        <p>{val.content}</p><br />
                        {/* <i className="fa fa-circle-thin fa-stack-2x"></i> */}
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                        <i className="fa-brands fa-youtube-square"></i>
                        <i className="fa-solid fa-hands-clapping"></i>
                        {/* <i className="fa-solid fa-share-nodes"></i> */}
                        <i className="fa-light fa-square-share-nodes"></i>
                    </div>

                ))}
            </div>





            <LatestArtAll />

        </>

    )
};

export default Fullcard;
