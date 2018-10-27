const Query={
    greeting(parent,args,{db},info){
        if(args.name && args.title){
          return `hello ${args.name} and i m ${args.title}`
        }else{
            return 'hello'
        }

    },

    
     user(parent,args,{db},info){
         if(!args.query){
             return db.users
         }
         return db.users.filter((user)=>{
            return user.name.toLowerCase().includes(args.query.toLowerCase())
         })
     },
     post(parent,args,{db},info){
         if(!args.query){
             return db.posts;
         }
         return db.posts.filter((post)=>{
             return post.title.toLowerCase().includes(args.query.toLowerCase()) ||post.body.toLowerCase().includes(args.query.toLowerCase());
         })
     },

     comments(parent,arg,{db},info){
          return db.comments  
     }

}

export {Query as default};