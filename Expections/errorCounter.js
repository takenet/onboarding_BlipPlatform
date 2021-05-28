/* # Technical Note # 

This script was design to count how many errors the user got in a single container, to start an exceptions/error loop and, 
after a defined number of errors, the user will be directed to a specific block (ie. operator).

*/

/* # Prerequisites #

The return variable needs to be defined at the beginning of the chatbot flow with the value "0".
Unique error block for each container

/*

/* # How to implement #

Create an error block
Connect the error block with the original block you want to count the return errors
Add the script below under 'Entering Actions' > 'Execute script' in the error block
Define a return variable under 'Save return' > 'Return value variable'
Update the value to this variable to "0" at the beginning of the chatbot flow.

*/

function run(count) {
    
    count = count + 1;

    return count;
}
