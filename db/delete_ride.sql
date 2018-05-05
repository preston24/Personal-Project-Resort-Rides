DELETE FROM rides_resorts
WHERE ride_id = $1 AND ride_id IN (SELECT id FROM rides WHERE user_id = $2);
DELETE FROM rides 
WHERE id = $1 AND user_id = $2;