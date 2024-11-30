const users = [
  {
    name: "Mickael",
    balance: 5000,
    friends: ["Nigel", "Sophia", "David", "Elena", "Alex"],
    skills: ["fast learning"],
  },
  {
    name: "Elena",
    balance: 3500,
    friends: ["Maria", "Sophia", "David"],
    skills: ["programming", "cooking"],
  },
  {
    name: "David",
    balance: 4200,
    friends: ["John", "Mickael", "Sophia", "Elena", "Alex", "Liam"],
    skills: ["guitar", "cooking", "writing"],
  },
  {
    name: "Sophia",
    balance: 2800,
    friends: ["Liam", "Elena", "Mickael", "David"],
    skills: ["painting", "yoga"],
  },
  {
    name: "Alex",
    balance: 4900,
    friends: ["James", "David", "Mickael", "Sophia", "Liam", "Andrew", "Brian"],
    skills: ["running", "public speaking", "yoga"],
  },
];

// -- 1 -- //
console.log(" -- 1 -- ");
const totalBalance = users.reduce((acc, user) => (acc += user.balance), 0);
console.log(`Total amount of money on user's accounts: ${totalBalance}`);

// -- 2 -- //
console.log(" -- 2 -- ");
const friendsByName = (name) =>
  users
    .filter((user) => user.friends.some((friend) => friend === name) === true)
    .reduce((acc, user) => {
      acc.push(user.name);
      return acc;
    }, []);
console.log(`Names of users with a friend James:`, friendsByName("James"));
console.log(`Names of users with a friend Liam:`, friendsByName("Liam"));

// -- 3 -- //
console.log(" -- 3 -- ");
const sortedByFriendsamount = users
  .sort((a, b) => a.friends.length - b.friends.length)
  .reduce((acc, user) => {
    acc.push(user.name);
    return acc;
  }, []);
console.log(
  "Names of users in order by the amount of their friends by ascending:",
  sortedByFriendsamount
);

// -- 4 -- //
console.log(" -- 4 -- ");
const allSkills = users
  .reduce((acc, user) => {
    acc.push(...user.skills);
    return acc;
  }, [])
  .reduce((acc, skill) => {
    if (acc.every((item) => item != skill) === true) {
      acc.push(skill);
    }
    return acc;
  }, [])
  .sort((a, b) => a.localeCompare(b));

console.log("All skills without repeating in alphabetical order:", allSkills);
