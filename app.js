const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")


function createUser(){
    let users = []
    users= [{
        username: "Shoaib",
        email: "shoaibtahir97@gmail.com", 
        password: "123"}];
    
    function User(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    
    users.push(new User(username.value, email.value, password.value))
    console.log(users)
    localStorage.setItem("users", JSON.stringify(users))

    // loginHTML()
}




// var users = [{ name: 'Kashif', profilePic: 'abc.jpg' }, { name: 'Fahim', profilePic: 'abc.jpg'}, { name: 'Wasif', profilePic: 'abc.jpg' }]
// users.push({name:"Shoaib",profilePic: "xyz.png"})
// localStorage.setItem('users', JSON.stringify(users))
// let storedUsers = JSON.parse(localStorage.getItem('users'))

form.addEventListener("submit", function(e){
    e.preventDefault()
    createUser()
})



