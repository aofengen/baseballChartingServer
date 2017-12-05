const sequelize = require('../db.js');
const pStats = sequelize.import('../models/pstats.js');

exports.addpStats = function(req,res) {
    let team = req.body.team;
    let player = req.body.player;
    let IP = req.body.ip;
    let wins = req.body.wins;
    let losses = req.body.losses;
    let saves = req.body.saves;
    let earnedrunsallowed = req.body.er;
    let runsallowed = req.body.r;
    let strikeouts = req.body.strikeouts;
    let walksallowed = req.body.walksallowed;
    let hits = req.body.hits;
    let wildpitches = req.body.wp;
    let pickoffs = req.body.po;
    let stolenbases = req.body.sb;
    let caughtstealing = req.body.cs;
    let homerunsallowed = req.body.hr;

    pStats.create({
		team: team,
        player: player,
        IP: IP,
        wins: wins,
        losses: losses,
        saves: saves,
        earnedrunsallowed: earnedrunsallowed,
        runsallowed: runsallowed,
        strikeouts: strikeouts,
        walksallowed: walksallowed,
        hits: hits,
        wildpitches: wildpitches,
        pickoffs: pickoffs,
        stolenbases: stolenbases,
        caughtstealing: caughtstealing,
        homerunsallowed: homerunsallowed
    })
    .then(
        function createSuccess(pstats) {
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

    pStats.findAll()
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

exports.updatepStats = function(req,res) {
    let player = req.body.player;
    let IP = req.body.ip;
    let wins = req.body.wins;
    let losses = req.body.losses;
    let saves = req.body.saves;
    let earnedrunsallowed = req.body.er;
    let runsallowed = req.body.r;
    let strikeouts = req.body.strikeouts;
    let walksallowed = req.body.walksallowed;
    let hits = req.body.hits;
    let wildpitches = req.body.wp;
    let pickoffs = req.body.po;
    let stolenbases = req.body.sb;
    let caughtstealing = req.body.cs;
    let homerunsallowed = req.body.hr;

    pStats.update({
        IP: IP,
        wins: wins,
        losses: losses,
        saves: saves,
        earnedrunsallowed: earnedrunsallowed,
        runsallowed: runsallowed,
        strikeouts: strikeouts,
        walksallowed: walksallowed,
        hits: hits,
        wildpitches: wildpitches,
        pickoffs: pickoffs,
        stolenbases: stolenbases,
        caughtstealing: caughtstealing,
        homerunsallowed: homerunsallowed
    },
    {where: {player: player}}
    )
    .then(
        function updateSuccess(updatedStats) {
            pStats.sync();
            res.json(updatedStats);
        },
        function updateError(err) {
            res.status(502, err.message)
        }
    );
}

