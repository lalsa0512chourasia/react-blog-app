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
                {/* {data.filter((value) => (value.id == id && value.category == category)).map((val) => ( */}   
                {data.filter((value) => (value.id == id )).map((val) => (
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

            {/* <LatestArtAll /> */}
            <div className='the_latest'>

<p className='morefrom'>More From The Siren</p>
{/* <h2>The Latest</h2> */}
<div className='main_ArtAll'>
    <div className='box_1' >
        <p className='btm'>Related reads</p>
        {/* <img src='{allatest[4].img}'/> */}
        <img src={data[23].img} alt='My Awesome' />
        <div className='box_1cont'>
            {/* <h3> We saw ice caps, icebergs and climate change in Greenland </h3> */}
           
            <h3>{data[23].title}  </h3>
            <p>{data[23].content}  </p>
            <p><strong>{data[23].category}</strong><span>/ {data[23].date_of_publish} </span></p>
            <img src='https://toppng.com//public/uploads/preview/woman-profile-icon-woman-name-ico-11563174580b4eksfnmku.png' alt='my awesome' style={{ height: '70px', width: '70px',  marginTop: '20px' }} />
            <p className='parapr'>Written By <br/> Lalsa Chourasia <br/> Feb 22 2022</p>

        </div>
    </div>

    <div className='box_2'>
    <p className='btm'>Related reads</p>
    <img src={data[24].img} alt='My Awesome' />
        <div className='box_2cont'>
            <h3>{data[24].title}</h3>
            {/* <h3> New Delhi: People on raft, perform Yoga on International Day of Yoga, at Yamuna Ghat in New Delhi.</h3> */}
            <p>{data[24].content}</p>
            <p><strong>{data[24].category}</strong><span>/ {data[24].date_of_publish}</span></p>
            <img src='https://toppng.com//public/uploads/preview/woman-profile-icon-woman-name-ico-11563174580b4eksfnmku.png' alt='my awesome' style={{ height: '70px', width: '70px',  marginTop: '20px' }} />
            <p className='parapr'>Written By <br/> Lalsa Chourasia <br/> Feb 22 2022</p>

        </div>
    </div>
    <div className='box_3'>
    <p className='btm'>Related reads</p>
     <img src='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg' alt='My Awesome' />
        <div className='box_3cont'>
            <h3>{data[16].title}</h3>
            <p>{data[16].content}</p>
            <p><strong>{data[16].category}</strong><span>/ {data[16].date_of_publish}</span></p>
            <img src='https://toppng.com//public/uploads/preview/woman-profile-icon-woman-name-ico-11563174580b4eksfnmku.png' alt='my awesome' style={{ height: '70px', width: '70px',  marginTop: '20px' }} />
            <p className='parapr'>Written By <br/> Lalsa Chourasia <br/> Feb 22 2022</p>

        </div>
    </div>
</div>

</div>

        </>
    )
};
export default Fullcard;
