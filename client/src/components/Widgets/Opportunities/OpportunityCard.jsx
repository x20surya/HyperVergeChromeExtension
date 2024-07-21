import { useState } from "react";
import Time from "./Time";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SetStatus from "./SetStatus";
import { Badge } from "@/components/ui/badge";

const OpportunityCard = (props) => {
  const { id, key, title, description, time, status, solvedBy } = props;

  const [completed, setCompleted] = useState(false);

  if (status == "completed") {
    setCompleted(true);
  }

  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="flex gap-5 items-end">
          {title}
          <Time time={time} />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Badge >{status}</Badge>
        {solvedBy ? solvedBy : ""}
      </CardFooter>
    </Card>
  );
};
export default OpportunityCard;
