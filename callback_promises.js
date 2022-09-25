console.log("Before");
// getUser(1, (user) => {
//     getRepos(user.gitHubUsername, (repo) => {
//         getCommits(repo[0], (commits) => {
//             console.log(commits)
//         })
//     })
    
// })

console.log('After');
//PROMISE BASED
// getUser(1)
//     .then(userdata => console.log(userdata))
// getUser(1)
//     .then(user => getRepos(user.gitHubUsername))
//     .then(user => console.log(user))
//     .then(repos => getCommits(repos))
//     .then(comms => console.log(comms))
//     .catch(err => console.log({"Error": err.message}))
//     //.catch(console.log(err => new Error ("Error:", err.message)));

//ASYNC & AWAIT

async function displaycommitt(){
    try {
        const userr = await getUser(1);
        const reposit = await getRepos(userr.gitHubUsername);
        const committ = await getCommits(reposit);
        console.log(committ);
    } catch (error) {
        console.log('Error', error.message)
    }
};
displaycommitt();


function getUser(id){
    return new Promise((resolve, reject) => {
        //Async code to be kicked off
        setTimeout(()=> {
            console.log('Reading a data from user database...');
            resolve({id: id, gitHubUsername: "mosh"});
        }, 2000);
    })    
}

function getRepos(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log('reading repos...');
            resolve(['repo1', 'repo2', 'repo3', 'repo4']);
        }, 2000)
    }) 
}
function getCommits(userRepos){
    return new Promise((resolve, reject)=>{    
    setTimeout(()=> {
        console.log('getting commit...');
        resolve(['commit'])
    }, 2000)
    })
}