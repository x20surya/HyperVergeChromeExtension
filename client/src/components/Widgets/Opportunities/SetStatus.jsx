const SetStatus = (props) => {

    const {id} = props

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("New Opp Uploaded")
        console.log(name)
        console.log(des)
        const date = new Date()
        const time = date.getTime()
        const obj = {
            title : name,
            description : des,
            time,
        }
        if(name === "" || des === ""){
            return
        }else{
            fetch("https://script.google.com/macros/s/AKfycby3NJOvuhFSAgdCErjFmacekmFXSJVigcdvsfThR9zlUZf9boMI1z1pHAxUDMXckOYkXQ/exec?action=addOpp", {
                method : "POST",
                body : JSON.stringify(obj)
            }).then(()=>{
                console.log("added new Opp")
            })
            setCreate(true)
        }
    }

    return(
        <>
            <form
            onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                        onChange={(e)=>{setName(e.target.value)}}
                    value={name}
                />
                <button
                    onClick={handleSubmit}
                >Update Status</button>
            </form>
        </>
    )

}

export default SetStatus