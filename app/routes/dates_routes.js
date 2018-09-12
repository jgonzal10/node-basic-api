module.exports = function(app, db) {
    db.collection('notes')
    app.post('/dates', (req, res) => {
        // You'll create your date here.
        res.send(new Date())
      });
};