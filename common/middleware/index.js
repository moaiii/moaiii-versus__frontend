const glob = require( 'glob' );
const path = require( 'path' );

/**
 * Global middleware object containing all middleware functions
 * used by entire app 
 */
let middlewares = {};

/**
 * Dynamically slice all the middleware files in this folder 
 * into a big global middleware object which the store can 
 * use along with the action type (string) to look up the function 
 * to fire 
 */
glob.sync( './*.js' ).forEach( file => {
  let _pathName = path.resolve( file );
  let _pathSlices = _pathName.split('/');
  let _fileName = _pathSlices[_pathSlices.length - 1];
  let _moduleName = _fileName.split('.middleware.js')[0];

  middlewares = {
    ...middlewares, 
    ...require( `./${_fileName}` ) 
  };
});

// example of calling a middleware function
middlewares['A_MIDDLEWARE_FUNCTION']();

/**
 * export the middlewares for the redux store to consume 
 */
// export default (store, next, action) => {

//   let middleware = middlewares[action.type];

//   if (middleware) {
//     try {
//       middleware(store, next, action);
//     } 
//     catch(e) {
//       throw new Error(`[VERSUS] ${e}`);
//     }
//   }

//   next(action);
// };