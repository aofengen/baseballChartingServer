const sequelize = require('../db.js');
const Position = sequelize.import('../models/position.js');

exports.addPosition = function(req, res) {
    let position = req.body.positionName;
    let bench = req.body.bench;
    let pitcher = req.body.pitcher;

    Position
    .create({
        positionName: position,
        bench: bench,
        pitcher: pitcher
    })
    .then(
        function createSuccess(position) {
            res.json({
                position: position
            });
        },
        function createError(err) {
            res.status(503).send(err.message);
        }
    );
}

exports.getHPositions = function(req, res) {
    Position.findAll({
        where: {bench: false, pitcher: false}
    })
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.json(504, err.message);
        }
    );
};

exports.getPPositions = function(req, res) {
    Position.findAll({
        where: {bench: false, pitcher: true}
    })
    .then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.json(504, err.message);
        }
    );
};