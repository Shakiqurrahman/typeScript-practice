{
    // practice 1 of TypeScript

    // Task 2 --->

    type Role = "admin" | "user" | "guest";
    function logUserInfo(name: string, age: number, role?: Role): void {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        if (role) {
            console.log(`Role: ${role}`);
        } else {
            console.log("Role: Not specified");
        }
    }

    logUserInfo("Alice", 30, "admin");
    logUserInfo("Bob", 25);
}
