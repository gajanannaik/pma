var db = require('../util/dbConnections').getPool();
var M = require('../util/messages').getMsg();
var S = require('../util/status').getStatusMsg();
var C = require('../util/constant').getConstantValue();


function getAllPrisoner(req, res, next) {
    console.log("getAllprisoner");
    db.query('SELECT * FROM prisoner', function (err, rows, fields) {
        if (err) {
            res.status(500)
                .json({
                    status: S.FAILED,
                    data: rows,
                    message: M.FAILED_MSG
                });
        } else {
            res.status(200)
                .json({
                    status: S.SUCCESS,
                    data: rows,
                    message: M.SUCCESS_MSG
                });
        }
    });
}

function getSingleProfile(req, res, next) {
    console.log("get single topic " + parseInt(req.params.id));
    var pupID = parseInt(req.params.id);
    db.query('select * from profiles where user_id = ?', [pupID], function (err, rows, fields) {
        if (err) {
            res.status(500)
                .json({
                    status: S.FAILED,
                    data: rows,
                    message: M.FAILED_MSG
                });
        } else {
            res.status(200)
                .json({
                    status: S.SUCCESS,
                    data: rows,
                    message: M.SUCCESS_MSG
                });
        }
    });
}

function createPrisoner(req, res, next) {
    console.log("CRETE prisoner");
    console.log(req.body);
    var sql = "INSERT INTO prisoner (Enter_date,Release_date,year,prisoner_name,crime) VALUES (?,?,?,?,?)";
    var vals = [req.body.Enter_date, req.body.Release_date, req.body.year, req.body.prisoner_name, req.body.crime];
    db.query(sql, vals, function (err, rows, fields) {
        if (err) {
            var message;
            if (err.errno == 1062) {
                message = "Account found alraedy";
            } else {
                message = "not inserted";
            }
            res.status(400)
                .json({
                    status: S.FAILED,
                    data: rows,
                    message: message
                });
        } else {
            res.status(200)
                .json({
                    status: S.SUCCESS,
                    data: rows,
                    message: M.SUCCESS_MSG
                });
        }
    });
}
 

function deletePrisoner(req, res, next) {
    console.log("get single topic " + parseInt(req.params.id));
var sql="delete from prisoner where  prisoner_id = ?"
    db.query(sql, [req.params.id], function (err, rows, fields) {
        if (err) {
            res.status(500)
                .json({
                    status: S.FAILED,
                    data: rows,
                    message: M.FAILED_MSG
                });
        } else {
            res.status(200)
                .json({
                    status: S.SUCCESS,
                    data: rows,
                    message: M.SUCCESS_MSG
                });
        }
    });
}

function updateProfile(req, res, next) {
    console.log("get single topic " + parseInt(req.params.id));
    var sql = "UPDATE profiles SET user_id=?, created_date=?,display_name=?,last_login=?,account_type=?,rank=?,score=?,favourite=?,likes=?,dislikes=? WHERE user_id = ?";
    var data = [req.body.user_id, req.body.created_date, req.body.display_name, req.body.last_login, req.body.account_type, req.body.rank, req.body.score, req.body.favourites, req.body.likes, req.body.dislikes, parseInt(req.params.id)];
    db.query(sql, data, function (err, rows, fields) {
        if (err) {
            res.status(500)
                .json({
                    status: S.FAILED,
                    data: rows,
                    message: M.FAILED_MSG
                });
        } else {
            res.status(200)
                .json({
                    status: S.SUCCESS,
                    data: rows,
                    message: M.SUCCESS_MSG
                });
        }
    });
}

module.exports = {
    getSingleProfile: getSingleProfile,
    getAllPrisoner: getAllPrisoner,
    createPrisoner: createPrisoner,
    deletePrisoner: deletePrisoner,
    updateProfile: updateProfile
};

 