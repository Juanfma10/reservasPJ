import { graphqlHTTP } from 'express-graphql';
import express from "express";
import schema from "./schema.js"
import { connect } from './database.js';

const app= express();
connect();

app.get(
    '/',(req,res)=>{
        res.json({
            message:'Hello word'
        })
    }
);

//herramienta para test

app.use('/graphql',graphqlHTTP({
    graphiql: true,
    schema: schema,
}));


app.listen(3000,()=> console.log("servers on port 3000"));