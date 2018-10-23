import {GraphQLServer} from 'graphql-yoga';

const users=[
    {
    id:"10",
    name:"alok",
    email:"aloksingh12@gmail.com",
    age:12,
    
   },
   {
    id:"11",
    name:"prem",
    email:"prem1@gmail.com",
    age:8, 
   
   },{
   id:"12",
   name:"avinash",
   email:"aloksingh1@gmail.com",
   
   
   }
];

const posts=[
    {
        id:'1',
        title:"math",
        body:"About algebric express",
        isPublished:true,
        author:'10'

    },
    {
        id:'2',
        title:"discrete",
        body:"different types of data",
        isPublished:true,
        author:'10'

    },
    {
        id:'3',
        title:"myth",
        body:"myth of indian education system",
        isPublished:true,
        author:'12'

    }
]


    //    add(num1:Float!,num2:Float!):Float!,
    //    marks:[Int!]!,
    //    addNumbers(numbers:[Float!]!):Float!
const typeDefs=`
   type Query{
       greeting(name:String,title:String):String!
       user(query:String):[User!]! ,
       post(query:String):[Post!]!

    },
   type User{
       id:ID!,
       name:String!,
       email:String!,
       age:Int,
       post:[Post!]!
   },

   type Post{
    id:ID!,
    title:String!,
    body:String!,
    isPublished:Boolean!,
    author:User!

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
        // me(){
        //   return{
        //       id:"alok123",
        //       name:"alok singh",
        //       email:"aloksingh32@gmail.com",
        //       age:20
        //   }  
        // },
        // post(){
        //    return {
        //        id:'post123',
        //        title:'graphql',
        //        body:'this is basic graphql',
        //        isPublished:true
        //    }

        //  },
         user(parent,args,context,info){
             if(!args.query){
                 return users
             }
             return users.filter((user)=>{
                return user.name.toLowerCase().includes(args.query.toLowerCase())
             })
         },
         post(parent,args,context,info){
             if(!args.query){
                 return posts;
             }
             return posts.filter((post)=>{
                 return post.title.toLowerCase().includes(args.query.toLowerCase()) ||post.body.toLowerCase().includes(args.query.toLowerCase());
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

    },
    Post:{
        author(parent,args,context,info){
            console.log("data is ",parent);
           return users.find((user)=>{
                return user.id==parent.author
           })
        }
    },
    User:{
        post(parent,args,context,info){
            return posts.filter((post)=>{
               return post.author==parent.id
            })
           
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