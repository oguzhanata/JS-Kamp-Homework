class Customer {
    constructor(id,customerNumber) {
        this.bisey = id;
        this.customerNumber = customerNumber;
    }
}



let customer = new Customer(1, "12345");

//prototyping
customer.name ="Oğuzhan ATA"
console.log(customer.name)



Customer.bisey = "Bişey"
console.log(Customer.bisey)

console.log(customer.customerNumber)

// inheretance
class IndividualCust extends Customer {
    constructor(firstName,id,customerNumber) {
        super(id,customerNumber)
        this.firstName = firstName;
    }

}

class CorporateCustomer extends Customer {
    constructor(companyName,id,customerNumber) {
        super(id,customerNumber)
        this.companyName = companyName;
    }
}


