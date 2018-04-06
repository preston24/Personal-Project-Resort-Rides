CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    profile_pic TEXT,
    auth_id VARCHAR
);

CREATE TABLE resorts (
    id SERIAL PRIMARY KEY,
    resort_name VARCHAR,
    img_url TEXT
);

CREATE TABLE rides (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    seats INTEGER,
    price DECIMAL,
    date DATE,
    time VARCHAR
);

CREATE TABLE rides_resorts (
    id SERIAL PRIMARY KEY,
    ride_id INTEGER REFERENCES rides(id),
    resort_id INTEGER REFERENCES resorts(id)
);

CREATE TABLE rides_passengers (
    id SERIAL PRIMARY KEY,
    ride_id INTEGER REFERENCES rides(id),
    user_id INTEGER REFERENCES users(id)
);