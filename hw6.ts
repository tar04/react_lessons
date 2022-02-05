import {IUser} from "./interface/userInterface";


const user:IUser = {
    name:"Max",
    age:18,
    gender:'male'
}

//console.log(user)

function sum(a:number,b:number):number{
    return a+b;
}
function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2,3);
incAge(user, 2);
//console.log(user)