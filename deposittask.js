class Account {
    constructor(name, accno, balance){
        this.name =  name;
        this.accno = accno;
        this.balance = balance;
    }

getBalance(){
   return "The balance is: " + this.balance;
}

withdraw(amount){
   console.log(amount, this.balance);
    if(this.balance >= amount){
        this.balance = this.balance - amount
        return this.getBalance();
    }
        else {
            return "Insufficient balance";
       
           
    }
}
deposit(amount){
    console.log(amount, this.balance);
     if(this.balance >= amount){
         this.balance = this.balance + amount
         return this.getBalance();
     }
}
}
    
const vicky = new Account("vicky", 123, 1000000);
const sara = new Account("sara", 1234, 500000);
const maya = new Account("maya", 125, 300000);

console.log(vicky.getBalance());
console.log(sara.getBalance());

console.log(maya.getBalance());

console.log(maya.withdraw(100000));
console.log(maya.withdraw(400000));
console.log(vicky.deposit(200000));

