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
  const GoogleScriptLink =
    "https://script.google.com/macros/s/AKfycbxTQgS35Kd24HtSobiDsFAWmAH5-Ri55kGOJcl_-MXVZa1cg0e75lsOQgBQPV2Qs4vzgw/exec?action=getAnn";

  const getData = () => {
    fetch(GoogleScriptLink)
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
    <Card className="border-none">
      <CardHeader>
        <CardTitle>Announcements</CardTitle>
        <CardDescription>Get Latest Updates Here...</CardDescription>
      </CardHeader>
      <CardContent>
        {announcementData
          ? announcementData.map((announcements) => {
              return (
                <AnnouncementCards
                  key={announcements.key}
                  heading={announcements.heading}
                  text={announcements.message}
                  status={announcements.status}
                />
              );
            })
          : "Loading..."}
      </CardContent>
    </Card>
  );
};

export default Announcements;
