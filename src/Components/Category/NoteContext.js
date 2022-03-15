import React, { useState, createContext } from "react";
// import Home from './Home';


export const NoteContext = createContext();

export const DataProvider = (props) => {


    const [data, setData] = useState([
        {
            id: 1,
            title: "A Lioness",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste, eligendi in vero ullam cumque officiis quisquam autem odit explicabo.",
            category: "Bollywood",
            date_of_publish: "jan 12",
            // img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thetrendspotter.net%2Fbeautiful-places-in-the-world-to-visit%2F&psig=AOvVaw35N1G6t7yf2MNsGq9qMFN9&ust=1642249275153000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjfgd6dsfUCFQAAAAAdAAAAABAD", 
            img: "https://d2r2ijn7njrktv.cloudfront.net/apnlive/uploads/2021/06/02172113/sherni.jpg",
            claps: 100,
        },
        {
            id: 2,
            title: "Salman Khan",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste, eligendi in vero ullam cumque officiis quisquam autem odit explicabo.",
            category: "Bollywood",
            date_of_publish: "13 May 2021",
            img: "https://www.filmibeat.com/ph-big/2021/03/radhe_16158760261.jpg",
            claps: 100,
        },
        {
            id: 3,
            title: "Princess Merida of DunBroch",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste, eligendi in vero ullam cumque officiis quisquam autem odit explicabo.",
            category: "Bollywood",
            date_of_publish: "10 June",
            img: "https://cdn.wallpapersafari.com/92/56/O3IDWP.jpg ",
            claps: 100,
        },
        {
            id: 4,
            title: "Siddharth Anand ",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iste, eligendi in vero ullam cumque officiis quisquam autem odit explicabo.",
            category: "Bollywood",
            date_of_publish: "2 October",
            img: "https://files.oyebesmartest.com/uploads/preview/war-movie-editing-background---picsartbaxnawcndx.jpg",
            claps: 100,
        },
        {
            id: 5,
            title: "5G Technology",
            content: "A speed of 20GBPS downlink and 10 GBPS uplink is expected from it, thus making it around 40 times faster than the current 4G LTE.",
            category: "Technology",
            date_of_publish: "SEPTEMBER 16, 2021",
            // img:"https://d6fiz9tmzg8gn.cloudfront.net/wp-content/uploads/2021/08/new-innovation-in-AI-banner.jpeg", 
            img: "https://s3.studytonight.com/curious/uploads/pictures/1631781640-79542.jpg"
        },
        {
            id: 6,
            title: "Philips Hue lights during the night",
            content: "Jena, Germany   Published on March 2, 2021 Sony, A6500 , My current desk setup with Philips Hue lights during the night.",
            category: "Technology",
            date_of_publish: " March 2, 2021",
            // img:"https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80", 
            img: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI3fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

        },
        {
            id: 7,
            title: "Popularity",
            content: "High Usage - Online training, e-learning, education, academics, scholarship, knowledge, online-education.",
            category: "Technology",
            date_of_publish: "10 June",
            img: "https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 8,
            title: "Coding-programming",
            content: "Kids learning to coding, programming in online IT school. Engineering courses in internet for talented children. Boy studying game development, robotics technology, creations program code on computer.",
            category: "Technology",
            date_of_publish: "10 June",
            img: "https://image.shutterstock.com/image-vector/kids-learning-coding-programming-online-600w-1777292972.jpg",
        },
        {
            id: 9,
            title: "Directed by Alastair Orr",
            content: "Nine high school friends have a five-year reunion camping in a forest. They all have secrets. Their old science teacher straps a time bomb to each of them. Killing another gives one their time. Last one lives.",
            category: "Hollywood",
            date_of_publish: "January 10, 2021",
            img: "https://i.pinimg.com/736x/c4/92/17/c492177b0e60131ac8e612ae218636b4.jpg",
        },
        {
              id: 10,
            title: " 'Spider-Man: No Way Home' ",
            content: "Sin embargo, esto es la película de Spider-Man y la progresión narrativa de ella depende de forma casi exclusiva de sus actos y de las consecuencias de los mismos",
            category: "Hollywood",
            date_of_publish: "16 December",
            img: "https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/spider-man-arriving-early-in-india-5761-20211129130135.jpg",
        },
        {
              id: 11,
            title: "Hollywood Movie Title Series: The Avengers",
            content: "Ten years ago, the Avengers first assembled on movie theater screens around the world. Marvel's The Avengers made $1.5 billion in May of 2012, and whether anyone likes it or not.",
            category: "Hollywood",
            date_of_publish: "January 21",
            img: "https://www.teahub.io/photos/full/256-2561554_hollywood-new-upcoming-movies.jpg",
        },
        {
              id: 12,
            title: "Allu Arjun",
            content: "Pushpa Raj is a coolie who rises in the world of red sandalwood smuggling. Along the way, he doesn’t shy from making an enemy or two. Director - Sukumar’s Pushpa",
            category: "Hollywood",
            date_of_publish: "17 Dec, 2021",
            img: "https://i.pinimg.com/564x/9d/c0/a9/9dc0a948a0ffc73b9711253f3654be55.jpg",
        },
        {
              id: 13,
            title: "Cardiorespiratory",
            // content:"Fitness includes five essential components, flexibility, cardiorespiratory fitness, muscular endurance, muscular strength, and body composition. Fitness is vitally important to health and wellness as well as to the ability to engage in normal activities of daily living (ADLs) without excessive fatigue",
            content: "Cycling in the morning has a multitude of benefits, and can be a great habit that promotes overall health, well-being, and happiness.  Benefits of cycling:- It Burn More Calories, It Reduces Stress",
            category: "Fitness",
            date_of_publish: "jan 22",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kuEv1ffns-zYJGU3TogmsOt415C-wHyu9g&usqp=CAU",
        },
        {
              id: 14,
            title: "Main source of energy.",
            content: " Fruits are naturally sweet to taste, low in calories, fat, sodium and cholesterol. They contain many vitamins and nutrients that would reduce risk of various health related problems. They also contain minerals, vitamins and nutrients that are useful for a healthy life.",
            category: "Fitness",
            date_of_publish: "jan 21",
            img: "https://hdwallsource.com/img/2016/4/fitness-high-resolution-wallpaper-51317-53015-hd-wallpapers.jpg",
        },
        {
              id: 15,
            title: "Importance of Yoga in our Life",
            content: "It brings together physical and mental disciplines to achieve a peaceful body and mind; it helps manage stress and anxiety and keeps you relaxing. It also helps in increasing flexibility, muscle strength and body tone. It improves respiration, energy and vitality.",
            category: "Fitness",
            date_of_publish: "june 21",
            img: "https://www.artofliving.org/sites/www.artofliving.org/files/wysiwyg_imageupload/Yoga-for-Naturally-Glowing-Skin-and-Face%2C.jpg",
        },
        {
              id: 16,
            title: "Source of vitamins and minerals",
            content: "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Eating a diet high in fruits and vegetables can reduce a person's risk of developing heart disease, cancer, inflammation, and diabetes.",
            category: "Fitness",
            date_of_publish: "jan 26",
            // img:"https://thumbs.dreamstime.com/z/invest-your-health-healthy-lifestyle-concept-diet-fitness-get-fit-fitness-equipment-healthy-food-invest-your-158227197.jpg", 
            img: "https://thumbs.dreamstime.com/b/health-food-fitness-concept-fresh-t-vegetables-pulses-herbs-spices-nuts-grains-high-anthocyanins-antioxidants-102707769.jpg"
        },
        {
              id: 17,
            title: "A Bite of Yummy",
            content: "When you eat food with your family and friends, it always tastes better! Everything tastes good when you're hungry. Fresh veggies are one of the healthiest toppings!",
            category: "Food",
            date_of_publish: "Jan 22",
            img: "https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg",
        },
        {
              id: 18,
            title: "A Healthy Breakfast ",
            content: "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice. Dosas are served hot along with chutney by tradition and sambar in recent times.",
            category: "Food",
            date_of_publish: "Jan 22",
            // img:"https://st2.depositphotos.com/44388702/44219/i/1600/depositphotos_442199560-stock-photo-homemade-dosa-dhosa-masala-plain.jpg", 
            img: "https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083?k=20&m=1156896083&s=612x612&w=0&h=_TOEluPtKxmbkt_80JWO2GN0v_w2ZTG0uUaHjk2TSEY=",

        },
        {
              id: 19,
            title: "Malai Kofta",
            content: "Malai kofta is a dish for special occasions. Combine potatoes, vegetables, paneer cheese, heavy cream, and spices, then form the mixture into balls, and stuff them with chopped nuts and raisins. Finish by deep-frying and serving in a succulent sauce.",
            category: "Food",
            date_of_publish: "Jan 22",
            img: "https://www.thespruceeats.com/thmb/7MY7RBsszlbq1dibyWdKC1YUk6Q=/566x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/malai-kofta-vege-balls-in-a-thick-sauce-1957964_hero-01-474bc099313944668d3b2c68b88549d5.jpg",
        },
        {
              id: 20,
            title: "North-East-Indian style momos",
            content: "Momo is a type of steamed dumpling with some form of filling.  Momo has become a traditional delicacy in Nepal, Tibet, as well as among Nepalese and Tibetan communities in Bhutan, as well as people of the Indian regions. Momo is found in the cuisines of Nepal and Tibet.",
            category: "Food",
            date_of_publish: "Jan 22",
            // img: "https://ifreezefood.com/wp-content/uploads/2020/10/Veg-1.jpg",
            img:"https://c8.alamy.com/comp/2C45C7P/veg-momos-on-black-slate-table-top-momos-is-the-popular-dish-of-indian-tibetan-chinese-cuisines-asian-food-vegetarian-meal-2C45C7P.jpg"
        },
        {
            id: 21,
            title: "",
            content: ".",
            category: "",
            date_of_publish: "",
            img: "https://i.pinimg.com/564x/9d/c0/a9/9dc0a948a0ffc73b9711253f3654be55.jpg",
        },
    ]);

    // const [allatest, setallatest] =useState([
    //     {
    //         id:10,
    //         title:"",
    //         category:"Home",
    //         "date of publish":"jan 12", 
    //         img:"https://news-decoder.com/wp-content/uploads/2021/11/greenland3-scaled.jpg"

    //     }
    // ])
    return (
        <NoteContext.Provider value={[data, setData]}>
            {props.children}
        </NoteContext.Provider>
    )
}

// return (
//     <NoteContext.Provider value={[data,setData, allatest, setallatest ]}>
//         {props.children}
//     </NoteContext.Provider>
// )
// }