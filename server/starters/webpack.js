// Webpack Requirements
import webpack from 'webpack';
import config from '../../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';


const webpackStarter = (app) => {
	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  const compiler = webpack(config);
	  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
	  app.use(webpackHotMiddleware(compiler));
	}
};


export default webpackStarter;