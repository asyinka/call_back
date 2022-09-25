const P = new Promise((resolve, reject) => {

    setTimeout(()=>{
        //resolve is used to return the result we want to be generated
        resolve("this is to be displayed after 2secs");
        //the reject aspect holds te error that is thrown when sth bad happens
        reject(new Error("an error or unforeseen contigency occured"))
    }, 2000);     
});
    //promise.then is used to hold the value of the result and where it is to be displayed
P.then(show => console.log("show", show));
    //promise.catch is used to hold the error to be thrown
P.catch(err => console.log("Error", err));


