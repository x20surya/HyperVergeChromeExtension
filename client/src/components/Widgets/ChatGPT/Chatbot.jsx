import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import axios from "axios";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BotIcon } from "lucide-react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { role: "user", text: input }]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: `User: ${input}\nChatGPT:`,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer YOUR_API_KEY",
          },
        }
      );

      const botResponse = response.data.choices[0].text;

      setMessages([...messages, { role: "bot", text: botResponse }]);

      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Use a valid API key in google sheets")
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>ChatBot</CardTitle>
        <CardDescription>powered by chatGPT</CardDescription>
      </CardHeader>

      <CardContent>
        {messages.map((message, index) => (
          <div key={index} className="">
            {message.role === "bot" ? (
              <div className=" mb-4">
                <BotIcon /> {message.text}
              </div>
            ) : (
              <div className="">{message.text}</div>
            )}
          </div>
        ))}
        <div>{error ? error : <></>}</div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Input
          id="message"
          placeholder="Message ChatGPT"
          value={input}
          onChange={handleInputChange}
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </CardFooter>
    </Card>
  );
}

export default Chatbot;
