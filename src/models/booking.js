import sequelize from '../config/db';
import Sequelize from 'sequelize';

/*
    Define model of the db
*/
const Booking = sequelize.define('booking', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    time: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false,
    freezeTableName: true
});

export default Booking;