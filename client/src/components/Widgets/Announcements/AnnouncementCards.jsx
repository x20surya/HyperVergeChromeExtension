import { Badge } from "@/components/ui/badge";

const AnnouncementCards = (props) => {
  const { heading, text, status } = props;
  return (
    <div className=" pt-4">
      {status == "Active" ? (
        <>
          <h1 className="text-lg font-bold">{heading}</h1>
          <p>{text}</p>
          <Badge variant="destructive">{status}</Badge>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default AnnouncementCards;
