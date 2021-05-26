/* # Technical Note # 
script designed to verify that the current date is a holiday
currently contains Brazilian national holidays whose dates are fixed
*/

/* # Prerequisites #
no prerequisites required
/*

/* # How to implement #
1. configure on the Blip platform, in the content block, an Action called "Execute a script"
2. no input variables
3. copy and place the code below in "Script"
4. save return in output variable "isHoliday"
5. customize municipal, state and national holidays, when applicable. 
   The matrix has columns that represent the calendar days and the rows are the months
*/

function run(){
    /* system date */
    let data = new Date()
    let isHoliday = new Boolean()

    /* object with local date and time */
    var currentDate = { 
    year : data.getFullYear(), /* The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.*/
    month : data.getMonth(), /* The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time. */
    day : data.getDate(), /* The getDate() method returns the day of the month (from 1 to 31) for the specified date. */
    day_week : data.getDay(), /* The getDay() method returns the day of the week (from 0 to 6) for the specified date. */
    hour : data.getHours(), /* The getHours() method returns the hour (from 0 to 23) of the specified date and time. */
    minute : data.getMinutes() /* The getMinutes() method returns the minutes (from 0 to 59) of the specified date and time. */
    };
    
    /* configuration matrix with holidays */  
    /* info -> 0 = is not holiday | 1 = is a holiday */
    let Holidays = [
        ['Months'      , 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        ['January'     , 1, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['February'    , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['March'       , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['April'       , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['May'         , 1, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['June'        , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['July'        , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['August'      , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['September'   , 0, 0, 0, 0, 0, 0, 1, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['October'     , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['November'    , 0, 1, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        ['December'    , 0, 0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0]
    ];

    /* Adjusting the current month of the year to the Holidays table format */
    currentDate.month++

    /* checks if the current date is a holiday */ 
    if (Holidays[currentDate.month][currentDate.day] == 0){
        isHoliday = false /* --> is not a Holiday */
    }else{
        isHoliday = true  /* --> is a Holiday */
    }
    return isHoliday  
}