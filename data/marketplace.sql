DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS reviews;


CREATE TABLE
products (
    _id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    description VARCHAR(100) NOT NULL,
    brand VARCHAR(20) NOT NULL,
    imageUrl VARCHAR(2000) NOT NULL,
    price FLOAT NOT NULL,
    category INTEGER NOT NULL,
	createdAt TIMESTAMP default NOW(),
	modifiedAt TIMESTAMP default NOW()
	);

CREATE TABLE
reviews (
	review_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	comment VARCHAR (200) NOT NULL,
	rate INTEGER NOT NULL ,
    productId INTEGER NOT NULL, 
	postedAt TIMESTAMP default NOW(),
    createdAt TIMESTAMP default NOW(),
    FOREIGN KEY(productId) 
	REFERENCES products(_id)