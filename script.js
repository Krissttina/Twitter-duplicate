const heart = document.getElementById('hart');
const hashtag = document.getElementById('hashtag');
const comment = document.getElementById('comnt');
    
heart.addEventListener("click", () => {
        heart.style.color = "red";
}) 


hashtag.addEventListener("click", () => {
    hashtag.style.color = "blue"; 
})

comment.addEventListener("click", () => {
    comment.style.color = "grey"; 
})
