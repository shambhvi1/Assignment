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
            output2 += `<button onclick = "slider1.dot(${item+1})"></button>`;
        }
      }
        
    document.querySelector(".image-container").innerHTML=output;
    document.querySelector(".text-container").innerHTML=output1;
    document.querySelector(".dot-container").innerHTML=output2;


}
}
const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");
 class Slider
{
    constructor (currentSlide ,length)
    {
        this.i=currentSlide;
        this.j=length;
    }
    
    next(){
        document.getElementById("content" + (this.i+1)).classList.remove("active");
    
        document.getElementById("text" + (this.i+1)).classList.remove("active");
        this.i = ( this.j + this.i + 1) % this.j;
        document.getElementById("content" + (this.i+1)).classList.add("active");
       document.getElementById("text" + (this.i+1)).classList.add("active");
        this.indicator( this.i+ 1 );
    }
    prev(){
        document.getElementById("content" + (this.i+1)).classList.remove("active");
        document.getElementById("text" + (this.i+1)).classList.remove("active");
        this.i = (this.j + this.i - 1) % this.j;
        document.getElementById("content" + (this.i+1)).classList.add("active");
        document.getElementById("text" + (this.i+1)).classList.add("active");
        this.indicator(this.i+1);
    }
    
    indicator(num){
        dots.forEach(function(dot){
            dot.style.backgroundColor = "transparent";
        });
        document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
    }
    
    dot(index){
        images.forEach(function(image){
            image.classList.remove("active");
        });
        document.getElementById("content" + index).classList.add("active");
        this.i = index - 1;
        indicator(index);
    }
}
let slider1 = new Slider(0,3);





