"use strict";
{
    // Access modifier
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        balanceDeposit(balance) {
            this._balance = this._balance + balance;
        }
        getBalance() {
            return this._balance;
        }
    }
    const userMahfuj = new BankAccount(111, "mahfuj", 20);
    userMahfuj.balanceDeposit(40);
    const getBal = userMahfuj.getBalance();
    console.log(getBal);
    //
}
