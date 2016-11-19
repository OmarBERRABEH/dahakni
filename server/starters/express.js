import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import path from 'path';





import posts from '../routes/post.routes';
import serverConfig from '../config';
import {reactStarter, renderFullPage } from './reactServer';



const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};


const applyMidlware = (app) => {
	app.use(compression());
	app.use(bodyParser.json({ limit: '20mb' }));
	app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
	app.use(Express.static(path.resolve(__dirname, '../dist')));
};


const applyRouter = (app) => {
	app.use('/api', posts);
};


const requestHandler = (app) => {
	app.use(reactStarter);
};

const startListen = (app) => {
	app.listen(serverConfig.port, (error) => {
	  if (!error) {
	    console.log(`MERN is running on port: ${serverConfig.port}! Build something amazing!`); // eslint-disable-line
	  }
	});
};

const expressStarter = () => {

 const app = new Express();

 // Apply body Parser and server public assets and routes
 applyMidlware(app);
 //router posts api
 applyRouter(app);
 // Server Side Rendering based on routes matched by React-router.
 requestHandler(app);
 // start app
 startListen(app);

 return app;
}



export default expressStarter;