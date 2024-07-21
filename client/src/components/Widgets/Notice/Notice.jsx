import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { useEffect, useState } from "react"
  import NoticeCard from "./NoticeCard";
  
  
  const Notice = (props) => {
    const [noticeData, setData] = useState();
  
    /*SheetDB link, to get this link log into SheetDB.io
       enter the spreadsheet link
       and paste the API link in the constant below
      */
    const GoogleScriptLink =
      "https://script.google.com/macros/s/AKfycbzrV9rdqFN_SPTIdjoEKpE2qox2NkOPgLM7fs1cst0z3djqFOKY6TFw9fYHXT-t9nGgxQ/exec?action=getNotice";
  
    const getData = () => {
      fetch(GoogleScriptLink)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    };
    console.log("Ann");
    console.log(noticeData);
    useEffect(() => {
      getData();
    }, []);
  
    return (
      <Card className="h-full overflow-y-auto">
        <CardHeader className="border-b">
          <CardTitle>Notice Board</CardTitle>
          <CardDescription>Get Latest Updates Here...</CardDescription>
        </CardHeader>
        <CardContent>
          {noticeData
            ? noticeData.map((notice) => {
                return (
                  <NoticeCard
                    key={notice.key}
                    heading={notice.heading}
                    text={notice.message}
                  />
                );
              })
            : "Loading..."}
        </CardContent>
      </Card>
    );
  };
  
  export default Notice;
  