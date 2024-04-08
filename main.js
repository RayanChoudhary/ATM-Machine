#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold.italic.underline("____Well Come To the Rayan ATM Machine_____"));
let myBalance = 50000; // dollar
let myPin = 1122;
let input = await inquirer.prompt([
    {
        name: "Pin",
        type: 'number',
        message: "Enter Your Pin Number"
    }
]);
if (input.Pin === myPin) {
    console.log("Correct pin Code");
    let selectoption = await inquirer.prompt([
        {
            name: "Option",
            message: "please select an option",
            type: 'list',
            choices: ["fast cash", "check balance"]
        }
    ]);
    if (selectoption.Option === "fast cash") {
        let selectAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Select The Amount",
                type: 'list',
                choices: ["1000", "2000", "5000", "10000", "20000", "25000", "EnterYourAmount"]
            }
        ]);
        if (selectAmount.Amount === "1000") {
            myBalance -= 1000;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        else if (selectAmount.Amount === "2000") {
            myBalance -= 2000;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        else if (selectAmount.Amount === "5000") {
            myBalance -= 5000;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        else if (selectAmount.Amount === "10000") {
            myBalance -= 10000;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        else if (selectAmount.Amount === "20000") {
            myBalance -= 20000;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        else if (selectAmount.Amount === "25000") {
            myBalance -= 25000;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        else if (selectAmount.Amount === "EnterYourAmount") {
            let YourAmount = await inquirer.prompt([
                {
                    name: "EnterAmount",
                    type: 'number',
                    message: "Enter Your Amount"
                }
            ]);
            myBalance -= YourAmount.EnterAmount;
            console.log("your Remaining balance is " + myBalance + " thank You for using Rayan ATM ");
        }
        if (selectAmount.Amount.EnterYourAmount > myBalance) {
            console.log("Soryy YOU Have Insufficient balance please input low Amount");
        }
    }
    else if (selectoption.Option === "check balance") {
        console.log(`Your curruntly balance is ${myBalance} Thank You for Using Rayan ATM`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
