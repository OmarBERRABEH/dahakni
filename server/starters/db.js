import mongoose from 'mongoose';
import serverConfig from '../config';
import dummyData from '../dummyData';


const dbStarer = () => {
    // Set native promises as mongoose promise
    mongoose.Promise = global.Promise;

    // MongoDB Connection
    mongoose.connect(serverConfig.mongoURL, (error) => {
        if (error) {
            console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
            throw error;
        }

        // feed some dummy data in DB.
        dummyData();
    });
}

export default dbStarer;