
import {GraphQLServer} from 'graphql-yoga';


// const typeDefs=`
//      type Query{
//          hello: String!,
//          location: String!,
//          name:String!,
//          bio:String!,
//          marks:Int!,
//          isBooked:Boolean,
//          weight:Float!,

//      } 

// `
// const resolvers={
//     Query:{
//         hello(){
//             return "my name is alok"
//         },
//         location(){
//             return 10
//         },
//         name(){
//             return 'alok'
//         },
//         bio(){
//             return 'hello i m an engineer'
//         },
//         marks(){
//             return 3
//         }
//     }
// }

const typeDefs=`
  type Query{
      title:String!,
      price:Float!,
      releaseyear:Int,
      rating:Float,
      inStock:Boolean!

  }
`

const resolvers={
    Query:{
       title(){
           return "Stock market"
       },
       price(){
           return 5.0
       },
       releaseyear(){
           return 2018
       },
       rating(){
           return null
       },
       inStock(){
           return true
       }
    }
}



const server=new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(()=>{
    console.log('server started');
})