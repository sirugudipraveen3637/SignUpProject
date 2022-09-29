const username=document.getElementById("username");
const mail=document.getElementById("email");
const pwd=document.getElementById("pwd");
const cnfmpwd=document.getElementById("confirmpwd");
const  filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pwdrules={length:5,specialcharacters:1, capitalletter:1,nuumber:1};
var upperchar = "abcdefghijklmnopqrstuvwxyz".toUpperCase(); 
var numeric = '0123456789';
var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

function getRandomUpper() {
    
    var entity4 = Math.ceil(string.length * Math.random()*Math.random());
    return string.charAt(entity4);
}

function getRandomNumber() {
    var numeric = '0123456789';
    var entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
    return numeric.charAt(entity2);

}

function getRandomSymbol() {
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
    return punctuation.charAt(entity3);
}

function formValidation()
{
    try {
        if(username.value==="")
          throw "provide username";
        else if(mail.value=="")
            throw "provide email";
        else if(!filter.test(mail.value))
            throw "provide valid email";
        else if(pwd.value=="")
            throw "provide password";
        else if(cnfmpwd.value=="")
            throw "provide confirm password";
        else if(pwd.value!=cnfmpwd.value)
            throw "Password mismatch. provide valid password";
        else if(pwd.value.length<5)
            throw "Password length should be minimum 5"
        else if(checkSpecilCharacter!=true && checkupperchar!=true && checknumbers!=true)
            throw "Password is weak, plz check the pwd rules"
        else
            alert("Registeration completed successfully!");
    } catch (error) {
        alert(error);
   }
}

function checkSpecilCharacter()
{
    let pwdarray=[...pwd.value]
    pwdarray.forEach(element => {
        if(punctuation.includes(element))
            return true;
        else
            return false;
    });
}

function checknumbers()
{
    let pwdarray=[...pwd.value]
    pwdarray.forEach(element => {
        if(punctuation.includes(element))
            return true;
        else
            return false;
    });
}

function checkupperchar()
{
    let pwdarray=[...pwd.value]
    pwdarray.forEach(element => {
        if(punctuation.includes(element))
            return true;
        else
            return false;
    });
}