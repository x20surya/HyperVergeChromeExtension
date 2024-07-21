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
                <iframe src={link} width="400" height="400">Loading…</iframe>
            </>:"" }
        </Card>
        
        </>
    )
}

export default FormCard