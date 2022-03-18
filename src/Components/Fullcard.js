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
                {data.filter((value) => (value.id == id && value.category == category)).map((val) => (
                    <div className='article' key={id}>
                        <img src={val.img} alt="My Awesome" />
                        <p>{val.title}</p>
                        <p>{val.category}</p>
                        <p>{val.content}</p><br />
                        {/* <i className="fa fa-circle-thin fa-stack-2x"></i> */}

                        <div className='clap'>
                        <i className="fa-solid fa-hands-clapping"><span>9 5  k</span></i>
                        </div> <hr/>
                                               {/* <i className="fa-solid fa-share-nodes"></i> */}
                        {/* <i className="fa-light fa-square-share-nodes"></i> */}
                        <img src='https://toppng.com//public/uploads/preview/woman-profile-icon-woman-name-ico-11563174580b4eksfnmku.png' alt='my awesome' style={{ height: '70px', width: '70px',  marginTop: '20px' }} />
                        <p className='parapr'>Written By <br/> Lalsa Chourasia <br/> Feb 22 2022</p>
                        <div className='social'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter-square"></i>
                            <i className="fa-brands fa-youtube-square"></i>
                        </div>
                    </div>

                ))}
            </div>

            <LatestArtAll />

        </>

    )
};

export default Fullcard;
