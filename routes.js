'use strict';

module.exports = function (router) {

    router.get('/', function (req, res) {
        var visits;

        visits = req.session.visits || 0;
        visits += 1;
        req.session.visits = visits;

        res.send(200, String(visits));
    });

};