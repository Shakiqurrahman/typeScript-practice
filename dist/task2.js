"use strict";
{
    function logUserInfo(name, age, role) {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        if (role) {
            console.log(`Role: ${role}`);
        }
        else {
            console.log("Role: Not specified");
        }
    }
    logUserInfo("Alice", 30, "admin");
    logUserInfo("Bob", 25);
}
