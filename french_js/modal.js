
const enlarged = document.getElementById("largeImg");
const enlargedImg = document.getElementById("large-content-img");
const span = document.getElementsByClassName("close")[0];

const images = document.getElementsByClassName("images")

console.log(images)

for(let i = 0; i < images.length; i++)
  images[i].onclick = function(event)
  {
    console.log(event)
    enlarged.style.display = "block";
    enlargedImg.src = event.target.src
  }

span.onclick = function()
{
  enlarged.style.display = "none";
}
