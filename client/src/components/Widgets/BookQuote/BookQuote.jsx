import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

function BookQuote() {

const [data, setData] = useState();

  const GoogleScriptLink =
  "https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec?action=getQuote";

const getData = () => {
  fetch(GoogleScriptLink)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data);
    });
};


useEffect(() => {
  getData();
}, []);


  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Book Quote</CardTitle>
        <CardDescription>get a random quote from a book</CardDescription>
      </CardHeader>
      <CardContent>
        {(data)?<>
        <p>Book : {data[0].book}</p>
        <p>Quote: {data[0].quotw}</p>
        <p>Author : {data[0].author}</p></>
         : ""}
      </CardContent>
    </Card>
  );
}

export default BookQuote;
