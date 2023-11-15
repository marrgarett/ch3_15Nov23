const prompt = require('prompt-sync') ()
let pwdcheck = parseFloat(prompt ('password : '))
correctpwd = 1234
var pwdresult
if (pwdcheck != realpwd) {
    pwdresult = ("password ไม่ถูกต้อง")
} else {
    pwdresult = ("password ถูกต้อง")
}
console.log(pwdresult) // test edit