const accountID = 144553
let accountEmail = "niti1@yopmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountID = 23 //constants can not be changed 
accountEmail = "nits@yopmail.com"
accountPassword = "5575877"
accountCity = "Mumbai"

// Curly braces {}. are called 

/**
 * prefer not to use var because of issue in bloc scope functional scope
 * 
 */

console.log("AccountID : ", accountID);
console.log("accountEmail : ", accountEmail);
console.table(
    [
        accountEmail, accountID, accountPassword, accountCity, accountState
    ]
)
