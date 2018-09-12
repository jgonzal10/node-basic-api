const noteRoutes = require('./note_routes');
const noteDates = require('./dates_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  noteDates(app, db);
  // Other route groups could go here, in the future
};