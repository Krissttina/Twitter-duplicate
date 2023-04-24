const content = document.querySelector(".content");
const commentContainer = document.querySelector(".comment-container");

const heart = document.getElementById("heart");
const hashtag = document.getElementById("hashtag");
const comment = document.getElementById("comment");

const hashtagAdd = document.getElementById("tag");
const commentAdd = document.getElementById("comm");

const addBtn = document.getElementById('addBtn');
const addcomBtn = document.getElementById('addcomBtn');

const likes = document.getElementById('likes');

//when the heard icon is clicked becomes red
//when it s clicked again its color gets back to black 
function onLike() {
  if (heart.style.color == "red") {
    heart.style.color = "black";
    likes.textContent = 0; 
  } else {
    heart.style.color = "red";
    likes.textContent = 1; 
  }
}

//when the tag icon is clicked becomes blue
//when it s clicked again its color gets back to black 
function addTag() {
  if (hashtag.style.color == "blue") {
    hashtag.style.color = "black";
    hashtagAdd.setAttribute("hidden", true);
    addBtn.disabled = true;
  } else {
    hashtag.style.color = "blue";
    hashtagAdd.removeAttribute("hidden");
    addBtn.disabled = false;
  }
}

//add new tag
addBtn.addEventListener('click', () => {
    let newtag = hashtagAdd.value;
    if(newtag == ''){
      return;
    }

    let p = document.createElement("p");
    content.appendChild(p);
    p.textContent = `#${newtag}`;
    let save = hashtagAdd.value;
    hashtagAdd.value = '';

    //create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = 'Delete';
    p.appendChild(delBtn);
    delBtn.addEventListener('click', () => {
      p.remove(); //delete text
    });

    //create edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = 'Edit';
    p.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
      hashtagAdd.value = save;
      p.remove();
    });
});

//when the heard icon is clicked becomes red
//when it s clicked again its color gets back to black 
function addComment() {
  if (comment.style.color == "grey") {
    comment.style.color = "black";
    commentAdd.setAttribute("hidden", true);
    addcomBtn.disabled = true;
  } else {
    comment.style.color = "grey";
    commentAdd.removeAttribute("hidden");
    addcomBtn.disabled = false;
  }
}

//add new comment
addcomBtn.addEventListener('click', () => {
    let newcom = commentAdd.value;

    if(newcom == ''){
      return;
    }

    let p = document.createElement("p");
    commentContainer.appendChild(p);
    p.textContent = newcom;
    let save = commentAdd.value;
    commentAdd.value = '';

    //create delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = 'Delete';
    p.appendChild(delBtn);
    delBtn.addEventListener('click', () => {
      p.remove(); //delete text
    });

    //create edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = 'Edit';
    p.appendChild(editBtn);

    editBtn.addEventListener('click', () => {
      commentAdd.value = save;
      p.remove();
    });
});