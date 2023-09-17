const signing=document.querySelector("#b1");
    const modal=document.querySelector(".modal");
    const close=document.querySelector(".close");
    const closed=document.querySelector("#closed")
    const displayed=()=>{
        modal.style.display="block";

    }
    const opening=()=>{
        welcome.style.display="block";

    }
    const closing=()=>{
        modal.style.display="none";
    }
    const closes=()=>{
        welcome.style.display="none";
    }
    const disappear=()=>{
        welcome.style.display="none";
        modal.style.display="block";
    }
    const posting=()=>{
        posts.style.display="block";
    }
    const postclosing=()=>{
       posts.style.display="none";
    }
    const posts=document.querySelector(".posts");
    const b4=document.querySelector("#bt4");
    const postclose=document.querySelector("#closess");
    const signin=document.querySelector("#b2");
    const welcome=document.querySelector(".welcome");
    const anchor=document.querySelector("#ss");
  signing.addEventListener("click",displayed);
  signin.addEventListener("click",opening);
  close.addEventListener("click",closing);
  closed.addEventListener("click",closes);
 anchor.addEventListener("click",disappear);
b4.addEventListener("click",posting);
postclose.addEventListener("click",postclosing);