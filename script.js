const heart = document.getElementById('hart');
const hashtag = document.getElementById('hashtag');
const comment = document.getElementById('comnt');
    
function getRed(){
    if(heart.style.color == "red"){
        heart.style.color = "black";
    }else{
        heart.style.color = "red";
    }
}


function getBlue(){
    if(hashtag.style.color == "blue"){
        hashtag.style.color = "black"; 
    }else{
       hashtag.style.color = "blue"; 
    }
}
    

function getMarked(){
    if(comment.style.color == "grey"){
        comment.style.color = "black"; 
    }else{
        comment.style.color = "grey"; 
    }
}
