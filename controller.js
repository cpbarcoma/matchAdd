"use strict";
const db = require(__dirname + '/../lib/mysql');

exports.addMatch = (req, res) => {
    const query =  'call fn_AddMatch(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const payload = [
		req.body.match_number
		req.body.venue
		req.body.max_team_number
		req.body.stats
		req.body.scheduled_time
		req.body.time_started
		req.body.time_ended
		req.body.winning_team
		req.body.losing_team
		req.body.officials
		req.body.sport_id
		req.body.min_members_per_team
    ];

	console.log(payload);

    db.query(query, payload, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });

};