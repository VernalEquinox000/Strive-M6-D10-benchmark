/*
    Solo Challenge: Market Place / Amazon Like + Postgres
    Upgrade your previously created API using a SQL Postgres Database. (Sequelize is optional , but if you dont use its better.)
    //---------------------------------------------------------
    START FROM PREVIOUS VERSION OF AMAZON / MARKETPLACE API!
    //---------------------------------------------------------
    Every product in your marketplace has this information:
    {
        "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
        "name": "app test 1",  //REQUIRED
        "description": "somthing longer", //REQUIRED
        "brand": "nokia", //REQUIRED
        "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
        "price": 100, //REQUIRED
        "category": "smartphones"
        "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
        "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
    }
    And the reviews looks like:
    {
        "_id": "123455", //SERVER GENERATED
        "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
        "rate": 3, //REQUIRED, max 5
        "productId": "5d318e1a8541744830bef139", //REQUIRED reference to Products Table
        "createdAt": "2019-08-01T12:46:45.895Z"  //SERVER GENERATED
    },
    //DATABASE
    Create the necessary tables for handling:
    - Products 
    - Reviews
    - [EXTRA] Shopping Cart
    -[EXTRA] Categories,Filter products by category
    //BACKEND
    You are in charge of building the Backend using NodeJS + Express + PG. 
    The backend should include the extra following features:
    CRUD for Products ( /products GET, POST, DELETE, PUT)
    CRUD for Reviews ( /reviews GET, POST, DELETE, PUT)
    Extra method for product's image upload (POST /product/{id}/upload)
    Add an extra method to get all the reviews of a specific product (GET /product/{id}/Reviews)
    [EXTRA] Create the tables and the required endpoints for Shopping cart
    //NOTE:
    For GET methods, add PAGINATION in order to get elements X as a Time
    //FRONTEND
    Check from the frontend if everything is still working ;)
*/