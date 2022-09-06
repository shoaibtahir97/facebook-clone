// export {getloginData};

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const profilePic = document.getElementById("profilePic");
const login_freinds = document.getElementById("login-freinds")

let users = []
function createUser() {
    function User(username, email, password, profilePic) {
        this.username = username
        this.email = email
        this.password = password
        this.profilePic = profilePic
    }

    users.push(new User(username.value, email.value, password.value, profilePic.value))
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))

}

function getloginData() {
    const loginEmail = document.getElementById("formGroupExampleInput").value
    const loginPassword = document.getElementById("formGroupExampleInput2").value
    
    let storedItems = JSON.parse(localStorage.getItem("users"))
    let match = false;

    for (let i = 0; i < storedItems.length; i++) {
        if (loginEmail === storedItems[i].email && loginPassword === storedItems[i].password) {
            console.log(storedItems[i].email)
            match = true;
            break;
        }
    }

    if (match == true) {
        window.location.href = "file:///home/shoaib97/Desktop/development/sir-kashif-saylani/signup-form/login.html"
        
    } else {
        alert("Email/Password is incorrect")
    }
}

function showFriends(){
    let allUsers = JSON.parse(localStorage.getItem("users"))
    console.log(allUsers)
}


// var users = [{ name: 'Kashif', profilePic: 'abc.jpg' }, { name: 'Fahim', profilePic: 'abc.jpg'}, { name: 'Wasif', profilePic: 'abc.jpg' }]
// users.push({name:"Shoaib",profilePic: "xyz.png"})
// localStorage.setItem('users', JSON.stringify(users))
// let storedUsers = JSON.parse(localStorage.getItem('users'))


 



