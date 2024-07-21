const AnnouncementCards = (props) => {
    const {heading, text, status} = props
    return(
        <>
        {(status == "Active")?
        <>
        <h1>{heading}</h1>
        <p>{text}</p>
        <p>{status}</p>
        </> : ""}
        </>
    )
}
export default AnnouncementCards;