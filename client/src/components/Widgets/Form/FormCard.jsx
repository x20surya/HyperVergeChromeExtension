import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const FormCard = (props) => {
    const {name, link, status} = props

    return(
        <>
        <Card>
            {(status == "Active")? 
            <>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <iframe src={link} width="100%" height="330dvh" className=" ">Loading…</iframe>
            </>:"Form is now Inactive" }
        </Card>
        
        </>
    )
}

export default FormCard