const Employee = require('../models/employee');
const Company = require('../models/company')
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
  console.log(req.params)
  Company.findById(req.params.companyid, function (err, company) {
    console.log(company)
    res.render('employees/new',{company});
  })
}
function create(req, res) {
 console.log(req.body)
 Company.findById(req.params.companyid, function (err, company) {
  const newEmployee= new Employee(req.body)
  newEmployee.company= company
  console.log(newEmployee)
  res.redirect(`/companies/${company._id}/employees/${newEmployee._id}`)
 })
}
function deleteEmployee(req, res) {
  sendToHomeIfNotAuthorized(req, res);
  Employee.findById(req.params.employeeid, function (err, employee) {
    employee.remove();
    res.redirect('/employees');
  });
}
function show(req, res) {
  sendToHomeIfNotAuthorized(req,res)
  Employee.findById(req.params.employeeid, function(err,employee) {
    console.log(employee)
    res.render('employees/show',{employee});

  })
}
function update(req, res) {
  res.render('employees/update');
}
function index(req, res) {
  Employee.find({ user: req.user }, function (err, employees) {
    res.render('employees/index', { employees });
  });
}
function edit(req, res) {
  res.render('employees/edit');
}

function sendToHomeIfNotAuthorized(req, res) {
  Company.findById(req.params.companyid, function (err, company) {
    if (!company.user._id.equals(req.user._id)) res.redirect('/');
  });
}
