//Write a function which can convert the time input given in 12 hours format to 24 hours format

function formatTime(time) {
    time = time.trim().toLowerCase();
    if (time.includes("am") || time.includes("pm")) {
        console.log("Valid string");
        const colonIndex = time.indexOf(":");
        let hour = time.slice(0, colonIndex);
        if (time.endsWith("am")) {
            if (hour === '12') {
                time = "00" + time.slice(2);
            }
            return time.slice(0, time.length-2);
        } else {
            time = time.slice(0,-2);
            if (hour > 0 && hour < 12) {
                hour = parseInt(hour) + 12;
                time = hour + time.slice(colonIndex);    
            }
            return time;
        }
    } else {
        console.log("Invalid string");
    }
}

formatTime("12:20AM");
