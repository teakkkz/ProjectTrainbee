const express = require('express');
const app = express();
var alert = require('alert-node');
var Arrayz = require('./ArrayList');
app.set('view engine','ejs');
var a = new Arrayz();
var b = new Arrayz();
var c = new Arrayz();
var bodyp = require('body-parser');
var urlencodedParser = bodyp.urlencoded({ extend: true });
var header = '<header>';
var header1 = '<header>';
var users;
var bdp = app.use(bodyp.json());
const crypto = require('crypto');

app.post('/getname', urlencodedParser, function (req, res) {
  users = req.body.utext
  console.time("name")
  res.redirect('/book')
  console.timeEnd("name")
});

//Add index method
app.get('/addidx0', function (req, res) { 
     console.time("add")
     a.add(0)
    res.redirect('/book');
    console.timeEnd("add")
  });
app.get('/addidx1', function (req, res) { 
    b.add(0)
    res.redirect('/book');
  });
app.get('/addidx2', function (req, res) { 
    c.add(0)
    res.redirect('/book');
  });
  //Delete method
app.get('/delidx0', function (req, res) { 
    console.time("del")
    a.remove(0)
    res.redirect('/ticket');
    console.timeEnd("del")
  });
app.get('/delidx1', function (req, res) { 
    b.remove(0)
    res.redirect('/ticket');
  });
app.get('/delidx2', function (req, res) { 
    c.remove(0)
    res.redirect('/ticket');
  });

app.get('/book', urlencodedParser, function (req, res) {
  console.time("book")
  var book = '<head>';
  book += header
  book +='<!DOCTYPE html>'
  book +='<html>'
  book +='<style>'
  book +='h2{'
  book +='text-align: center;'
  book +='}</style>'
  book +='<title>Trainbee</title>'
  book +='<meta charset="UTF-8">'
  book +='<meta name="viewport" content="width=device-width, initial-scale=1">'
  book +='<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'
  book +='<body>'
  book +='<div class="w3-top">'
  book +='<div class="w3-bar w3-white w3-wide w3-padding w3-card">'
  book +='<a href="/" class="w3-bar-item w3-button"><b>Train</b>Bee</a>'
  book +='<div class="w3-right w3-hide-small">'
  book +='<a href="/book" class="w3-bar-item w3-button">Book</a>'
  book +='<a href="/ticket" class="w3-bar-item w3-button">MyTicket</a>'
  book +='<a href="/contact" class="w3-bar-item w3-button">About Us</a>'
  book +='</div>'
  book +='</div>'
  book +='</div>'
  book +='<!-- Header -->'
  book +='<header style="max-width:1500px max-height:500px;">'
  book +=  '<img class="w3-image" src="https://images7.alphacoders.com/661/661783.jpg" alt="Architecture" width="1500" height="800">'
  book +='<div class="w3-display-middle w3-margin-top w3-center"><br><br>'
  book += '<h1 class="w3-padding w3-white w3-opacity-min"><b>Welcome</b></span>'
  book +='<h1 class="w3-padding w3-white w3-opacity-min"><b>'+ users +'</b></span>'
  book +='</div>'
  book +='</header>'
  book +='<div class="w3-content w3-padding" style="max-width:1564px">' 
  book +='<!-- Project Section -->'
  book +='<div class="w3-container w3-padding-32" id="projects">'
  book +='</div>'
  book +='<h2>Ticket</h2>'
  book +='<div class="w3-third w3-margin-bottom">'
  book += '<ul class="w3-ul w3-border w3-center w3-hover-shadow">'
  book +=  '<li class="w3-black w3-xlarge w3-padding-32"> BKK - Hogwarts</li>'
  book +=   '<li class="w3-white w3-padding-16"><b>On</b> 29 April</li>'
  book +=  '<li class="w3-white w3-padding-16"> 5 hr</li>'
  book +=   '<li class="w3-white w3-padding-16">'
  book +='<h2 class="w3-wide">$ 25</h2>'
  book +=    '<span class="w3-opacity">seat: ' + a.trim() + '/1</span>'
  book +=   '</li>'
  book +=   '<li class="w3-light-grey w3-padding-24">'
  book +='<form action= "/addidx0" method="GET">'
  book +='<input class="w3-button w3-green w3-padding-large" name="addbtn"type="submit"'
  if (a.Getidx(0) != null) {
    book += 'value="Full" disabled';
      // alert("Ticket booked.");
  }else {
    book += 'value="Book"';
  }
  book +='/></form> ' 
  book +=  '</li>'
  book +='</ul>'
  book +='</div>'
  book += ' <div class="w3-third w3-margin-bottom">'
  book += '<ul class="w3-ul w3-border w3-center w3-hover-shadow">'
  book +='<li class="w3-dark-grey w3-xlarge w3-padding-32"> BKK - Pattaya</li>'
  book +=  '<li class="w3-white w3-padding-16"><b>On</b> 3 May</li>'
  book +=  '<li class="w3-white w3-padding-16">3 hr.</li>'
  book +=  '<li class="w3-white w3-padding-16">'
  book +=   '<h2 class="w3-wide">$ 10</h2>'
  book += '<span class="w3-opacity">seat: ' + b.trim() + '/1</span>'
  book += '</li>'
  book +=  '<li class="w3-light-grey w3-padding-24">'
  book +='<form action= "/addidx1" method="GET">'
  book +='<input class="w3-button w3-green w3-padding-large"type="submit"name="addbtn"'
  if(b.Getidx(0) != null){
    book += 'value="Full" disabled';
  }else{
    book += 'value="Book"';
  }
  book +='/></form> ' 
  book +=  '</li>'
  book += '</ul>'
  book += '</div>'
  book += '<div class="w3-third w3-margin-bottom">'
  book += '<ul class="w3-ul w3-border w3-center w3-hover-shadow">'
  book +=   '<li class="w3-black w3-xlarge w3-padding-32"> BKK - Maldives</li>'
  book +=   '<li class="w3-white w3-padding-16"><b>On</b> 15 May</li>'
  book +=  '<li class="w3-white w3-padding-16"> 8 hr.</li>'
  book +=  '<li class="w3-white w3-padding-16">'
  book +=    '<h2 class="w3-wide">$ 50</h2>'
  book +=    '<span class="w3-opacity">seat: ' + c.trim() + '/ 1</span>'
  book +=  '</li>'
  book +=  '<li class="w3-light-grey w3-padding-24">'
  book +='<form action= "/addidx2" method="GET">'
  book +='<input class="w3-button w3-green w3-padding-large"type="submit"name="addbtn"'
  if (c.Getidx(0) != null) {
    book += 'value="Full" disabled';
  }else{
    book += 'value="Book"';
  }
  book +='/></form> ' 
  book +=  '</li>'
  book += '</ul>'
  book += '</div>'
  book += '<div class="w3-container w3-padding-32" id="tab">'
  book +='</div>'
  book +='<div class="wrapper">'
  book +='<footer class="w3-center w3-black w3-padding-16">'
  book +='<p> TeaTime</p>'
  book +='</footer>'
  book +='</div>'
  book +='</body>'
  book +='</html>'
  res.send(book);
  console.timeEnd("book")
  });
app.get('/ticket', urlencodedParser, function (req, res) {
   console.time("ticket")
   var result = '';
 

  result += header1
  result +='<!DOCTYPE html>'
  result +='<html>'
  result +='<title>Trainbee</title>'
  result +='<meta charset="UTF-8">'
  result +='<meta name="viewport" content="width=device-width, initial-scale=1">'
  result +='<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'
  result +='<div class="w3-top">'
  result +='<div class="w3-bar w3-white w3-wide w3-padding w3-card">'
  result += '<a href="/" class="w3-bar-item w3-button"><b>Train</b>Bee</a>'
  result +='<div class="w3-right w3-hide-small">'
  result +='<a href="/book" class="w3-bar-item w3-button">Book</a>'
  result +='<a href="/ticket" class="w3-bar-item w3-button">MyTicket</a>'
  result +='<a href="/contact" class="w3-bar-item w3-button">About Us</a>'
  result +='</div>'
  result +='</div>'
  result +='</div>'
  result +='<body>'
  result +='<img class="w3-image" src="https://images7.alphacoders.com/661/661783.jpg" width="1500" height="600">'
  result += '<div class="w3-display-middle w3-margin-top w3-center"><br><br>'
  result += '<h1 class="w3-padding w3-white w3-opacity-min"><b>My Ticket</b></span>'
  result += '</div>'
  result += '</header>'
  result +='<div class="w3-content w3-padding" style="max-width:1564px">' 
  result +='<!-- Project Section -->'
  result +='<div class="w3-container w3-padding-32" id="projects">'
  result +='</div>'
  result +='<div class="w3-third w3-margin-bottom">'
  result += '<ul class="w3-ul w3-border w3-center w3-hover-shadow">'
  result +=  '<li class="w3-black w3-xlarge w3-padding-32"> BKK - Hogwarts</li>'
  result +=   '<li class="w3-light-grey w3-padding-24">'
if (a.Getidx(0) != null) {
  result +=  '<li class="w3-white w3-padding-16">You have 1 ticket.</li>'    
  result +='<form action= "/delidx0" method="GET">'
  result +='<li class="w3-white w3-padding-16"><input class="w3-button w3-red"value="Delete"name="addbtn"type="submit"/></form></li>'
}else{
  result +='<li class="w3-white w3-padding-16"><b>-</b>'
  }
  result +='<li class="w3-light-grey w3-padding-24">'
  result +='</li>'
  result +='</ul>'
  result +='</div>'
  result += ' <div class="w3-third w3-margin-bottom">'
  result += '<ul class="w3-ul w3-border w3-center w3-hover-shadow">'
  result +='<li class="w3-dark-grey w3-xlarge w3-padding-32"> BKK - Pattaya</li>'
  result +=   '<li class="w3-light-grey w3-padding-24">'
    if (b.Getidx(0) != null) {
      result +=  '<li class="w3-white w3-padding-16">You have 1 ticket.</li>'    
      result +='<form action= "/delidx1" method="GET">'
      result +='<li class="w3-white w3-padding-16"><input class="w3-button w3-red"value="Delete"name="addbtn"type="submit"/></form></li>'
    }else{
      result +='<li class="w3-white w3-padding-16"><b>-</b>'
    }
  result +='<li class="w3-light-grey w3-padding-24">'
   
  result +='</li>'
  result += '</ul>'
  result += '</div>'

  result += '<div class="w3-third w3-margin-bottom">'
  result += '<ul class="w3-ul w3-border w3-center w3-hover-shadow">'
  result +=   '<li class="w3-black w3-xlarge w3-padding-32">BKK - Maldives</li>'
  result +=   '<li class="w3-light-grey w3-padding-24">'
    if (c.Getidx(0) != null) {
      result +=  '<li class="w3-white w3-padding-16">You have 1 ticket.</li>'    
      result +='<form action= "/delidx2" method="GET">'
      result +='<li class="w3-white w3-padding-16"><input class="w3-button w3-red"value="Delete"name="addbtn"type="submit"/></form></li>'
    }else{
      result +='<li class="w3-white w3-padding-16"><b>-</b></li>'
    }
  result +='<li class="w3-light-grey w3-padding-24">'
  result +='</li>'
  result += '</ul>'
  result += '</div>'
  result += '<div class="w3-container w3-padding-32" id="tab">'
  result +='</div>'
  result +='<div class="wrapper">'
  result +='<footer class="w3-center w3-black w3-padding-16">'
  result +='<p> TeaTime</p>'
  result +='</footer>'
  result +='</div>'
  result +='</body>'
  result +='</html>'
  res.send(result);
  console.timeEnd("ticket")
});
//Index Page
app.get('/', urlencodedParser, function (req, res) {
  console.time("index")
  var html = '<head>';
  html += header
  html +='<!DOCTYPE html>'
  html +='<html>'
  html +='<title>TrainBee</title>'
  html +='<meta charset="UTF-8">'
  html +='<meta name="viewport" content="width=device-width, initial-scale=1">'
  html +='<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'
  html +='<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">'
  html +='<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">'
  html +='<style>'
  html +='h1,input {font-family: "Raleway", sans-serif}'
  html +='</style>'
  html +='<body>'
  html +='<div class="w3-top">'
  html +=   '<div class="w3-bar w3-white w3-wide w3-padding w3-card">'
  html +=     '<a href="/" class="w3-bar-item w3-button"><b>Train</b>Bee</a>'
  html +=   '</div>'
  html += '</div>'
  html +='<header class="w3-display-container w3-content w3-wide" style="max-width:1500px;">'
  html +=    '<img src="https://images7.alphacoders.com/661/661783.jpg" width="1500" height="800">'
  html +=   '<div class="w3-display-middle w3-margin-top w3-center">'
  html +=    '<h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>Enter your Name</b></span> <br></br>'
  html +=    '<form  action="/getname" method="POST">'
  html +=      '<input style="text-align: center;" type ="text w3-center"name="utext"placeholder="example"required><br>'
  html +=      '<br><input name="hello" type="submit" class="btn btn-danger btn-lg" value="Enter">'
  html +=    '</form>'
  html +=   '</div>'
  html +=  '</header>'
  html +='<footer class="w3-center w3-black w3-padding-16">'
  html +='<p> TeaTime </p>'
  html +='</footer>'
  html +='</body>'
  html +='</html>'
  res.send(html);
  console.timeEnd("index")
});

//Contact page
app.get('/contact', urlencodedParser, function (req, res) {
  console.time("contact")
  var contact = '<head>';
 
  contact += header
  contact +='<!DOCTYPE html>'
  contact +='<html>'
  contact +='<title>About Us</title>'
  contact +='<meta charset="UTF-8">'
  contact +='<meta name="viewport" content="width=device-width, initial-scale=1">'
  contact +='<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">'
  contact +='<body>'

  contact +='<div class="w3-top">'
  contact +=  '<div class="w3-bar w3-white w3-wide w3-padding w3-card">'
  contact +=   '<a href="/" class="w3-bar-item w3-button"><b>Train</b> Bee</a>'
  contact +=   '<div class="w3-right w3-hide-small">'
  contact +=       '<a href="/book" class="w3-bar-item w3-button">Book</a>'
  contact +=       '<a href="/ticket" class="w3-bar-item w3-button">MyTicket</a>'
  contact +=       '<a href="/contact" class="w3-bar-item w3-button">About Us</a>'
  contact +=    '</div>'
  contact +=  '</div>'
  contact +='</div>'


  contact +='</head>'
  contact += '<div class="w3-row-padding" id="about">'
  contact += '<div class="w3-center w3-padding-64">'
  contact +=   '<span class="w3-xlarge w3-padding-16">My Team</span>'
  contact += '</div>'

  contact +='<div class="w3-third w3-margin-bottom">'
  contact +=   '<div class="w3-card-4">'
  contact +=    '<div align="center"><img src="https://www.img.in.th/images/e3b0e7e2cfabf1463111334b014d3f14.jpg" alt="GGyz" style="width:78%"></div>'
  contact +=    '<div class="w3-container">'
  contact +=      '<i><h3>Manassanun Krutta</h3></i>'
  contact +=      '<h5>Student ID: 59102010277</h5>'
  contact +=      '<a href="swu59277@outlook.com">E-mail:swu59277@outlook.com</a>'
  contact +=      '<p></p>'
  contact +=    '</div>'
  contact +=  '</div>'
  contact +='</div>'

  contact +='<div class="w3-third w3-margin-bottom">'
  contact +=  '<div class="w3-card-4">'
  contact +=    '<div align="center"><img src="https://www.img.in.th/images/c7f2a10e13b6fed51540f7f65af50e36.jpg" alt="Tekz" style="width:78%"></div>'
  contact +=    '<div class="w3-container">'
  contact +=      '<i><h3>Suwatchai Kiatchalermporn</h3></i>'
  contact +=      '<h5>Student ID: 59102010298</h5>'
  contact +=      '<a href="swu59298@outlook.com">E-mail:swu59298@outlook.com</a>'
  contact +=    '<p></p>'
  contact +=   '</div>'
  contact +=   '</div>'
  contact += '</div>'
  contact += '<div class="w3-third w3-margin-bottom">'
  contact +=   '<div class="w3-card-4">'
  contact +=     '<div align="center"><img src="https://www.img.in.th/images/f7cf618f23a9abcfbc9deb36138a310d.jpg" alt="Golf" style="width:82%"></div>'
  contact +=     '<div class="w3-container">'
  contact +=       '<i><h3>Nattapol Lerdridtipong</h3></i>'
  contact +=       '<h5>Student ID: 59102010902</h5>'
  contact +=      '<a href="swu59902@outlook.com">E-mail:swu59902@outlook.com</a>'
  contact +=      '<p></p>'
  contact +=    '</div>'
  contact +=  '</div>'
  contact +='</div>'
  contact +='</div>'
  contact +='<div class="wrapper">'
  contact +='<footer class="w3-center w3-black w3-padding-16">'
  contact +='<p> TeaTime </p>'
  contact +='</footer>'
  contact +='</div>'
  contact +='</body>'
  contact +='</html>'
  res.send(contact);
  console.timeEnd("contact")
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});