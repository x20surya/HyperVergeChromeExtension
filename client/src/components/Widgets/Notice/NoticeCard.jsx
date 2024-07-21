const NoticeCard = (props) => {
    const {heading, text} = props
    return(
        <>
        <h1>{heading}</h1>
        <p>{text}</p>
        </>
    )
}

export default NoticeCard