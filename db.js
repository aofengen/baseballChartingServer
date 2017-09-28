const Sequelize = require('sequelize');
let sequelize = new Sequelize("baseballCharting", "postgres", "9074dewberry1136", {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function(){
		console.log('connected to baseballCharting postgres db');
	},
	function(err){
		console.log(err);
	}
);

let User = sequelize.import('./models/user.js');
let Team = sequelize.import('./models/team.js');
let Player = sequelize.import('./models/player.js');
let Position = sequelize.import('./models/position.js');
module.exports = sequelize;