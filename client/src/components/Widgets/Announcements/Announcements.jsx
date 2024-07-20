import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import AnnouncementCards from "./AnnouncementCards";

const Announcements = (props) => {
  const [announcementData, setData] = useState();

  /*SheetDB link, to get this link log into SheetDB.io
     enter the spreadsheet link
     and paste the API link in the constant below
    */
  const SheetDBLink = "https://sheetdb.io/api/v1/dzd16sj3tzabl";

  const getData = () => {
    fetch(SheetDBLink)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  console.log("Ann");
  console.log(announcementData);
  useEffect(() => {
    getData();
  }, []);

  return (
    <Card className="h-full border-none">
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
        <CardDescription>Get Latest Updates Here...</CardDescription>
      </CardHeader>
      {announcementData
        ? announcementData.map((announcements) => {
            return (
              <AnnouncementCards
                key={announcements.id}
                heading={announcements.Heading}
                text={announcements.Message}
                status={announcements.Status}
              />
            );
          })
        : "Loading..."}
    </Card>
  );
};

export default Announcements;
