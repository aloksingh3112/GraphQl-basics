const Subscription={
  count:{
      subscribe(parent,args,{pubsub},info){
          let count=0;
          setInterval(()=>{
             count++;
             pubsub.publish('count',{
                 count
             })
          },1000)
          return pubsub.asyncIterator('count');

      }
  },

  comment:{
      subscribe(parent,{postId},{db,pubsub},info){

        const post=db.posts.find((post)=>post.id==postId && post.isPublished);
        if(!post){
            throw new Error("no post found");
        }

        return pubsub.asyncIterator(`comment ${postId}`);

      }
  }
}
export {Subscription as default} 