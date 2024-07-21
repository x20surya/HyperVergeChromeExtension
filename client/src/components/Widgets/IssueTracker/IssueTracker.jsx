import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {v4 as uuid} from "uuid"

const IssueTracker = (props) => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [contactInfo, setContactInfo] = useState("")
    const [id, setId] = useState("")
    const [status, setStatus] = useState("")

    const[isChecking, setIsChecking] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uuid()
        const date = new Date()
        const time = date.getHours().toString() +"-"+ date.getMinutes().toString() +"-"+ date.getSeconds().toString() +"  "+date.getDate().toString() +"/"+(date.getMonth() + 1).toString()+"/"+ date.getFullYear().toString()
        console.log(time)
        const obj = {
            id,
            title ,
            name,
            contactInfo,
            description : des,
            time,
        }
        if(name === "" || des === "" || title == "" || contactInfo == ""){
            return
        }else{
            fetch("https://script.google.com/macros/s/AKfycbyXPfOJu7M-IZ4QR95jY5drYX4VubJ7pb27GtBF92kKv9gFj7wWSKVA1TsKUMqXN4YzZQ/exec?action=addIssue", {
                method : "POST",
                body : JSON.stringify(obj)
            }).then(()=>{
                console.log("added new Opp")
            })
            alert("Issue submitted with IssueID \n" + id)
            setName("")
            setDes("")
            setContactInfo("")
            setTitle("")
        }
    }

    const checkStatus = (e) => {
        e.preventDefault()
        if(id == ""){
            return
        }else{
            var obj = { key : id}
            fetch("https://script.google.com/macros/s/AKfycbyXPfOJu7M-IZ4QR95jY5drYX4VubJ7pb27GtBF92kKv9gFj7wWSKVA1TsKUMqXN4YzZQ/exec?action=addIssue", {
                method : "POST",
                body : JSON.stringify(obj)
            }).then((e)=>{
                console.log("checked")
                console.log(e.body)
            })
            setId("");
        }
    }

    const changeInput = () => {
        
    }

    return(
        <>
        {(isChecking)?
        <>
            <form
            onSubmit={handleSubmit} className="h-full">
                <input
                    placeholder="Author"
                    onChange={(e)=>{setName(e.target.value)}}
                    value={name}
                />
                <input
                    placeholder="Title"
                    onChange={(e)=>{setTitle(e.target.value)}}
                    value={title}
                />
                <input
                    placeholder="Description"
                    onChange={(e)=>{setDes(e.target.value)}}
                    value={des}
                />
                <input
                    placeholder="Contact Info"
                    onChange={(e)=>{setContactInfo(e.target.value)}}
                    value={contactInfo}
                />
                <button
                    onClick={handleSubmit}
                >Post Issue</button>
            </form>
            <button onClick={()=>{setIsChecking(!(isChecking))}}>Check Issue Status</button>
        </>
        :
        <>
            <form
            onSubmit={checkStatus} className="h-full">
                <input
                    placeholder="Enter Issue Key"
                    onChange={(e)=>{setId(e.target.value)}}
                    value={id}
                />
                <button
                    onClick={checkStatus}
                >Check Issue Status</button>
            </form>
            <button onClick={()=>{setIsChecking(!(isChecking))}}>Report Issue</button>
            </>
            }
        </>
    )
}
export default IssueTracker