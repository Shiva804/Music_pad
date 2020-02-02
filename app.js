window.addEventListener('load', () => {
    var sounds = document.querySelectorAll(".sound");
    var pads= document.querySelectorAll(".pads div");
    var btn = document.querySelector(".btn");
    const visual = document.querySelector(".visual");
    const colors = ["#7fffd4","#FFF8DC","#ff4040","#BCEE68","violet","#FA8072"];
   
  
  pads.forEach((tab,i) => {

  tab.addEventListener('click', function(){
    sounds[i].currentTime=0;
    sounds[i].play();
    bubble(i);
  });
  });

  var bubble = (i) => {
      var bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[i];
      bubble.style.opacity = "50";
      bubble.style.borderWidth = "1px";
      bubble.style.borderColor = "black"; 
      bubble.style.borderStyle = "solid";

      bubble.style.animation= 'jump 1.3s ease';
      bubble.addEventListener('animationend' , function(){
          visual.removeChild(this);

      })
  };

  //btn.addEventListener('click', function(){
    //  sounds[4].play();
  //})

  






});