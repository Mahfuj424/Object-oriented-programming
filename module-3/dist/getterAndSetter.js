"use strict";
{
    // Getter and Setter
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        // balanceDeposit(balance: number) {
        //   this._balance = this._balance + balance;
        // }
        // setter
        set deopsit(ammount) {
            this._balance = this._balance + ammount;
        }
        //   getter
        get balance() {
            return this._balance;
        }
    }
    const userMahfuj = new BankAccount(111, "mahfuj", 20);
    userMahfuj.deopsit = 50;
    const myBalance = userMahfuj.balance;
    console.log(myBalance);
    // userMahfuj.balanceDeposit(40);
    // const getBal = userMahfuj.getBalance();
    // console.log(getBal);
    //
}
