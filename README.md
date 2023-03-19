# Music Library

A project as part of my boot camp with Command Shift (formerly Manchester Codes). This project is an app for managing a music library by designing and implementing an API which can perform crud operations on a database.

## Concepts

-Database design

-SQL

-Postgres

-CRUD Operations

## Author
Sarah Moran: https://github.com/sarahlmoran

## Installation 

1. Install docker

2. In your terminal: 

   ```cli
   docker run --name postgres -p <pgPortNumber>:<pgPortNumber> -e POSTGRES_PASSWORD=<yourPassword> -d postgres
   ```


3. Clone repo then move into the local repo and install the app dependencies:

   ```
   git clone https://github.com/sarahlmoran/music-library
   cd /path/to/repo
   npm install
   ```

4. Create .env and .env.test files to load the environment variables. Please note that the variable for PGDATABASE will need to be different in the .env and .env.test to avoid conflicts

   ```
   PGUSER=<user>
   PGHOST=localhost
   PGPASSWORD=<yourPassword>
   PGDATABASE=<nameOfDatabase>
   PGPORT=<pgPortNumber>
   PORT=<port>
   ```

5. Finally start the API using:

   ```
   npm start 

## Application dependencies

```
 "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "helmet": "^6.0.1",
    "morgan": "^1.10.0",
    "pg": "^8.9.0",
    "postgres-migrations": "^5.3.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^4.6.2"
  }
```

## Developer dependencies

```
  "devDependencies": {
    "chai": "^4.3.7",
    "dotenv": "^16.0.3",
    "eslint": "^8.34.0",
    "mocha": "^10.2.0",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.3"
  }
```

## Check it out

Check out this API on: https://music-library-database-nqmo.onrender.com/swagger/