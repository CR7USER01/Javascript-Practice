//Immediately Invoked Function Expression (IIFE)

( function chai(){
    console.log(`DB CONNECTED`)
//chai()
})();// IIFE // we use semicolon to avoid error if previous line does not have semicolon


 (  (name)=> {
    console.log(`DB CONNECTED USING ARROW FUNCTION ${name}`);
 } )('jitu')



