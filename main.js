import inquirer from "inquirer";
import chalk from "chalk";
class Bank {
    accountnumber;
    bankbalance;
    password;
    constructor(account, bank, password) {
        this.accountnumber = account;
        this.bankbalance = bank;
        this.password = password;
    }
    Deposit(amount) {
        this.bankbalance += amount;
        console.log(chalk.green `Amount Succesully Deposited`);
        console.log(chalk.yellow `Current Balance: ${this.bankbalance}`);
    }
    Withdraw(amount) {
        if (amount > this.bankbalance || amount <= 0) {
            console.log(chalk.red `Invalid amount`);
            return;
        }
        else {
            this.bankbalance -= amount;
            console.log(chalk.green `Amount Succesully Withdrawn`);
            console.log(chalk.yellow `Current Balance:${this.bankbalance}`);
        }
    }
    checkbalance() {
        console.log(chalk.yellow `Current Balance:${this.bankbalance}`);
    }
}
// Make An array of Bank Accounts
let bankaccounts = [
    new Bank(7657, 2000, 1234),
    new Bank(5592, 4000, 4321),
    new Bank(7157, 5000, 4567)
];
// Take input from the user to enter their account number and pin
// Make a variable condition for while loop
let condition = true;
// start while loop
while (condition) {
    let input = await inquirer.prompt([
        {
            name: "userchoice",
            type: "list",
            message: chalk.grey `What you want to do `,
            choices: ["Deposit", "Withdraw", "Check Balance", "Make BankAccount", "Exit"]
        }
    ]);
    // start If-else condition based on your program
    if (input.userchoice === "Deposit") {
        let input = await inquirer.prompt([
            {
                name: "useraccountnumber",
                type: "number",
                message: chalk.grey("Enter your account number"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid account number`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please enter valid account number`;
                    }
                    return true;
                }
            },
            {
                name: "userpin",
                type: "number",
                message: chalk.grey("Enter your pin"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid pin`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please eter valid pin`;
                    }
                    return true;
                }
            }
        ]);
        let check = bankaccounts.find(account => account.accountnumber === input.useraccountnumber && account.password === input.userpin);
        if (check) {
            console.log(chalk.green("Account Succesfully found"));
            let input = await inquirer.prompt([
                {
                    name: "useramount",
                    type: "number",
                    message: chalk.grey("Enter your amount to be deposited"),
                    validate: (input) => {
                        if (isNaN(input)) {
                            return chalk.red `Please enter valid amount`;
                        }
                        return true;
                    }
                }
            ]);
            check.Deposit(input.useramount);
        }
        else {
            console.log(chalk.red `Incorrect accountnumber or pin`);
            break;
        }
    }
    else if (input.userchoice === "Withdraw") {
        let input = await inquirer.prompt([
            {
                name: "useraccountnumber",
                type: "number",
                message: chalk.grey("Enter your account number"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid account number`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please enter valid account number`;
                    }
                    return true;
                }
            },
            {
                name: "userpin",
                type: "number",
                message: chalk.grey("Enter your pin"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid pin`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please eter valid pin`;
                    }
                    return true;
                }
            }
        ]);
        let check = bankaccounts.find(account => account.accountnumber === input.useraccountnumber && account.password === input.userpin);
        if (check) {
            console.log(chalk.green("Account Succesfully found"));
            let input = await inquirer.prompt([
                {
                    name: "useramount",
                    type: "number",
                    message: chalk.grey("Enter your amount to be Withdrawn"),
                    validate: (input) => {
                        if (isNaN(input)) {
                            return chalk.red `Please enter valid amount`;
                        }
                        return true;
                    }
                }
            ]);
            check.Withdraw(input.useramount);
        }
        else {
            console.log(chalk.red `Incorrect accountnumber or pin`);
            break;
        }
    }
    else if (input.userchoice === "Check Balance") {
        let input = await inquirer.prompt([
            {
                name: "useraccountnumber",
                type: "number",
                message: chalk.grey("Enter your account number"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid account number`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please enter valid account number`;
                    }
                    return true;
                }
            },
            {
                name: "userpin",
                type: "number",
                message: chalk.grey("Enter your pin"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid pin`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please eter valid pin`;
                    }
                    return true;
                }
            }
        ]);
        let check = bankaccounts.find(account => account.accountnumber === input.useraccountnumber && account.password === input.userpin);
        if (check) {
            check.checkbalance();
        }
        else {
            console.log(chalk.red `Incorrect accountnumber or pin`);
            break;
        }
    }
    else if (input.userchoice === "Make BankAccount") {
        let input = await inquirer.prompt([
            {
                name: "useraccount",
                type: "number",
                message: chalk.grey("Enter Four-digit accountnumber"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid pin`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please eter valid pin`;
                    }
                    return true;
                }
            },
            {
                name: "userpin",
                type: "number",
                message: chalk.grey("Enter your Four-digit pin"),
                validate: (input) => {
                    if (String(input).length !== 4) {
                        return chalk.red `Please enter valid pin`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please eter valid pin`;
                    }
                    return true;
                }
            }, {
                name: 'userinitialbalance',
                type: "number",
                message: chalk.grey("Enter your initial balance"),
                validate: (input) => {
                    if (input > 2000) {
                        return chalk.red `Please enter amount within 2000`;
                    }
                    else if (isNaN(input)) {
                        return chalk.red `Please enter valid amount`;
                    }
                    return true;
                }
            }
        ]);
        let account = new Bank(input.useraccount, input.userinitialbalance, input.userpin);
        bankaccounts.push(account);
    }
    else if (input.userchoice === "Exit") {
        console.log(chalk.bold `Exited....`);
        condition = false;
    }
    else {
        console.log(chalk.red `Incorrect accountnumber or pin`);
    }
}
