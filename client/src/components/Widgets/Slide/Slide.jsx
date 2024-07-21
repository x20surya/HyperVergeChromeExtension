import { useEffect, useState } from "react";
import SlideCard from "./SlideCard";

const Slide = (props) => {
    const [slideData, setData] = useState();
    const [currentSlide, setCurrentSlide] = useState();

    const updateSlide = (e) => {
        setCurrentSlide(e)
    }

    /*SheetDB link, to get this link log into SheetDB.io
     enter the spreadsheet link
     and paste the API link in the constant below
    */
   const GoogleScriptLink = 'https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec?action=getSlide';

    const getData = () => {
        fetch(GoogleScriptLink)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCurrentSlide(data[0])
    });
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div >   
            <div className=" flex justify-end pr-4 mt-4 w-[100%]">
            {(slideData)?(slideData.map((e)=>{return(
                
                <button className=" pl-4 pb-2" onClick={()=>{updateSlide(e)}}>{e.name}</button>
                
                )})
                ): "Loading"}
            </div>
            {(currentSlide)? <SlideCard key = {currentSlide.key} name = {currentSlide.name} link = {currentSlide.link}/>: "Loading Slides..."}
            
        </div>
    )
}

export default Slide;