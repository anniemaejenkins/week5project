

module.export = {
  renderLogin: function (req, res){
    res.render('login', {});
  },
  postLogin: function (req, res){
    var username = req.body.username;
    if (username){
    req.session.user = username;
  } if (req.session.user == username){
    res.redirect('/index');
  } else {
    res.redirect('/login');
  }
  }
};
