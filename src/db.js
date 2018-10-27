let users=[
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

let posts=[
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
];

let comments=[
    {
        id:'123',
        text:'nice one',
        author:'10',
        post:'1'
    },
    {
        id:'456',
        text:'awesome one',
        author:'11',
        post:'2'
    },
    {
        id:'789',
        text:'smart one',
        author:'12',
        post:'3'
    }
    ,
    {
        id:'1011',
        text:'gg one',
        author:'11',
        post:'2'
    }
]
const db={
    users,
    posts,
    comments
}
export {db as default};