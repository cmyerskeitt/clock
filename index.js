function past(h, m, s){
    let hoursToSeconds = h * 60 *60
    let minutesToSeconds = m * 60 
    return (hoursToSeconds + minutesToSeconds + s) * 1000
}