const Auth = require('./controllers/auth.js');
const Team = require('./controllers/teams.js');
const Player = require('./controllers/players.js');
const Position = require('./controllers/positions.js');
// const passportService = require('./services/passport.js');
// const passport = require('passport');

// const requireAuth = passport.authenticate('jwt', {session: false});
// const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {
    app.post('/api/signup', Auth.signup);
    app.post('/api/signin', Auth.signin);
    app.post('/api/team', Team.addTeam);
    app.post('/api/player', Player.addPlayer);
    app.post('/api/hstats')
    app.post('/api/pstats')

    app.get('/api/team', Team.getTeams);
    app.get('/api/player', Player.getPlayers);
    app.get('/api/position', Position.getPositions);
    api.get('/api/hstats')
    app.get('/api/pstats')

    app.delete('/api/team', Team.deleteTeam);
    app.delete('/api/player', Player.deletePlayer);
    app.delete('/api/hstats')
    app.delete('/api/pstats')

    app.update('/api/hstats')
    app.update('/api/pstats')
}