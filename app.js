#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 4444;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fastCash", "check Balance"]
        }
    ]);
    //  console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            console.log;
            let balance = myBalance -= amountAns.amount;
            console.log(`the remaining balance is ${balance}`);
        }
        else {
            console.log(`you have insufficaient balance`);
        }
    }
    else if (operationAns.operation === "fastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        if (fastCashAns.amount <= myBalance) {
            let balance2 = myBalance -= fastCashAns.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(`you have insuficaint amount`);
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(myBalance);
    }
}
else {
    console.log("incorrect pin code!!!!");
}
