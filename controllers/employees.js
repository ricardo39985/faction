const Employee = require('../models/employee');
const Company = require('../models/company');
const { faker } = require('@faker-js/faker');

module.exports = {
  new: newEmployee,
  create,
  show,
  update,
  delete: deleteEmployee,
  index,
  edit,
};

function newEmployee(req, res) {
  Company.findById(req.params.companyid, function (err, company) {
    res.render('employees/new', { company });
  });
}
function create(req, res) {
  Company.findById(req.params.companyid, function (err, company) {
    const newEmployee = new Employee(req.body);
    newEmployee.avatar = faker.image.people(80, 80, true);
    newEmployee.company = company;
    newEmployee.save(function (err) {
      res.redirect(`/companies/${company._id}/employees/${newEmployee._id}`);
    });
  });
}
function deleteEmployee(req, res) {
  // sendToHomeIfNotAuthorized(req, res);
  Employee.findById(req.params.employeeid, function (err, employee) {
    employee.remove();
    res.redirect(`/companies/${req.params.companyid}`);
  });
}
function show(req, res) {
  // sendToHomeIfNotAuthorized(req, res);
  Employee.findById(req.params.employeeid, function (err, employee) {
    res.render('employees/show', { employee });
  });
}
function update(req, res) {
  Employee.findOneAndUpdate(req.params.employeeid, req.body, function (err, employee) {
    res.redirect(`/companies/${employee.company._id}/employees/${employee._id}`);
  });
}
function index(req, res) {
  Employee.find({ user: req.user }, function (err, employees) {
    res.render('employees/index', { employees });
  });
}
function edit(req, res) {
  // sendToHomeIfNotAuthorized(req, res);
  Employee.findById(req.params.employeeid, function (err, employee) {
    res.render('employees/edit', { employee });
  });
}

// function sendToHomeIfNotAuthorized(req, res) {
//   Company.findById(req.params.companyid, function (err, company) {
//     if (!company.user._id.equals(req.user._id)) res.redirect('/');
//   });
// }
