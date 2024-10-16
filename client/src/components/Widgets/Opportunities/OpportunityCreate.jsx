import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { scriptLink } from "@/constants/credentials";



const OpportunityCreate = (props) => {
  const { setCreate, getData } = props;
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Opp Uploaded");
    console.log(name);
    console.log(des);
    const date = new Date();
    const time = date.getTime();
    const obj = {
      title: name,
      description: des,
      time,
    };
    if (name === "" || des === "") {
      return;
    } else {
      fetch(
        scriptLink + "?action=addOpp",
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      ).then(() => {
        console.log("added new Opp");
      });
      setCreate(true);
      getData();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col h-[70%] justify-between p-5 items-center">
        <Input
          placeholder="Title"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <Textarea
            placeholder="Description"
            onChange={(e)=>{
                setDes(e.target.value)
            }}
            value={des}
        />
        <Button onClick={handleSubmit}>Post Opportunity</Button>
        <Button variant="outline" onClick={()=>{setCreate(true)}}>Back</Button>
      </form>
    </>
  );
};
export default OpportunityCreate;
