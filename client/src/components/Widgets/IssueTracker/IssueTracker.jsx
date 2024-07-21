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
import { v4 as uuid } from "uuid";

const IssueTracker = (props) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");

  const [isChecking, setIsChecking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    const date = new Date();
    const time =
      date.getHours().toString() +
      "-" +
      date.getMinutes().toString() +
      "-" +
      date.getSeconds().toString() +
      "  " +
      date.getDate().toString() +
      "/" +
      (date.getMonth() + 1).toString() +
      "/" +
      date.getFullYear().toString();
    console.log(time);
    const obj = {
      id,
      title,
      name,
      contactInfo,
      description: des,
      time,
    };
    
    if (name === "" || des === "" || title == "" || contactInfo == "") {
      return;
    } else {
      fetch(
        "https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec?action=addIssue",
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      ).then(() => {
        console.log("added new Opp");
      });
      alert("Issue submitted with IssueID \n" + id);
      setName("");
      setDes("");
      setContactInfo("");
      setTitle("");
    }
  };

  const checkStatus = (e) => {
    e.preventDefault();
    if (id == "") {
      return;
    } else {
      var obj = { key: id };
      fetch(
        "https://script.google.com/macros/s/AKfycbw9B7ehedmN8g_k7dLs-GciaU1tSLhGe3Gta5YP7x5B8HpWLl2eJ9x3r08tAV9Vxb60pA/exec?action=checkIssueStatus",
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      ).then(response => response.text())
      .then(data => 
        { console.log(data)
         setStatus(data)})
    }
  };

  const changeInput = () => {};

  return (
    <>
      {isChecking ? (
        <div className="flex flex-col justify-around h-full border items-center">
          <CardHeader>
            <CardTitle>Issue Tracker</CardTitle>
            <CardDescription>track and submit your issues here</CardDescription>
          </CardHeader>
          <form
            onSubmit={handleSubmit}
            className="h-[80%] flex flex-col justify-around px-4 w-full items-center"
          >
            <Input
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <Input
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <Textarea
              placeholder="Description"
              onChange={(e) => {
                setDes(e.target.value);
              }}
              value={des}
            />
            <Input
              placeholder="Contact Info"
              onChange={(e) => {
                setContactInfo(e.target.value);
              }}
              value={contactInfo}
            />
            <Button onClick={handleSubmit}>Post Issue</Button>
          </form>
          <Button
            onClick={() => {
              setIsChecking(!isChecking);
            }}
            variant="destructive"
            className=" mb-2"
          >
            Check Issue Status
          </Button>
        </div>
      ) : (
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Issue Tracker</CardTitle>
            <CardDescription>track and submit your issues here</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-[50%]">
            <form onSubmit={checkStatus} className="flex flex-col justify-between gap-10 items-start">
              <Input
                placeholder="Enter Issue Key"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                value={id}
              />
              <Button variant="secondary" onClick={checkStatus}>Check Issue Status</Button>
              {(status)? <h1>Status for Issue {id} = {status}</h1> : ""}
            </form>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                setIsChecking(!isChecking);
              }}
            >
              Report Issue
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};
export default IssueTracker;
