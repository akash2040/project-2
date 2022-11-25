const { Post } = require("../models");
const sequelize = require("../config/connection");

const postData = [
  {
    title: "One piece",
    img_url: "/assets/ex1.jpg",
    user_id: 1,
  },
  {
    title: "Boruto",
    img_url: "/assets/ex2.jpg",
    user_id: 2,
  },
  {
    title: "Jujutsu kaisen",
    img_url: "/assets/ex3.jpg",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;
