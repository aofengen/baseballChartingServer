const Auth = require('./controllers/auth.js');
const Team = require('./controllers/teams.js');
const Player = require('./controllers/players.js');
const Position = require('./controllers/positions.js');
const hStats = require('./controllers/hstats.js');
const pStats = require('./controllers/pstats.js');
// const passportService = require('./services/passport.js');
// const passport = require('passport');

// const requireAuth = passport.authenticate('jwt', {session: false});
// const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {
    app.post('/api/signup', Auth.signup);
    app.post('/api/signin', Auth.signin);
    app.post('/api/team', Team.addTeam);
    app.post('/api/player', Player.addPlayer);
    app.post('/api/hstats', hStats.addhStats);
    app.post('/api/pstats', pStats.addpStats);

    app.get('/api/team', Team.getTeams);
    app.get('/api/player', Player.getPlayers);
    app.get('/api/hposition', Position.getHPositions);
    app.get('/api/pposition', Position.getPPositions);
    app.get('/api/hstats', hStats.gethStats);
    app.get('/api/pstats', pStats.getpStats)

    app.delete('/api/team', Team.deleteTeam);
    app.delete('/api/player', Player.deletePlayer);
    app.delete('/api/hstats', hStats.deletehStats);
    app.delete('/api/pstats', pStats.deletepStats);

    app.put('/api/hstats', hStats.updatehStats);
    app.put('/api/pstats', hStats.updatepStats);
}