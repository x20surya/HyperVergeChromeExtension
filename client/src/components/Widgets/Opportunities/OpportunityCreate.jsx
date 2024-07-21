import { useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const OpportunityCreate = (props) => {
    const {setCreate, getData} = props
    const [name, setName] = useState("")
    const [des, setDes] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("New Opp Uploaded")
        console.log(name)
        console.log(des)
        const date = new Date()
        const time = date.getTime()
        const obj = {
            title : name,
            description : des,
            time,
        }
        if(name === "" || des === ""){
            return
        }else{
            fetch("https://script.google.com/macros/s/AKfycby3NJOvuhFSAgdCErjFmacekmFXSJVigcdvsfThR9zlUZf9boMI1z1pHAxUDMXckOYkXQ/exec?action=addOpp", {
                method : "POST",
                body : JSON.stringify(obj)
            }).then(()=>{
                console.log("added new Opp")
            })
            setCreate(true)
            getData()
        }
    }

    return(
        <>
            <form
            onSubmit={handleSubmit}>
                <input
                    placeholder="Title"
                        onChange={(e)=>{setName(e.target.value)}}
                    value={name}
                />
                <input
                    placeholder="Description"
                    onChange={(e)=>{setDes(e.target.value)}}
                    value={des}
                />
                <button
                    onClick={handleSubmit}
                >Post Opportunity</button>
            </form>

        </>
    )
}
export default OpportunityCreate