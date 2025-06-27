const accountId = 13324
let accountEmail = "urbanaeem@gmail.com"
var accountPassword = "12345"
accoundCity = "pakistan"
let accountState;
// accountId = 2//  not allowed

accountEmail = "naeemakhtar@gmail.com"
accountPassword = "212121"
accountCity = "bangluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and funcional scope
*/

console.table([ accoundId, accountPassword, accountEmail, accountCity, accountState])
