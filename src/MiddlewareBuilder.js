
const myCustomMiddleware = (api) => (next) => (action) => {
    console.log('Middleware triggered:', action.type);
    return next(action);
  };
  
  const MiddlewareBuilder = (getDefaultMiddleware) => {
    const existingMiddleware = getDefaultMiddleware();
    return [myCustomMiddleware, ...existingMiddleware];
  };
  
  module.exports = MiddlewareBuilder;
  