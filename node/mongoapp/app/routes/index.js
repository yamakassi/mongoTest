const noteRoutes = require("./note_routes");
const routesRedis = require("./redis_routes");
module.exports = function (app, db,redis) {
  noteRoutes(app, db,redis);
  routesRedis(app, db, redis);
  // Тут, позже, будут и другие обработчики маршрутов
};
