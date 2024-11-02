{
    // Task 3 -->

    type Color =
        | "black"
        | "brown"
        | "blonde"
        | "red"
        | "gray"
        | "blue"
        | "green"
        | "hazel";
    type MaritalStatus = "single" | "married" | "divorced" | "widowed";
    type Hobby = string;
    type Skill = string;
    type Friend = string;

    type Person = {
        name: string;
        address: string;
        hairColor: Color;
        eyeColor: Color;
        income: number;
        expense: number;
        hobbies: Hobby[];
        familyMembers: number;
        job: string;
        skills: Skill[];
        maritalStatus: MaritalStatus;
        friends: Friend[];
    };

    const johnDoe: Person = {
        name: "John Doe",
        address: "123 Main St, Springfield, USA",
        hairColor: "brown",
        eyeColor: "blue",
        income: 60000,
        expense: 30000,
        hobbies: ["reading", "traveling", "cooking"],
        familyMembers: 7,
        job: "Software Engineer",
        skills: ["JavaScript", "TypeScript", "React", "Node.js"],
        maritalStatus: "married",
        friends: ["Alice", "Bob", "Charlie"],
    };

    console.log(johnDoe);
}
