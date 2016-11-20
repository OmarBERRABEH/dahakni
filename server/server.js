



// // Initialize the Express App
// const app = new Express();


// React And Redux Setup



import dbStarter from './starters/db';
import ExpressStarter from './starters/express';
import webpackStarter from './starters/webpack';

dbStarter();
const app = ExpressStarter();
webpackStarter(app);

export default  app;
