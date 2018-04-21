INSERT INTO rides (seats, price, time, user_id)
VALUES($1, $2, $3, $4)

RETURNING id;