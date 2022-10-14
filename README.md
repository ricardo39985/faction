<h1 align="center">Welcome to Faction 👋</h1>
<p align="center"><small >A better way to manage payroll.</small></p>
<p>
  <a href="https://www.linkedin.com/in/ricardo-persaud/">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
<a href="https://nodejs.org/en/   ">
    <img src="	https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://www.w3.org/TR/CSS/#css">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://html.spec.whatwg.org/multipage/">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://www.javascript.com/">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  </a>&nbsp;&nbsp;
   <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </a>&nbsp;&nbsp;
 <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
  </a>&nbsp;&nbsp;
</p>

> A fullstack application for payroll professionals to manage employee payment records for various organizations

<br>

### ✨ [Demo](https://faction.onrender.com/)

<br>

## :sparkles: Features

:heavy_check_mark: RESTful Routing\
:heavy_check_mark: Full Crud Functionality\
:heavy_check_mark: MVC\
:heavy_check_mark: MongoDB\
:heavy_check_mark: Oauth authentication\
:heavy_check_mark: Basic Authorization\
:heavy_check_mark: Tailwind CSS Styling


## Screenshots

![Alt text](./screenshots/home.png 'Home')
![Alt text](./screenshots/companies.png 'Companies')
![Alt text](./screenshots/company.png 'Company')
![Alt text](./screenshots/newCompany.png 'New Company')
![Alt text](./screenshots/newEmployee.png 'New Employee')
![Alt text](./screenshots/employee.png 'New Employee')

## Technologies Used

The following tools were used in this project:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Install

````sh
npm i
```a

## Usage

```sh
node server.js
````

## Roadmap

- [x] Add Changelog
- [x] Add Payment model
- [ ] Add more fields to Employee model
  - [ ] Hired
  - [ ] Reports to
  - [ ] SSN

See the [open issues](https://github.com/ricardo39985/faction/issues) for a full list of proposed features (and known issues).


## Code Snippets

```
<!-- New -->
function newCompany(req, res) {
  res.render('companies/new');
}
<!-- Create -->
function create(req, res) {
  const newCompany = new Company(req.body);
  newCompany.user = req.user;
  newCompany.avatar = faker.image.imageUrl(240, 240, `${newCompany.name}`, true);
  newCompany.save(function (err) {
    giveTenEmployees(newCompany);
    res.redirect(`/companies/${newCompany._id}`);
  });
}

```


## Author

👤 **Ricardo Persaud**

- Github: [@ricardo39985](https://github.com/ricardo39985)
- LinkedIn: [@ricardopersaudcodes](https://linkedin.com/in/ricardopersaudcodes)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ricardo39985/faction/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Ricardo Persaud](https://github.com/ricardo39985).<br />
This project is [MIT](https://opensource.org/licenses/MIT) licensed.

---

_This project was built with ❤️ by [Ricardo Persaud](https://github.com/ricardo39985)_
