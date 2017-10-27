module.exports = function(sequelize, DataTypes){
	let hStats = sequelize.define('hstat', {
        owner: DataTypes.INTEGER,
		team: DataTypes.STRING,
        player: DataTypes.STRING,
        atbats: DataTypes.INTEGER,
        singles: DataTypes.INTEGER,
        doubles: DataTypes.INTEGER,
        triples: DataTypes.INTEGER,
        homeruns: DataTypes.INTEGER,
        strikeouts: DataTypes.INTEGER,
        // walks: DataTypes.INTEGER,
        // hitbypitches: DataTypes.INTEGER,
        // sacflies: DataTypes.INTEGER,
        // rbis: DataTypes.INTEGER,
        // runs: DataTypes.INTEGER,
        // stolenbases: DataTypes.INTEGER,
        // caughtstealing: DataTypes.INTEGER
	});
	return hStats;
}