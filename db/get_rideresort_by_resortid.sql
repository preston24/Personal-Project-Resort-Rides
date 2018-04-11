SELECT *
FROM rides_resorts rr
JOIN rides r on rr.ride_id = r.id
JOIN users u on u.id = r.user_id
JOIN resorts res on res.id = rr.resort_id
WHERE resort_id = $1