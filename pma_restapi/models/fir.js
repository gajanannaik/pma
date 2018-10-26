var db = require('../util/dbConnections').getPool();
var M = require('../util/messages').getMsg();
var S = require('../util/status').getStatusMsg();
var C = require('../util/constant').getConstantValue();


function getAllFir(req, res, next) {
    console.log("getAllFir");
    db.query('SELECT * FROM police_fir', function (err, rows, fields) {
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

function createFir(req, res, next) {
    console.log("CRETE police_fir");
    console.log(req.body);
    var sql = "INSERT INTO police_fir (Fir_no,Date,Time,Chargesheet_no) VALUES (?,?,?,?)";
    var vals = [req.body.Fir_no, req.body.Date, req.body.Time, req.body.Chargesheet_no];
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
 

function deleteFir(req, res, next) {
    console.log("get single topic " + parseInt(req.params.id));
var sql="delete from police_fir where  Fir_no = ?"
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
    getAllFir: getAllFir,
    createFir: createFir,
    deleteFir: deleteFir,
    updateProfile: updateProfile
};


/*


function getProfile(req, res, next) {
    console.log("getProfile");
    db.query('select * from profile where userid = ?', [req.params.id], function(err, rows, fields) {
        if (err) {
            res.status(500)
                .json({
                    status: S.FAILED,
                    data: rows,
                    message: M.FAILED_MSG
                });
        } else {
            if (rows.length == 1) {
                res.status(200)
                    .json({
                        status: S.SUCCESS,
                        data: rows,
                        message: M.SUCCESS_MSG
                    });
            } else {
                res.status(201)
                    .json({
                        status: S.CREATED,
                        data: rows,
                        message: M.SUCCESS_MSG
                    });
            }

        }
    });
}


function updateLike(req, res, next) {
    console.log("updateProfile");
    db.query('update profile set topic_id=?, user_id=?, question=?, hint=?, solution=?, answers=? where id=?', [req.body.topic_id, req.body.user_id, req.body.question, req.body.hint, req.body.solution, req.body.answers,
        parseInt(req.params.id)
    ], function(err, rows, fields) {
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


function updateDisLike(req, res, next) {
    console.log("updateProfile");
    db.query('update profile set topic_id=?, user_id=?, question=?, hint=?, solution=?, answers=? where id=?', [req.body.topic_id, req.body.user_id, req.body.question, req.body.hint, req.body.solution, req.body.answers,
        parseInt(req.params.id)
    ], function(err, rows, fields) {
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

function createProfile() {
    console.log("createProfile");
    var sql = 'insert into profile(question, hint, solution, topic_id,user_id,answers) values(';
    sql += "'" + req.body.question + "','" + req.body.hint + "','" + req.body.solution + "'," + req.body.topic_id + "," + req.body.profile_id + ",'" + req.body.answer + "')";
    db.query(sql, function(err, rows, fields) {
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
    //updateProfile: updateProfile,
    //createProfile: createProfile,
    getProfile: getProfile
};

*/