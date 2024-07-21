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
   const GoogleScriptLink = 'https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec?action=getSheet';

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