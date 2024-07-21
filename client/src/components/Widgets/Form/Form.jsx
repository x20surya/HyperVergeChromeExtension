import { useEffect, useState } from "react";
import FormCard from "./FormCard";

const Form = (props) => {
    const [formData, setData] = useState();
    const [currentForm, setCurrentForm] = useState();

    const updateForm = (e) => {
        setCurrentForm(e)
    }

    /*SheetDB link, to get this link log into SheetDB.io
     enter the spreadsheet link
     and paste the API link in the constant below
    */
   const GoogleScriptLink = 'https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec?action=getForm';

    const getData = () => {
        fetch(GoogleScriptLink)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCurrentForm(data[0])
    });
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div >   
            <div className=" flex justify-end pr-4 mt-4 w-[100%]">
            {(formData)?(formData.map((e)=>{return(
                
                <button className=" pl-4 pb-2" onClick={()=>{updateForm(e)}}>{e.name}</button>
                
                )})
                ): "Loading"}
            </div>
            {(currentForm)? <FormCard key = {currentForm.key} name = {currentForm.name} link = {currentForm.link} status = {currentForm.status}/>: "Loading Forms..."}
            
        </div>
    )
}

export default Form;