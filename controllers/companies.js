const Company = require('../models/company');
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
  newCompany.save(function (err) {
    res.redirect(`/companies/${newCompany._id}`);
  });
}
function deleteCompany(req, res) {
  res.redirect('/');
}
function show(req, res) {
  res.render('companies/show');
}
function update(req, res) {
  res.render('companies/update');
}
function index(req, res) {
  Company.find({ user: req.user }, function (err, companies) {
    res.render('companies/index', { companies });
  });
}
function edit(req, res) {}
