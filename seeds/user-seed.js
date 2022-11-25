const { User } = require("../models");

const userSeed = [
  {
    username: "Akash",
    email: "akash@gmail.com",
    password: "password",
  },
  {
    username: "Nabin",
    email: "nabin@gmail.com",
    password: "password12",
  },
  {
    username: "alex",
    email: "alex@gmail.com",
    password: "password11",
  },
];

const seedUsers = () => User.bulkCreate(userSeed);

module.exports = seedUsers;
