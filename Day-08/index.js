// !Data Storage:
//?store data and information of users using databases
// !Types of Data Database Mangament Systems
//? SQL | NoSQL (not only sql)
//* 1) SQL =>is a generalized form of database(not database in itself) that data in tabular formats.
//* 2) NoSQL=>is a generalized form of database(not database in itself) that sotres data in JSON formats (MongoDB is specific type of NoSQl).
// what and why MongoDB?
//*what is MongoDB: is a noSQL DBMS that stores data in json formats.
//*Why MongoDB: to store data and information about our users.

// Terminologies - collections, documents,schemas key models
//there are tow servvers in the Backend (1)Application Server(Node.js) (2)Database Server().
//*Application Server: manages routes,requests etc (manages everything except data eg login,logout etc).
//*Database Server:

//!Terminologies: //Database ==> Collections==> Documents ==> schemas ==>  key models
//?Collections:
//*If Project A has different types of related data—like sales, customers, and products—then in backend or database terms, you can refer to them as:
//*Sales Collection of A
//*Customers Collection of A
//*Products Collection of A
//*Each “collection” represents a group of structured records related to a specific aspect of Project A, especially if you're using a NoSQL database like MongoDB. In SQL databases, you'd call them tables instead of collections, but the idea is similar.
//<===========================================================>
//?Documents:
//*refers to a single or particular or spcific data or info about collection.for example from "collection" of users the info of a single user is called as "Document".explainaation given below using code:
//<================================================================>
//! CODE (what we do in code)                  Database(what happens in data base)
//!<===============================================================================>
//*Mongoose.connect                            database create
//*Model.create                                creates collection
//*CREATE                                      creates document
