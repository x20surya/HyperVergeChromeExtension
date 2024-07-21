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
    const [currentSheet, setCurrentSheet] = useState();

    const updateSheet = (e) => {
        setCurrentSheet(e)
    }

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
        setCurrentSheet(data[0])
    });
    }
    useEffect(()=>{
        getData();
    },[])
    return(
        <div >   
            <div className=" flex justify-end pr-4 mt-4 w-[100%]">
            {(sheetData)?(sheetData.map((e)=>{return(
                
                <button className=" pl-4 pb-2" onClick={()=>{updateSheet(e)}}>{e.name}</button>
                
                )})
                ): "Loading"}
            </div>
            {(currentSheet)? <SheetCard key = {currentSheet.key} name = {currentSheet.name} link = {currentSheet.link} status = {currentSheet.status}/>: "Loading Sheets..."}
            
        </div>
    )
}

export default Sheets;