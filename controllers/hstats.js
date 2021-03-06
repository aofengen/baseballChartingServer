const sequelize = require('../db.js');
const hStats = sequelize.import('../models/hstats.js');

exports.addhStats = function(req,res) {
    let team = req.body.team;
    let player = req.body.player;
    let position = req.body.position;
    let atbats = req.body.abs;
    let singles = req.body.singles;
    let doubles = req.body.doubles;
    let triples = req.body.triples;
    let homeruns = req.body.hrs;
    let strikeouts = req.body.strikeouts;
    let walks = req.body.walks;
    let hitbypitches = req.body.hbp;
    let sacflies = req.body.sf;
    let rbis = req.body.rbis;
    let runs = req.body.runs;
    let stolenbases = req.body.sb;
    let caughtstealing =  req.body.cs;

    hStats.create({
        team: team,
        player: player,
        position: position,
        atbats: atbats,
        singles: singles,
        doubles: doubles,
        triples: triples,
        homeruns: homeruns,
        strikeouts: strikeouts,
        walks: walks,
        hitbypitches: hitbypitches,
        sacflies: sacflies,
        rbis: rbis,
        runs: runs,
        stolenbases: stolenbases,
        caughtstealing: caughtstealing
    })
    .then(
        function createSuccess(hstats) {
            res.json({
                hstats: hstats
            });
        },
        function createError(err) {
            res.status(503).send(err.message);
        }
    );
}

exports.gethStats = function(req,res) {

    hStats.findAll()
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
    let team = req.body.team
    let player = req.body.player;
    
    hStats.destroy({where: {team: team, player: player}})
    .then(
        function deleteSuccess(data) {
            res.json(data);
        },
        function deleteError(error) {
            res.json(500, err.message);
        }
    );
}

exports.updatehStats = function(req,res) {
    let team = req.body.team;
    let player = req.body.player;
    let position = req.body.position;
    let atbats = req.body.abs;
    let singles = req.body.singles;
    let doubles = req.body.doubles;
    let triples = req.body.triples;
    let homeruns = req.body.hrs;
    let strikeouts = req.body.strikeouts;
    let walks = req.body.walks;
    let hitbypitches = req.body.hbp;
    let sacflies = req.body.sf;
    let rbis = req.body.rbis;
    let runs = req.body.runs;
    let stolenbases = req.body.sb;
    let caughtstealing =  req.body.cs;

    hStats.update({
        position: position,
        atbats: atbats,
        singles: singles,
        doubles: doubles,
        triples: triples,
        homeruns: homeruns,
        strikeouts: strikeouts,
        walks: walks,
        hitbypitches: hitbypitches,
        sacflies: sacflies,
        rbis: rbis,
        runs: runs,
        stolenbases: stolenbases,
        caughtstealing: caughtstealing
        },
        {where: {team: team, player: player}} 
    )
    .then(
        function updateSuccess(updatedStats) {
           hStats.sync();
           res.json(updatedStats);
        },
        function updateError(err) {
            res.status(502, err.message);
        }
    );
}

// function bundlehStats(req) {
//     let statsBundle = {
//         team: req.body.team,
//         player: req.body.player,
//         atbats: req.body.abs,
//         singles: req.body.singles,
//         doubles: req.body.doubles,
//         triples: req.body.triples,
//         homeruns: req.body.hrs,
//         strikeouts: req.body.strikeouts,
//         walks: req.body.walks,
//         hitbypitches: req.body.hbp,
//         sacflies: req.body.sf,
//         rbis: req.body.rbis,
//         runs: req.body.runs,
//         stolenbases: req.body.sb,
//         caughtstealing: req.body.cs
//     }
//     return statsBundle;
// }