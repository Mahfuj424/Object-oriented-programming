{
  // Getter and Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number; // jokhon kuno jaygay use korte hobe na property ke tokhon private use korte parbo, ar jodi use korte ei property ke tokhon amra protected use korbo
    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // balanceDeposit(balance: number) {
    //   this._balance = this._balance + balance;
    // }
    // setter
    set deopsit(ammount: number) {
      this._balance = this._balance + ammount;
    }

    //   getter
    get balance() {
      return this._balance;
    }

    //   getBalance() {
    //     return this._balance;
    //   }
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
