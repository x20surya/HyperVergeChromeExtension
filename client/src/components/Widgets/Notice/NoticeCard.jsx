const NoticeCard = (props) => {
    const {heading, text} = props
    return(
        <div className="p-4">
        <h1 className="text-lg font-bold">{heading}</h1>
        <p>{text}</p>
        </div>
    )
}

export default NoticeCard