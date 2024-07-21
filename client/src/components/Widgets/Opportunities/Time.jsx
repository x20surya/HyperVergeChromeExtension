const Time = (props) => {
    const {time} = props

    function timeDifference(givenTime) {
        if(givenTime){
            const currentTime = new Date();
            const diff = (currentTime.getTime()/1000) - givenTime/1000;
            console.log(givenTime)
            console.log("Calculating Time...")
            const seconds = Math.floor(diff);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            
            if(days != 0) {
                return `${days}d`
            }
            else if(hours != 0){
                return `${hours}h`
            }
            else if(minutes != 0){
                return `${minutes}m`
            }else{
                return `${seconds}s`
            }
        }
        else{
            return `0s`
        }
      }
    return(
        <span className=" text-slate-500 font-normal text-xs text-center">{timeDifference(time)}</span>
    )
}

export default Time