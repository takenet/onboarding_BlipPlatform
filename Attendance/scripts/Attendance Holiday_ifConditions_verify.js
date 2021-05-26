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
5. customize, if necessary, the parameters of the "toLocaleString" function, that is, 'en-US' and "timezone"
   To learn more about the "toLocaleString" 
   function: https://reference.codeproject.com/book/javascript/reference/global_objects/number/tolocalestring#:~:text=prototype.-,toLocaleString(),the%20behavior%20of % 20the% 20function.
6. customize municipal, state and national holidays, when applicable. 
   The matrix has columns that represent the calendar days and the rows are the months
*/

function run() {
    var brazilTZ = new Date().toLocaleString('en-US', {
        timeZone: 'America/Sao_Paulo'
    })
    var now = new Date(brazilTZ);    

    var month = now.getMonth() + 1;
    var day = now.getDate();

    /** Ano novo */
    if (day == 1 && month == 1)
        return true;

    /** Sexta feira Santa */
    if (day == 10 && month == 4)
        return true;

    /** Tiradentes */
    if (day == 21 && month == 4)
        return true;

    /** Dia do trabalho */
    if (day == 1 && month == 5)
        return true;

    /** Independência */
    if (day == 7 && month == 9)
        return true;

    /** Nossa Senhora Aparecida */
    if (day == 12 && month == 10)
        return true;

    /** Finados */
    if (day == 2 && month == 11)
        return true;

    /** Proclamação da Republica */
    if (day == 15 && month == 11)
        return true;

    /** Natal */
    if (day == 25 && month == 12)
        return true;

    return false;
}