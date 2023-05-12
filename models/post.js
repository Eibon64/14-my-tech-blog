const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // title column
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // content column
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                // content must be at least 10 characters long
                len: [10]
            }
        },
        // user_id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    // configure metadata, including naming conventions
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;