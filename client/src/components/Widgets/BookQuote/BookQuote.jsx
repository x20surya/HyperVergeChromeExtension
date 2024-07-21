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
  "https://script.google.com/macros/s/AKfycbwYR10OcabZfe0r8GT04MRWegFl-34VXYZJepka95oHEPn6WfN109emSv0cTQD4epzoIA/exec?action=getQuote";

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
