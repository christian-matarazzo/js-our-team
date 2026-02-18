console.log('hello');

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//we get the node containing the cards

const cardContainerEl = document.getElementById ("cards-container")

console.log(cardContainerEl);


//we cycle the array
let cards = ""

for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers [i];



  //we save the variables
  const {name, role, email, img} = thisMember;

   
 cards += `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="card"> 
            <div class="row g-0">
                <div class="col-4">
                    <img src="${img}" class="img-fluid rounded-start h-100" style="object-fit: cover;" alt="${name}">
                </div>
                <div class="col-8">
                    <div class="card-body bg-dark text-white h-100">
                        <h5 class="card-title mb-1">${name}</h5>
                        <p class="card-text mb-1 text-white">${role}</p>
                        <p class="card-text"><small class="text-info">${email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

cardContainerEl.innerHTML = cards