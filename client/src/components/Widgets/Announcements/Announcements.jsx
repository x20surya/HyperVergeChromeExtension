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
import { scriptLink } from "@/constants/credentials";

const Announcements = (props) => {
  const [announcementData, setData] = useState();

  /* */
  const GoogleScriptLink = scriptLink + "?action=getAnn";

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
    <Card className="h-full overflow-y-auto">
      <CardHeader className="border-b">
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
