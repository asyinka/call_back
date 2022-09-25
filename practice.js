const P1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('first async operation...');
        resolve(1)
    }, 2000)
})
const P2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('second async operation...')
        resolve('p2')
        reject(new Error("error occured"));
    }, 2000)
})

Promise.all([P1, P2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));
//if one fails the other wont resolve

// Promise.race([P1, P2])
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
//Promise.race - this resolves the promise immediately the result of one of the promises is generated