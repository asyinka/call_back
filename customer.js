// getCustomer(1, customer => {
//     console.log('Customer', customer);
//     if(customer.isGold){
//         GetTopMovies(movies => console.log('Top movies:', movies))
//     };
//     sendEmail(customer.email, mail =>{
//         console.log(mail)
//     })
// });

// getCustomer(1)
//     .then(customer => {if (customer.isGold) {
//         console.log(customer);
//        return GetTopMovies();
//     //when a code is return a promise is in block, you have to add return to get the return value.
//     }})
//     .then(movies => console.log('Top movies', movies));
// getCustomer(1)
//     .then(customer => sendEmail(customer.email))
//     .then(mail => console.log(mail));

async function notifyCustomer(){
    try {
        const customer = await getCustomer(1);
        console.log('customer details', customer);
        if (customer.isGold){
        const movies = await GetTopMovies();
        console.log('Top movies:', movies);
        const sendmail = await sendEmail(customer.email, movies);
        console.log (sendmail);
}
    } catch (error) {
        console.log('Error', error.message)
    }   
}

notifyCustomer();



function getCustomer(id) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: id,
                name: 'James Keep',
                isGold: true,
                email: 'James.keep@gmail.com'
            })
        }, 2000);
    })
    
}
function GetTopMovies(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('reading movies...')
            resolve(['movie1', 'movie2', 'movie 3'])
        }, 2000);
    })
    
}
function sendEmail(email, movies){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Email sent to ${email}`)
        }, 2000);
    })
}