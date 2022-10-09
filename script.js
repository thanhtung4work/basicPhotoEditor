let blurFilter = document.getElementById("blur");
let hueFilter = document.getElementById("hue-rotate");
let constrastFilter = document.getElementById("constrast");
let sepiaFilter = document.getElementById("sepia");
let saturationFilter = document.getElementById("saturation");

let noFilpBtn = document.getElementById("no-flip");
let vFilpBtn = document.getElementById("v-flip");
let hFilpBtn = document.getElementById("h-flip");

let uploadBtn = document.getElementById("uploadButton");
let image = document.getElementById("chosenImg");

const reset = () => {
  blurFilter.value = 0;
  hueFilter.value = 0;
  constrastFilter.value = 100;
  sepiaFilter.value = 0;
  saturationFilter.value = 100;

  noFilpBtn.checked = true;
  addFilter();
  flipImage();
}

const addFilter = () => {
  image.style.filter = `blur(${blurFilter.value}px) contrast(${constrastFilter.value}%) hue-rotate(${hueFilter.value}deg) sepia(${sepiaFilter.value}%) saturate(${saturationFilter.value}%)`;
  console.log(image.style.filter);
}

const flipImage = () => {
  if(noFilpBtn.checked){
    image.style.transform = "scale(1, 1)";
  } else if(vFilpBtn.checked){
    image.style.transform = "scaleY(-1)";
  } else if(hFilpBtn.checked){
    image.style.transform = "scaleX(-1)";
  }
}

uploadBtn.onchange = () => {
  reset();
  try {
    let reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0]);
    reader.onload = () => {
      image.setAttribute("src", reader.result);
    }
  } catch (error) {
    console.log(error);
  }
}

let sliders = document.getElementsByClassName("slider");
for(let i  = 0; i < sliders.length; i++) {
  sliders[i].addEventListener("input", addFilter);
}

let radios = document.querySelectorAll("input[name='flip']");
for(let i  = 0; i < radios.length; i++) {
  radios[i].addEventListener("click", flipImage);
}