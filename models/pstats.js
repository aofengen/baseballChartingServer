module.exports = function(sequelize, DataTypes){
	let pStats = sequelize.define('pstats', {
		team: DataTypes.STRING,
        player: DataTypes.STRING,
        position: DataTypes.STRING,
        IP: DataTypes.INTEGER,
        wins: DataTypes.INTEGER,
        losses: DataTypes.INTEGER,
        saves: DataTypes.INTEGER,
        earnedrunsallowed: DataTypes.INTEGER,
        runsallowed: DataTypes.INTEGER,
        strikeouts: DataTypes.INTEGER,
        walksallowed: DataTypes.INTEGER,
        hits: DataTypes.INTEGER,
        wildpitches: DataTypes.INTEGER,
        pickoffs: DataTypes.INTEGER,
        stolenbases: DataTypes.INTEGER,
        caughtstealing: DataTypes.INTEGER,
        homerunsallowed: DataTypes.INTEGER
	});
	return pStats;
}