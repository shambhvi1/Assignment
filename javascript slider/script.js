let http = new XMLHttpRequest();
http.open('get', 'data.json', true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let output= "";
        let output1="";
        let output2="";
        
        for( item=0; item<data.length; item++){
          if(item==0){
            output += `<img src="${data[item].img}" id="content${item+1}" class="active" alt="Image not available">`
            output1 += `<p id="text${item+1}" class="active">${data[item].title}</p>`;
            output2 += `<button onclick = "dot(${item+1})"></button>`;
          }
else{
            output += `<img src="${data[item].img}" id="content${item+1}" alt="Image not available">`;
            output1 += `<p id="text${item+1}">${data[item].title}</p>`;
            output2 += `<button onclick = "dot(${item+1})"></button>`;
        }
      }
        
    document.querySelector(".image-container").innerHTML=output;
    document.querySelector(".text-container").innerHTML=output1;
    document.querySelector(".dot-container").innerHTML=output2;


}
}
let  i = 0; // current slide
let j = 3; // total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    console.log(document.getElementById("text" + (i+1)));
    document.getElementById("text" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
   document.getElementById("text" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    document.getElementById("text" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    document.getElementById("text" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}