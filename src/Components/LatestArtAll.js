import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../Components/Category/NoteContext'
import { Link } from 'react-router-dom'


const LatestArtAll = () => {
    const [data] = useContext(NoteContext);
    // const [load, setload] = useState(false)

    // const setloadmore = () => {

    //   setload(!load)
    //   // setName("Load less")
    // }
    // const hndle=()=>{
    //     console.log(allatest[0].id);
    // }
    return (


        <div className='the_latest'>

            <p className='morefrom'>More From The Siren</p>
            <h2>The Latest</h2>
            <div className='main_ArtAll'>
                <div className='box_1' >
                    {/* <img src='{allatest[4].img}'/> */}
                    <Link to='/bolly/bollywood/24'> <img src={data[23].img} alt='My Awesome' /></Link>
                    <div className='box_1cont'>
                        {/* <h3> We saw ice caps, icebergs and climate change in Greenland </h3> */}
                        <Link to='/bolly/bollywood/24'>
                        <h3>{data[23].title}  </h3>
                        <p>{data[23].content}  </p>
                        <p><strong>{data[23].category}</strong><span>/ {data[23].date_of_publish} </span></p></Link>
                    </div>
                </div>

                <div className='box_2'>
                <Link to='/bolly/Fitness/25'><img src={data[24].img} alt='My Awesome' /></Link>
                    <div className='box_2cont'>
                    <Link to='/bolly/Fitness/25'>
                        <h3>{data[24].title}</h3>
                        {/* <h3> New Delhi: People on raft, perform Yoga on International Day of Yoga, at Yamuna Ghat in New Delhi.</h3> */}
                        <p>{data[24].content}</p>
                        <p><strong>{data[24].category}</strong><span>/ {data[24].date_of_publish}</span></p></Link>
                    </div>
                </div>
                <div className='box_3'>
                <Link to='/bolly/Food/17'> <img src='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg' alt='My Awesome' /></Link>
                    <div className='box_3cont'>
                    <Link to='/bolly/Food/17'>
                        <h3>{data[16].title}</h3>
                        <p>{data[16].content}</p>
                        <p><strong>{data[16].category}</strong><span>/ {data[16].date_of_publish}</span></p></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LatestArtAll

