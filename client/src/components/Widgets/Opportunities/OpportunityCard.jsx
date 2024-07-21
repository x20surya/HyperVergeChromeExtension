import { useState } from "react"
import Time from "./Time"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import SetStatus from "./SetStatus"

const OpportunityCard = (props) => {
    const {id, key, title, description, time, status, solvedBy} = props

    const [completed, setCompleted] = useState(false);

    if(status == "completed"){
        setCompleted(true)
    }

    return(
        <>
            <CardHeader>
                <CardTitle>{title}<Time time = {time}/></CardTitle>
            </CardHeader>
            <CardDescription>{description}</CardDescription>
            <CardFooter>
            {status}
            {(solvedBy)?solvedBy:""}
            </CardFooter>
        </>
    )
}
export default OpportunityCard