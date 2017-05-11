var express = require('express');
var router = express.Router();
//var Mitarbeiter = require('../models/employees');
var stamps = require('../models/stamps')

/* GET home page. */
router.get('/', function(req, res, next) {

    stamps.readLast(req.user.employee_no, function (err, doc) {
        if (!err)
        {
            res.render('index', {
                title: 'Home',
                last_stamp:doc,
                user:req.user
            });
        } else {
            res.render('index', {
                title: 'Home',
                user:req.user
            });
        }

    });

});

router.get('/newstamp', function (req, res, next) {
    stamps.create(req.user.employee_no, function (err) {
        if (err)console.log(err);
        res.redirect('/home');

    });
});




// router.post('/example', function(req, res){
//     var mitarbeiter = new Mitarbeiter();
//     mitarbeiter.mitarbeiternummer = req.body.manr;
//     mitarbeiter.vorname = req.body.forname;
//     mitarbeiter.name = req.body.surname;
//
//     var query = {};
//     if (mitarbeiter.mitarbeiternummer)
//       query.mitarbeiternummer = mitarbeiter.mitarbeiternummer;
//     if (mitarbeiter.vorname)
//       query.vorname = mitarbeiter.vorname;
//     if (mitarbeiter.name)
//       query.nachname = mitarbeiter.name;
//     if (query){
//         Mitarbeiter.find(query, function(err, mas) {
//             if (err)
//                 console.log(err);
//
//             console.log(mas.length);
//             res.render('index', { title: 'Express', lastaction: 'Eingestempelt', mitarbeiter: mitarbeiter, malist:mas});
//         });
//     } else
//         res.render('index', { title: 'Express', lastaction: 'Eingestempelt', mitarbeiter: mitarbeiter});
//
// });

// router.get('/hello', function (req, res) {
//
//     var newMitarbeiter = new Mitarbeiter({
//     mitarbeiternummer: 2,
//     name: "Alkin",
//     vorname: "Alfons",
//     strasse: "Albertstraße 1",
//     ort: "Aichingen",
//     telefon: 012345611,
//     email: "Alfons.Alkin@aol.com",
//     abteilung: "A",
//     rechte: false,
//
//     benutzername: "Alfons",
//     passwort: "Alfons"
//     });
//     newMitarbeiter.save(function (err, Mitarbeiter) {
//         if(err)
//             res.render('show_message', {message: "Database error", type: "error"});
//         else
//             res.send("tach");
//     })
//
//
// });
module.exports = router;





