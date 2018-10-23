import {GraphQLServer} from 'graphql-yoga';


const typeDefs=`
   type Query{
       greeting(name:String,title:String):String!
       me:User!,
       post:Post!,
       add(num1:Float!,num2:Float!):Float!
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
        greeting(parent,args,context,info){
            if(args.name && args.title){
              return `hello ${args.name} and i m ${args.title}`
            }else{
                return 'hello'
            }

        },
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

        },
        add(parent,args,context,info){
            return args.num1+args.num2
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