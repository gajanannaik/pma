var db = require('../util/dbConnections').getPool();
var M = require('../util/messages').getMsg();
var S = require('../util/status').getStatusMsg();
var C = require('../util/constant').getConstantValue();


function getAllComplaint(req, res, next) {
    console.log("getAllComplaint");
    db.query('SELECT * FROM complaint', function (err, rows, fields) {
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

function createComplaint(req, res, next) {
    console.log("CRETE complaint");
    console.log(req.body);
    var sql = "INSERT INTO complaint (Accuse_name, complaint_description,complaint_type,Date,Location,Time) VALUES (?,?,?,?,?,?)";
    var vals = [req.body.Accuse_name, req.body.complaint_description, req.body.complaint_type, req.body.Date, req.body.Location, req.body.Time];
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
 

function deleteComplaint(req, res, next) {
    console.log("get single topic " + parseInt(req.params.id));
var sql="delete from complaint where  complaint_num = ?"
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
    getAllComplaint: getAllComplaint,
    createComplaint: createComplaint,
    deleteComplaint: deleteComplaint,
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