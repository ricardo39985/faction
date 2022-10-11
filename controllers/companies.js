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
  sendToHomeIfNotAuthorized(req, res);
  Company.findById(req.params.id, function (err, company) {
    company.remove();
    res.redirect('/companies');
  });
}
function show(req, res) {
  sendToHomeIfNotAuthorized(req,res)
  Company.findById(req.params.id, function(err,company) {
    console.log(company)
    res.render('companies/show',{company});

  })
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
