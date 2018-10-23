import {GraphQLServer} from 'graphql-yoga';


const typeDefs=`
   type Query{
       me:User!,
       post:Post!
   },
   type User{
       id:ID!,
       name:String!,
       email:String!,
       age:Int
   },

   type Post{
    id:ID!,
    title:String!,
    body:String!,
    isPublished:Boolean!

   }

`
const resolvers={
    Query:{
        me(){
          return{
              id:"alok123",
              name:"alok singh",
              email:"aloksingh32@gmail.com",
              age:20
          }  
        },
        post(){
           return {
               id:'post123',
               title:'graphql',
               body:'this is basic graphql',
               isPublished:true
           }

        }

    }
}

const server=new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('server is started');
})