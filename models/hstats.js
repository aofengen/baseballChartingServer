module.exports = function(sequelize, DataTypes){
	let hStats = sequelize.define('hstats', {
		team: DataTypes.STRING,
        player: DataTypes.STRING,
        atbats: DataTypes.NUMBER,
        singles: DataTypes.NUMBER,
        doubles: DataTypes.NUMBER,
        triples: DataTypes.NUMBER,
        homeruns: DataTypes.NUMBER,
        strikeouts: DataTypes.NUMBER,
        walks: DataTypes.NUMBER,
        hitbypitches: DataTypes.NUMBER,
        sacflies: DataTypes.NUMBER,
        rbis: DataTypes.NUMBER,
        runs: DataTypes.NUMBER,
        stolenbases: DataTypes.NUMBER,
        caughtstealing: DataTypes.NUMBER
	});
	return hStats;
}