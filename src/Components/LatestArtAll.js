import React from 'react'
// import { useContext } from 'react/cjs/react.development'
// import { NoteContext } from '../Components/Category/NoteContext'


const LatestArtAll = () => {
    // const [allatest, setallatest] = useContext(NoteContext);
    // const hndle=()=>{
    //     console.log(allatest[0].id);
    // }
    return (
        <div className='the_latest'>
            <h2>The Latest</h2>
            <div className='main_ArtAll'>
                <div className='box_1' >
                    {/* <img src='{allatest[4].img}'/> */}
                    <img src='https://news-decoder.com/wp-content/uploads/2021/11/greenland3-scaled.jpg' />
                    <div className='box_1cont'>
                        {/* <h3> We saw ice caps, icebergs and climate change in Greenland </h3> */}
                        <h3> Climate change in Greenland </h3>
                        <p> Here we are hiking on the ice cap at sunset. Two days before our hike, it rained for the first time in history on the summit of the inland ice,
                            according to the U.S. National Snow and Ice Data Center. Scientists have pointed to climate change as an explanation.</p>
                        <p><strong>Climate</strong><span>/ Jan 22</span></p>
                    </div>
                </div>

                <div className='box_2'>
                    <img src='https://www.financialexpress.com/wp-content/uploads/2021/06/10-2.jpg' />
                    <div className='box_2cont'>
                        <h3> Yoga on International Day of Yoga</h3>
                        {/* <h3> New Delhi: People on raft, perform Yoga on International Day of Yoga, at Yamuna Ghat in New Delhi.</h3> */}
                        <p>Yoga is the most favourable method to connect to the nature by balancing the mind-body connection. It is a type of exercise which performed through the balanced body and need to get control over diet, breathing, and physical postures. It is associated with the meditation of body and mind through the relaxation of body.</p>
                    </div>
                </div>
                <div className='box_3'>
                    <img src='https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg' />
                    <div className='box_3cont'>
                        <h3>A Bite of Yummy</h3>
                        <p>When you eat food with your family and friends, it always tastes better!
                            Everything tastes good when you're hungry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestArtAll

