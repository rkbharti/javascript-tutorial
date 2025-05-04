const accountId = 45521
let accountEmail = "Rkb@google.com"
var accountPassword = "123456"
accountLocation = "Delhi"
console.log(accountId);

console.table([accountId, accountEmail,  accountPassword,  accountLocation])
//here we are going to change the data wich contain variables and let components
// instead of using  var for changing data we use let instead of var because of issue in block scope and functionl scope
accountEmail = "hbg@googlee.com"
accountPassword= "222222"
accountLocation= " Jammu"
let accountStatus = true

console.table([accountId,accountEmail,  accountPassword,  accountLocation, accountStatus])

