DELETE FROM rides_resorts
WHERE ride_id = $1;
DELETE FROM rides 
WHERE id = $1;