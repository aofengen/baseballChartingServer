const sequelize = require('../db.js');
const hStats = require('../models/hstats.js');

exports.addhStats = function(req,res) {
    let stats = bundlehStats(req);

    hStats.create(stats)
    .then(
        function createSuccess(hstats) {
            res.json({
                hstats: stats
            });
        },
        function createError(err) {
            res.status(503).send(err.message);
        }
    );
}

exports.gethStats = function(req,res) {
    let player = req.body.player;

    hStats.findAll({where: {player: player}})
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.json(504, err.message);
        }
    );
}

exports.deletehStats = function(req,res) {
    let player = req.body.player;
    
    hStats.destroy({where: {player: player}})
    .then(
        function deleteSuccess(data) {
            res.json(data);
        },
        function deleteError(error) {
            res.json(500, err.message);
        }
    );
}

//exports.updatehStats = function(req,res) {}

function bundlehStats(req) {
    let statsBundle = {
        team: req.body.team,
        player: req.body.player,
        atbats: req.body.abs,
        singles: req.body.singles,
        doubles: req.body.doubles,
        triples: req.body.triples,
        homeruns: req.body.hrs,
        strikeouts: req.body.strikeouts,
        walks: req.body.walks,
        hitbypitches: req.body.hbp,
        sacflies: req.body.sf,
        rbis: req.body.rbis,
        runs: req.body.runs,
        stolenbases: req.body.sb,
        caughtstealing: req.body.cs
    }
    return statsBundle;
}