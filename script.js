const heart = document.getElementById('heart');
const hashtag = document.getElementById('hashtag');
const comment = document.getElementById('comment');

const hashtagAdd = document.getElementById('tag');
const commentAdd = document.getElementById('comm');
    
function onLike(){
    if(heart.style.color == "red"){
        heart.style.color = "black";
    }else{
        heart.style.color = "red";
    }
}

function addTag(){
    if(hashtag.style.color == "blue"){
        hashtag.style.color = "black";
        
    }else{
       hashtag.style.color = "blue"; 
       hashtagAdd.removeAttribute('hidden');
    }

    if(hashtag.value){
        let newtag = hashtagAdd.value;
        console.log(newtag);
    }
}

function addComment(){
    if(comment.style.color == "grey"){
        comment.style.color = "black"; 
    }else{
        comment.style.color = "grey";
        commentAdd.removeAttribute('hidden');
    }

    if(commentAdd.value){
        let newcom = commentAdd.value;
        console.log(newcom);
    }
}