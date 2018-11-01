import {GraphQLServer,PubSub} from 'graphql-yoga';
import db from './db';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import User from './resolvers/user';
import Post from './resolvers/post';
import Comment from './resolvers/comment';
import Subscription from './resolvers/subscribe';

const pubsub=new PubSub();


const server=new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Mutation,
        User,
        Post,
        Comment,
        Subscription
    },
    context:{
        db,
        pubsub

    }
})

server.start(()=>{
    console.log('server is started');
})