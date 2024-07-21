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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("New Opp Uploaded")
        console.log(name)
        console.log(des)
        const id = uuid()
        console.log("id ===")
        console.log(id)
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

    return(
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

        </>
    )
}
export default IssueTracker