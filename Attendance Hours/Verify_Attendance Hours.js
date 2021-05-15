/* # Technical Note # 
script that returns true (available) or false (unavailable) from previous time settings implemented in another script
*/

/* # Prerequisites #
1. configure the "dateTimeOffset" configuration variable and declare a constant integer value referring to the locale's time zone.
1.1. Brasília Standard Time, Brazil --> dateTimeOffset = -3
2. implement one of the "Attendance Hours" scripts available on Github
/*

/* # How to implement #
1. configure on the Blip platform, in the content block, an Action called "Execute a script"
2. configure two inputs variables
    2.1. config.dateTimeOffset (#1 variable input)
    2.2. workSchedule (#2 variable input)
3. only copy and place the code below in "Script"
4. save return in output variable "isWorkTime"
5. configure the Output Conditions of the block where the script, considering the two possible output values ​​for the variable "isWorkTime"
    5.1. isWorkTime = true (available attendance)
    5.2. isWorktTime = false (unavailable attendance)
*/

/* Receive the variables as parameters */
function run(offset, weekSchedule) {
    offset = parseInt(offset);
    weekSchedule = JSON.parse(weekSchedule);
    let today = nowUTC(offset);
    if (isWorkDay(today, weekSchedule)) {
        let todaySchedule = getTodaySchedule(weekSchedule, today);
        let intervalTime = getIntervalTime(todaySchedule, today);
        return checkTime(intervalTime, today);
    }
    return false;
}
function getIntervalTime(todaySchedule, today) {
    let intervalTime = [];
    for (let i = 0; i < todaySchedule.workTime.length; i++) {
        intervalTime.push({
            start: utcDate(todaySchedule.workTime[i].start, today),
            end: utcDate(todaySchedule.workTime[i].end, today)
        });
    }
    return intervalTime;
}
function checkTime(intervalTime, today) {
    for (let i = 0; i < intervalTime.length; i++) {
        if (today - intervalTime[i].start > 0 && intervalTime[i].end - today > 0)
            return true;
    }
    return false;
}
function getTodaySchedule(weekSchedule, today) {
    for (let i = 0; i < weekSchedule.length; i++) {
        if (weekSchedule[i].num == today.getDay()) return weekSchedule[i];
    }
}
/* Get now UTC Date */
function nowUTC(offset) {
    let now = new Date();
    let utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
    );
    return new Date(utc_timestamp + offset * 3600 * 1000);
}
/* Get UTC Date */
function utcDate(timeString, today) {
    let hour = getValueByString("hour", timeString);
    let minutes = getValueByString("minutes", timeString);
    let utc_timestamp = Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        hour,
        minutes,
        0,
        0
    );
    return new Date(utc_timestamp);
}

/* Get hour/minute by string with pattern HH:mm */
function getValueByString(type, timeString) {
    if (type === "hour") {
        return parseInt(timeString.substring(0, timeString.indexOf(":")));
    } else if (type === "minutes") {
        return parseInt(
            timeString.substring(timeString.indexOf(":") + 1, timeString.length)
        );
    }
    return 0;
}

/* Get if today is a work day */
function isWorkDay(today, workDays) {
    for (let i = 0; i < workDays.length; i++) {
        if (workDays[i].num == today.getDay().toString()) return true;
    }
    return false;
}