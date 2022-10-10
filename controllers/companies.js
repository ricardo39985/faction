module.exports = {
  new: newCompany,
  create,
  show,
  update,
  delete: deleteCompany,
};

function newCompany(req, res) {
  res.render('companies/new');
}
function create(req, res) {
  res.redirect('/');
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
