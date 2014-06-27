'use strict';

module.exports = function (router) {

    router.get('/', function (req, res) {
        var session;

        session = req.session;
        session.visits = (session.visits || 0) + 1;
        res.send(200, String(session.visits));
    });

};