const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


const imgContainer = document.querySelector(".image-container");
const imageTxt = document.querySelector(".image-text");



for(i = 0; i < images.length; i++){
    imgContainer.innerHTML +=  '<div class="img-item"><img src="' + images[i].url + '" alt=""></div>'
    
    // imageTxt.append()//AGGIUNTA APPEND
    const div = document.createElement('div');
    div.classList.add("image-title", "hide");

    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.append(images[i].title);
    p.append(images[i].description);

    imageTxt.append(div);
    div.append(h2)
    div.append(p)    

};

const imgItem = document.getElementsByClassName("img-item");

let currentImg = 0;
let currentText = 0;

imgItem[currentImg].classList.add("show");

const imageTitle = document.querySelector("div.image-title");
imageTitle.classList.remove("hide")

const forward = document.querySelector(".forward");
const back = document.querySelector(".back")

forward.classList.add("show")

forward.addEventListener("click",
    function() {
        console.log(currentImg)
        imgItem[currentImg].classList.remove("show");
        currentImg++;
        imgItem[currentImg].classList.add("show");

        imageTitle.classList.add("hide");
        currentText++;
        imageTitle.classList.remove("hide");

        back.classList.remove("hide");

        if(currentImg == (images.length - 1)){
            forward.classList.remove("show");
        }
    }
)

back.addEventListener("click",
    function(){
        imgItem[currentImg].classList.remove("show");
        currentImg--;
        imgItem[currentImg].classList.add("show");

       forward.classList.add("show");

       if(currentImg == 0) {
        back.classList.add("hide");
       }
    }
)