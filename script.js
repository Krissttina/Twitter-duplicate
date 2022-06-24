const heart = document.getElementById('hart');
const hashtag = document.getElementById('hashtag');
const comment = document.getElementById('comnt');

heart.addEventListener("click", () => {
    document.addEventListener("click", () => {
        if("click" % 1 == 1){
            heart.style.color = "red";
        }else{
            heart.style.color = "grey";
        }
    })
})
    

hashtag.addEventListener("click", () => {
    hashtag.style.color = "blue"; 
})

comment.addEventListener("click", () => {
    comment.style.color = "grey"; 
})