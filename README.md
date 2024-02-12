# Cloudflare_Takehome
to Run:
`node server/server.js` 

Your solution must support:

[] Creating/Deleting Customers
`POST /api/user`
`DELETE /api/user/{user_id}`

[] Creating/Seleting Certificates
`POST /api/certificate/{user_id}/`
`DEL /api/certificate/{cert_id}/`


[] Listing all of a Customer’s Active Certificates
`GET /api/user/{user_id}/active`

[] Activating/Deactivating Certificates. If a certificate is either activated or de-activated, add the ability to notify an external system (via an HTTP post) about that fact. You could use http://httpbin.org or http://requestb.in/ to exercise this.
`PUT /api/certificate/{cert_id}/active`
`PUT /api/certificate/{cert_id}/deactive`

[] Persistence (data must survive computer restarts)

***************************
# Design Choices
Database/Schema: The design requirements called for 2 central pieces of data:
1) Users
2) Certificates

Because Certificates can only belong to one User, but one user can have multiple Certificates. There is a one to many relationship between users (one) and Certificates (many).

Because of this simple relationship an ideal choice would be a NoSQL key-value store. (MongoDB/DynamoDB/Cassandra)

For the requirement of being able to get all the Certificates of a user, I figured the best way to easily access this information would be if in the User Schema had a key that was mapped to an array. (Mongo/Cassandra)

Following up with having to be fault tolerance/ persistance, Using an ACID compliant database is ideal. The most recent version of MongoDB is actually ACID compliant with sessions. (Mongo/Cassandra)

If thinking about scaling, mongoDB has better horizontally scaling and you can shard the user data by name in to distrubute the reads. (I'm assuming this is a Read-Heavy application). 

An I'm also more familiar with Mongo so it was faster to implement.

User
_id:
name:
email:
password:
certificates: []

Certificate
_id:
active:
body:
key:
