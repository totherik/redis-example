'use strict';

module.exports = function (router) {

    router.get('/', function (req, res) {
        var visits;

        visits = req.session.visits === undefined ? 0 : req.session.visits;
        visits += 1;
        req.session.visits = visits;

        res.send(200, String(visits));
    });

};