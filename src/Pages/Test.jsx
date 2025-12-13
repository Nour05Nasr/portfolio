import React, { Component, useEffect } from 'react';
import { supabase } from '../Supabase';
import { useState } from 'react';

const Test = () => {
const [projects, setProjects] = useState([{
    id:"",
    Title: "",
    Cover_img: "",
    Date: "",       

}]);

    useEffect(() => {
        async function CallGetAPI(){
            const res = await supabase.from("Projects").select("*");
            setProjects(res.data);
            // console.log(res.data[0].Title);
            // console.log(res.data[0].Cover_img);
            // console.log(res.data[0].Date);
        }
        CallGetAPI();
    },[]);
    return ( <>
    <h1 className='cards_h'>{projects[0].Title}</h1>
    <h1 className='cards_h'>{projects[0].Date}</h1>

    </> );
}
 
export default Test;