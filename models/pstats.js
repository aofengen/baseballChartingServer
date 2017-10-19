module.exports = function(sequelize, DataTypes){
	let pStats = sequelize.define('pstats', {
		team: DataTypes.STRING,
        player: DataTypes.STRING,
        IP: DataTypes.NUMBER,
        wins: DataTypes.NUMBER,
        losses: DataTypes.NUMBER,
        saves: DataTypes.NUMBER,
        earnedrunsallowed: DataTypes.NUMBER,
        runsallowed: DataTypes.NUMBER,
        strikeouts: DataTypes.NUMBER,
        walksallowed: DataTypes.NUMBER,
        hits: DataTypes.NUMBER,
        wildpitches: DataTypes.NUMBER,
        pickoffs: DataTypes.NUMBER,
        stolenbases: DataTypes.NUMBER,
        caughtstealing: DataTypes.NUMBER,
        homerunsallowed: DataTypes.NUMBER
	});
	return pStats;
}