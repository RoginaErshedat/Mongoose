// CRUD create read update delete

/*const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID */

const {MongoClient, ObjectID}=require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/*const id= new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)*/
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) =>{
    if(error){
        console.log('Unable to connect to database')
    }

    const db =client.db(databaseName)

   /* db.collection('users').deleteMany({
        age: 22
    }).then((result) => {
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })*/

    db.collection('tasks').deleteOne({
        description : "Clean the house" 
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })




    /* db.collection('users').updateOne({
        _id: new ObjectID("602fbcff8bec650aec4b7ee0")
    }, {
        $inc: {
            age: 1
        }
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })*/

   /* db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)

    }).catch((error) =>{
        console.log(error)

    })*/
    // Read 
   /* db.collection('users').findOne({_id:new ObjectID("602fc6bb03a5d2272c7617c5")}, (error, user)=>{
        if(error){
            return console.log('Unable to fetch')
        }
        console.log(user)
    })*/

   /* db.collection('users').find({ age: 22}).toArray((error, users) =>{
        console.log(users)
    })
    db.collection('users').find({ age: 22}).count((error, count) =>{
        console.log(count)
    })*/

    /*db.collection('tasks').findOne({_id:new ObjectID("602fc3ac7c85dc18c49ff401")}, (error, task) =>{
        console.log(task)
    })
    db.collection('tasks').find({completed : false}).toArray((error, tasks) =>{
        console.log(tasks)
    })*/



    // To insert collection in database isertone (Create)
   /* db.collection('users').insertOne({
        
        name: 'Rand',
        age: 15
    }, (error, result) =>{
        if(error){
            return console.log('Unable to insert user ')
        }
        console.log(result.ops)    
    })*/

    // to insert many 
   /* db.collection('users').insertMany([
        {
            name: 'Rami',
            age : 27
        }, {
            name: 'Gina',
            age: 29

        }
    ], (error, result) =>{
        if (error){
            return console.log('Unable to insert documents')
        }
        console.log(result.ops)        
    })    */
   /* db.collection('tasks').insertMany([
        {
            description:'Clean the house',
            completed:true
        }, {
            description:'Renew inspection',
            completed:false
        }, {
            description:'Pot plants',
            completed:false
        }
    ], (error, result) =>{
        if(error){
            return console.log('Unable to insert tasks ')
        }
        console.log(result.ops)
    })*/


})