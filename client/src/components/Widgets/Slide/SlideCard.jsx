import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const SlideCard = (props) => {
    const {name, link, status} = props

    return(
        <>
        <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <iframe src={link} width="100%" height="330dvh" className=" ">Loading…</iframe>
        </Card>
        
        </>
    )
}

export default SlideCard