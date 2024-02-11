/*const email = document.querySelector("#email");
const password = document.querySelector("#pass");
const login = document.querySelector("#button");


login.addEventListener("click",function(){
    alert("Please wait before you login");
    alert("this page will take few moments");
    
}) */
function validate(){
    const uname = document.getElementById("utex").value;
    const uemail = document.getElementById("etex").value;
    const upass = document.getElementById("ptex").value;
    const unumb = document.getElementById("ntex").value;
    if(uname_validate(uname)){
        if(upass_validate(upass)){
            if(umail_validate(uemail)){
                if(unumb_validate(unumb)){
                    location.replace("page3.html")
                }
            }
        }
    }
return false;
}
function uname_validate(uname){
    // console.log(uname);
    var letters = /^[A-Za-z]+$/;
    if(uname.match(letters)){
        return true;}
    else if(uname === '') {
        alert('Username should not be empty!');
        return false;
    }
    else{
        alert('Username should contain only Letters!');
        return false;
    }

}
function umail_validate(uemail){
    const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(uemail.match(mailformat)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false
    }
}
function unumb_validate(unumb){
    const numbers = /^[0-9]+$/;
    const num_len = unumb.length;
    if(unumb.match(numbers) && num_len === 10){
        return true;
    }
    else{
        alert('Enter Valid Phone Number');
        return false;
    }

}
function upass_validate(upass){
    const passid_len =upass.length;
    if (passid_len == 0 ||passid_len >= 15 || passid_len < 7) {
        alert("Password should not be empty / length be between 7 to 12");
        return false;
    }
    return true;
}