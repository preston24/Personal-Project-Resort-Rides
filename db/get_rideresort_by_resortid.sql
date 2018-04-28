SELECT rr.id as rides_resort_id, r.id as ride_id, r.seats, r.price, r.date, r.time, u.id as user_id, u.username, res.id as resort_id 
FROM rides_resorts rr
JOIN rides r on rr.ride_id = r.id
JOIN users u on u.id = r.user_id
JOIN resorts res on res.id = rr.resort_id
WHERE resort_id = $1
AND
r.seats > 0;