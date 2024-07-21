import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useEffect, useState } from "react";
import FormCard from "./FormCard";

const Form = (props) => {
    const [formData, setData] = useState();

    /*SheetDB link, to get this link log into SheetDB.io
     enter the spreadsheet link
     and paste the API link in the constant below
    */
   const GoogleScriptLink = 'https://script.google.com/macros/s/AKfycbwAadRF6E7X4qkszkpQJWfyP_jXMka81pa3LcDcv4IGZa2hF7Z4T5f3wg0icwVB77tx2A/exec?action=getForm';

    const getData = () => {
        fetch(GoogleScriptLink)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
    });
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
  {(formData)?(formData.map((e)=>{return(<FormCard key = {e.key} name = {e.name} link = {e.link} status = {e.status}/>)})): "Loading"}
        </div>
    )
}

export default Form;