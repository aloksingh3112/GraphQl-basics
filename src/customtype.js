import {GraphQLServer} from 'graphql-yoga';

const users=[
    {
    id:"alok123",
    name:"alok",
    email:"aloksingh12@gmail.com",
    age:12,
   },
   {
    id:"prem123",
    name:"prem",
    email:"prem1@gmail.com",
    age:8,  
   },{
   id:"avinash123",
   name:"avinash",
   email:"aloksingh1@gmail.com",
   
   }
]
    //    add(num1:Float!,num2:Float!):Float!,
    //    marks:[Int!]!,
    //    addNumbers(numbers:[Float!]!):Float!
const typeDefs=`
   type Query{
       greeting(name:String,title:String):String!
       me:User!,
       post:Post!,
       user(query:String):[User!]! 

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
         user(parent,args,context,info){
             if(!args.query){
                 return users
             }
             return users.filter((user)=>{
                return user.name.toLowerCase().includes(args.query.toLowerCase())
             })
         }



        // add(parent,args,context,info){
        //     return args.num1+args.num2
        // },
        // marks(){
        //     return [1,2,3,5];
        // },
        // addNumbers(parent,args,context,info){
        //     if(args.numbers.length===0)
        //     {
        //         return 0;
        //     }
        //     return args.numbers.reduce((accumulator,current)=>accumulator+current)
        // }

    }
}

const server=new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=>{
    console.log('server is started');
})