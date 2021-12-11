// Show Hide Sections On Button Click
let ides;
let first = document.getElementById("doctorCategory");
first.addEventListener("click", function(){
    history.pushState(2, `second`, `#second`);
    ides = history.state;
//    console.log(ides);
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "block"; 
})

let second = document.getElementById("customerFormNext");
second.addEventListener("click", function(event){
    history.pushState(3, `third`, `#third`);
    ides = history.state;
//    console.log(ides);
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "block";
    event.preventDefault();
})

let third = document.getElementById("canvasFrameNext");
third.addEventListener("click", function(event){
    history.pushState(4, `fourth`, `#fourth`);
    ides = history.state;
    // console.log(ides);
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let  videoTwoSection = document.getElementById("canvasPreview");
    videoTwoSection.style.display = "block";
    event.preventDefault();
})

let fourth = document.getElementById("generateVideo");
fourth.addEventListener("click", function(event){
    history.pushState(5, `fifth`, `#fifth`);
    ides = history.state;
    // console.log(ides);
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    // let videoTwoSection = document.getElementById("canvasPreview");
    // videoTwoSection.style.display = "none";
    let  videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "block";
    event.preventDefault();
})

let fifth = document.getElementById("generateVideo");
fifth.addEventListener("click", function(event){
    // history.pushState(6, `sixth`, `#sixth`);
    ides = history.state;
    // console.log(ides);
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let  videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "block";
    event.preventDefault();
})

let sixth = document.getElementById("microLabsCategory");
sixth.addEventListener("click", function(event){
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "none";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "block";
    event.preventDefault();
})

let seventh = document.getElementById("microLabFormNext");
seventh.addEventListener("click", function(event){
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "block";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "none";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "none";
    event.preventDefault();
})

// Preveiw Of Choosen Files
function openFile(event) {
    var input = event.target;
    var reader = new FileReader();
    console.log(input.files[0])
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };
  

window.onpopstate = function (e) {
   if(history.state == 1){
console.log(history.state);

    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "block";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "none";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "none";
   }
   else if(history.state == 2){
    console.log(history.state);
       
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "block";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "none";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "none";
   }
   else if(history.state == 3){
      console.log(history.state);
       
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "block";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "none";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "none";
   }
   else if(history.state == 4){
       console.log(history.state);
       
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "block";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "none";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "none";
   }
   else if(history.state == 5){
       console.log(history.state);
       
    let mainsection = document.getElementById("HomePage");
    mainsection.style.display = "none";
    let formsection = document.getElementById("customerForm");
    formsection.style.display = "none";
    let videoOneSection = document.getElementById("canvasFrame");
    videoOneSection.style.display = "none";
    let videoThreeSection = document.getElementById("canvasPreview");
    videoThreeSection.style.display = "none";
    let videoFourthSection = document.getElementById("videoPreview");
    videoFourthSection.style.display = "block";
    let  microLabSection = document.getElementById("microLabsSection");
    microLabSection.style.display = "none";
}
}

history.replaceState(1, 'first', '#first')