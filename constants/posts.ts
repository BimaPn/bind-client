const fakePosts = [
    {
        id : '1',
        user : {
            name : "Lolita Angelina",
            username : 'lolitaangel',
            image : "/people/person4.jpg",
            verified : false
        },
        caption : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Rerum error ullam vero, deserunt in cumque, quasi magnam eius eligendi nam 
                   temporibus possimus est delectus explicabo?`,
        image : "/people/person4.jpg",
        likeCount : 434,
        commentCount : 5,
        created_at : "An hour ago",
        comments : [{
            user : {
              name : `babanv`,
              image : `/person.jpg`,
              verified : false
            },
            comment : `comment`,
            created_at : '1m ago'
          }],
        isLiked : false,
        isSaved : false,
    },
    {
        id : '2',
        user : {
            name : "Cristiano Ronaldo",
            username : 'cristiano',
            image : "/people/cristiano_ronaldo.jpg",
            verified : true
        },
        caption : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                   Rerum error ullam vero, deserunt in cumque.`,
        image : "/cristiano_post.jpg",
        likeCount : 443,
        commentCount : 42,
        created_at : "A day ago",
        comments : [],
        isLiked : true,
        isSaved : true
    },
    {
        id : '3',
        user : {
            name : "Andrew Tate",
            username : 'andrewtate',
            image : "/people/andrew_tate.jpg",
            verified : true
        },
        caption : `TOP G here 😎👌`,
        image : "/andrew_post.jpg",
        likeCount : 32,
        commentCount : 2,
        created_at : "2 days ago",
        comments : [],
        isLiked : false,
        isSaved : true
    },
]

export default fakePosts