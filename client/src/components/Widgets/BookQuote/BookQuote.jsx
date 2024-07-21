import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Label } from "@radix-ui/react-label";

function BookQuote() {

  const [book, setBook] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    axios
      .get("https://recite.onrender.com/random/quote-from-db") // Replace with your API endpoint
      .then((response) => {
        const data = response.data;
        setBook(data.book);
        setQuote(data.quote);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.log("error fetching book quotes");
      });
  }, []);

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Book Quote</CardTitle>
        <CardDescription>get a random quote from a book</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Book : {book}</p>
        <p>Quote: {quote}</p>
        <p>Author : {author}</p>
      </CardContent>
    </Card>
  );
}

export default BookQuote;
