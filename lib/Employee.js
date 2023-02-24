// TODO: Write code to define and export the Employee class


// get info ob how to extend , check prev activities

class Employee {
    constructor(name, id, email){

        this.name = name;
        this.id   = id;
        this.email = email;
    }
    getName(){
        return this.name;
            

        
    }
    getId(){
        return this.id;


        
    }
    getEmail(){
        return this.email;



    }
    getRole(){
        return "Employee";


}  
}
module.exports = Employee;