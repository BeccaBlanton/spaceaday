module.exports = function(sequelize, DataTypes){
    const POST = sequelize.define("Post",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                len: [1, 10]
            }
        },
            create_at: {
                type:DataTypes.TEXT,
            }
    });
    return POST

}