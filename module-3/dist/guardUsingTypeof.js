"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add("2", "3");
    console.log(result1);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`my name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`my name is ${user.name}`);
        }
    };
    const normalUser = {
        name: "Mr. x",
    };
    const adminUser = {
        name: "Mr. Mahfuj",
        role: "admin",
    };
    const result2 = getUser(adminUser);
    //
}
