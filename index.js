console.log("1. This is the first expression");
userData(1, displayUserData);
console.log("3. code execution is completed at this stage");


function displayUserData(userDetails){
    console.log(userDetails);
    userRepo(userDetails.githubUsername, displayrepos)
}

function displayrepos (repos){
    console.log(repos);
    userCommits("user", displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}


function userData(id, callback){
    setTimeout(()=>{
        console.log("2. Reading the user data from the database...");
        callback({id: id, githubUsername: "Yinka.git"})
    }, 2000);
};
function userRepo(user, callback){
    setTimeout(()=>{
        console.log(`reading ${user}'s repositories...`);
        callback(["repo1", "repo2", "repo3", "repo4"]);
    }, 2001)
};
function userCommits(user, callback){
    setTimeout(() => {
        console.log(`reading ${user} commits`);
        callback(['commits']);
    }, 2000);
}
