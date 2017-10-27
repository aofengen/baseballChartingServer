const sequelize = require('../db.js');
const pStats = sequelize.import('../models/pstats.js');

exports.addpStats = function(req,res) {
    let stats = bundlepStats(req);

    hStats.create(stats)
    .then(
        function createSuccess(hstats) {
            res.json({
                pstats: stats
            });
        },
        function createError(err) {
            res.status(503).send(err.message);
        }
    );
}

exports.getpStats = function(req,res) {
    let player = req.body.player;

    pStats.findAll({where: {player: player}})
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.json(504, err.message);
        }
    );
}

exports.deletepStats = function(req,res) {
    let player = req.body.player;
    
    pStats.destroy({where: {player: player}})
    .then(
        function deleteSuccess(data) {
            res.json(data);
        },
        function deleteError(error) {
            res.json(500, err.message);
        }
    );
}

//exports.updatepStats = function(req,res) {}

function bundlepStats(req) {
    let statsBundle = {
		team: req.body.team,
        player: req.body.player,
        IP: req.body.ip,
        wins: req.body.wins,
        losses: req.body.losses,
        saves: req.body.saves,
        earnedrunsallowed: req.body.er,
        runsallowed: req.body.r,
        strikeouts: req.body.strikeouts,
        walksallowed: req.body.walks,
        hits: req.body.hits,
        wildpitches: req.body.wp,
        pickoffs: req.body.po,
        stolenbases: req.body.sb,
        caughtstealing: req.body.cs,
        homerunsallowed: req.body.hr
    }
    return statsBundle;
}