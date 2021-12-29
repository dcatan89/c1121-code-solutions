/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!balance || typeof balance === 'string' || balance < 0 || !Number.isInteger(balance)) {
    return null;
  } else {
    var $openAccount = new Account(this.nextAccountNumber, holder);
    $openAccount.deposit(balance);
    this.accounts.push($openAccount);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAccount = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      var account = this.accounts[i].getBalance();
      var totalAccount = totalAccount + account;
    }
  }
  return totalAccount;
};
