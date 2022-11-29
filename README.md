# project-2

# <img src="./public/assets/logo2.png" alt='lord-icon' height='40'> AnimeOne

## Description

Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers. JavaScript is so popular that it's the most used programming language in the world, used as a client-side programming language by 97.0% of all websites
AnimeOne where you search for anime list and you will get all anime with image and title.You can login and logout to website or You can search in home page for anime list

(https://animeone3.herokuapp.com/)

# Table of Content

1. [Description](#description)
2. [HomePage](#homepage)
3. [AccAcceptanceCriteria](#accAcceptancecriteria)
4. [CodeSnippet](#codesnippet)
5. [Tools](#tools)
6. [Author](#author)

# HomePage

![pic](/public/assets/home.JPG)

# AccAcceptanceCriteria

- Use Handlebars.js as the templating engine.

- Use MySQL and the Sequelize ORM for the database.

-Have both GET and POST routes for retrieving and adding new data.

- Be deployed using Heroku (with data).

- Use at least one new library, package, or technology that we haven’t discussed.

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Have a folder structure that meets the MVC paradigm.

- Include authentication (express-session and cookies).

- Protect API keys and sensitive information with environment variables.

- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Tools

- JavaScript
- Handlebars
- MySQL
- Sequelize
- Express.js
- NodeJS
- Heroku
- HTML5
- Insomnia
- mysql2
- dotenv
- expression-session

## Code Snippets

```const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

```

## Authors

**Akash Chanara**

- [GitHub](https://github.com/akash2040)
- [Linkedin](https://www.linkedin.com/in/akash-chanara-087b531ab)
- [Portfolio](https://akash2040.github.io/portfolio-akash/)
