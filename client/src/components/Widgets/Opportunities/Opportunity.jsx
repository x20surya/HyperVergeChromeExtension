import { useEffect, useState } from "react";
import OpportunityCard from "./OpportunityCard";
import OpportunityCreate from "./OpportunityCreate";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Opportunity = (props) => {
  const [create, setCreate] = useState(true);
  const [oppData, setOppData] = useState();

  const GoogleScriptLink =
    "https://script.google.com/macros/s/AKfycbzKFtkZ4K94_dRVUfLBBNorHcS2XwLrYKN14sd6GxKxQPJ__9BWU1gGr0rBezoHHqUGjg/exec?action=getOpp";

  const getData = () => {
    fetch(GoogleScriptLink)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOppData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card className="h-full overflow-y-auto">
      <CardHeader className="border-b">
        <CardTitle>Opportunities</CardTitle>
        <CardDescription>opportunites posted by teams...</CardDescription>
      </CardHeader>
      {create ? (
        <>
          {oppData ? (
            <>
              {oppData
                .slice(0)
                .reverse()
                .map((e) => {
                  return (
                    <OpportunityCard
                      id={e.id}
                      key={e.id}
                      title={e.title}
                      description={e.description}
                      time={e.time}
                      status={e.status}
                      solvedBy={e.solvedBy}
                      
                    />
                  );
                })}
            </>
          ) : (
            <>"Loading…"</>
          )}
          <div className="flex justify-around pb-2">
            <Button
              onClick={() => {
                getData();
              }}
              variant="outline"
            >
              Reload
            </Button>
            <Button
              onClick={() => {
                setCreate(false);
              }}
            >
              Create Opportunity
            </Button>
          </div>
        </>
      ) : (
        <>
          <OpportunityCreate setCreate={setCreate} getData={getData} />
        </>
      )}
    </Card>
  );
};

export default Opportunity;
