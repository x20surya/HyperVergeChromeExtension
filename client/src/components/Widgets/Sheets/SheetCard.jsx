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
                <iframe src={link} width="100%" height="330dvh">Loading…</iframe>
            </>:"" }
        </Card>
        
        </>
    )
}

export default SheetCard