import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { useEffect, useState } from "react";
import SheetCard from "./SheetCard";

const Sheets = (props) => {
    const [sheetData, setData] = useState();

    /*SheetDB link, to get this link log into SheetDB.io
     enter the spreadsheet link
     and paste the API link in the constant below
    */
   const GoogleScriptLink = 'https://script.google.com/macros/s/AKfycbzuauULK8Lpymq4JtiFlDA92HWM-0ODF_TtonYiGQAivyIO-2kAblgZYL9Gs5W5Ldqz4A/exec?action=getSheet';

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
        <>
  {(sheetData)?(sheetData.map((e)=>{return(<SheetCard key = {e.key} name = {e.name} link = {e.link} status = {e.status}/>)})): "Loading"}
        </>
    )
}

export default Sheets;