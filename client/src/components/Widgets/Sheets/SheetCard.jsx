import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const SheetCard = (props) => {
    const {name, link, status} = props

    return(
        <>
        <Card>
            {(status == "Active")? 
            <>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <iframe src={link} width="640" height="422">Loading…</iframe>
            </>:"" }
        </Card>
        
        </>
    )
}

export default SheetCard