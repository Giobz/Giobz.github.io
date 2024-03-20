

document.addEventListener('DOMContentLoaded', function(){
    const heading= document.getElementById("banner-heading");
    const text= document.getElementById("banner-text");
    const yesButton= document.getElementById("yes-button");
    const noButton= document.getElementById("no-button");

    yesButton.addEventListener("click", function(){
        heading.innerHTML="First lesson! Don't admit that!";
        text.innerHTML="But you did! So as a reward, your third year will now feature 30% extra dementor!";
        yesButton.banner.display="none";

        
    })

    noButton.addEventListener("click", function(){
        heading.style.display = "none";
        text.style.display = "none";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
    
});

