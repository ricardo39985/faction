const Company = require('../models/company');
const Employee = require('../models/employee');

const { faker } = require('@faker-js/faker');
module.exports = {
  new: newCompany,
  create,
  show,
  update,
  delete: deleteCompany,
  index,
  edit,
};

function newCompany(req, res) {
  res.render('companies/new');
}
function create(req, res) {
  const newCompany = new Company(req.body);
  newCompany.user = req.user;
  newCompany.avatar = faker.image.imageUrl(640, 480, `${newCompany.name}`, true);
  newCompany.save(function (err) {
    giveTenEmployees(newCompany);
    res.redirect(`/companies/${newCompany._id}`);
  });
}
function deleteCompany(req, res) {
  sendToHomeIfNotAuthorized(req, res);
  Company.findById(req.params.id, function (err, company) {
    company.remove();
    res.redirect('/companies');
  });
}
function show(req, res) {
  sendToHomeIfNotAuthorized(req, res);
  Company.findById(req.params.id, function (err, company) {
    Employee.find({ company }, function (err, employees) {
      console.log(employees);
      res.render('companies/show', { company, employees });
    });
  });
}
function update(req, res) {
  res.render('companies/update');
}
function index(req, res) {
  Company.find({ user: req.user }, function (err, companies) {
    res.render('companies/index', { companies });
  });
}
function edit(req, res) {
  res.render('companies/edit');
}

function sendToHomeIfNotAuthorized(req, res) {
  Company.findById(req.params.id, function (err, company) {
    if (!company.user._id.equals(req.user._id)) res.redirect('/');
  });
}
function giveTenEmployees(company) {
  const departments = [
    'Marketing',
    'Proposals',
    'Sales',
    'Project',
    'Designing',
    'Production',
    'Maintenance',
    'Store',
    'Procurement',
    'Quality',
    'Inspection',
    'Packaging',
    'Finance',
    'Dispatch',
    'Account',
    'Research',
    'Development',
    'Information Technology',
    'Human Resource',
    'Security',
    'Administration',
  ];
  const e = 10;
  for (let i = 0; i < e; i++) {
    const newPerson = new Employee();
    newPerson.department = departments[Math.floor(Math.random() * departments.length)];
    newPerson.firstName = faker.name.firstName();
    newPerson.lastName = faker.name.lastName();
    newPerson.email = faker.internet.email(newPerson.firstName, newPerson.lastName);
    newPerson.rate = faker.datatype.number({ min: 18, max: 45 });
    newPerson.avatar = faker.image.people(480, 480, true);
    newPerson.company = company;
    console.log(newPerson);
    newPerson.save();
  }
  company.save();
}
