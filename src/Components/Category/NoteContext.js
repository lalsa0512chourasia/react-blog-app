import React, { useState,  createContext }  from "react";
// import Home from './Home';


export const NoteContext = createContext();

export const DataProvider = (props) => {


const [data, setData] = useState([
    {
        "id":101,
        "title":"food",
        "category":"Home",
        "date of publish":"jan 12", 
        "img":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thetrendspotter.net%2Fbeautiful-places-in-the-world-to-visit%2F&psig=AOvVaw35N1G6t7yf2MNsGq9qMFN9&ust=1642249275153000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjfgd6dsfUCFQAAAAAdAAAAABAD", 
        "claps":100,                              
    },
    {
        "id":102,
        "title":"food",
        "category":"Home",
        "date of publish":"jan 12", 
        "img":"", 
        "claps":100,                              
    },
    {
        "id":103,
        "title":"food",
        "category":"Home",
        "date of publish":"jan 12", 
        "img":"", 
        "claps":100,                              
    },
    {
        "id":104,
        "title":"food",
        "category":"Home",
        "date of publish":"jan 12", 
        "img":"", 
        "claps":100,                              
    }
]);

// const [allatest, setallatest] =useState([
//     {
//         "id":10,
//         "title":"",
//         "category":"Home",
//         "date of publish":"jan 12", 
//         "img":"https://news-decoder.com/wp-content/uploads/2021/11/greenland3-scaled.jpg"
                                     
//     }
// ])
return (
    <NoteContext.Provider value={[data,setData]}>
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