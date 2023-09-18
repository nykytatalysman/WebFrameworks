/* GET home page */
const index = function(req, res){
  res.render('index', { title: 'My first project' });
};

module.exports = {
  index
};