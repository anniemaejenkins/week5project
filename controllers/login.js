//controllers are used to keep the app.js file smaller



module.exports = {
  //this is creating a function that is a callback. it is
  //rendering the login page.
  renderLogin: function (req, res){
    res.render('login', {});
  },

  //this is taking the input from the login page, which is called username,
  //then assigning it a variable username.
  //if there is a username, place it in the session as a user
  //if there is a user in the session that equals username,
  //go to the index page. If no, go back to the login page to login.
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
