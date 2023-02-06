let db = [
    {
       id:2,
       destination: "Neum",
       nation: "Bosnia",
       img: "https://1001beach.com/img/posts/1075/1200/neum_beach-1.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "22/06/2023 - 01/07/2023",
       price: "700"
   },
   {
       id:3,
       destination: "Trogir",
       nation: "Croatia",
       img: "https://img.marinas.com/v2/603d176dd0200bbe4e63c7e0509f365fbd9a3ea4b282800324d30bcb5a17d8f4.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "05/07/2023 - 15/07/2023",
       price: "900"
   },
    {
       id:4,
       destination: "Trebinje",
        nation: "Bosnia",
       img: "https://img.itinari.com/page/content/original/9e6ea09c-8da6-4b76-aba6-f64a17023fd0-arslanagic-bridge.jpg?ch=DPR&dpr=2.625&w=994&s=ec576d391d3537dc10dad64c50d1a5a5",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "02/04/2023 - 7/04/2023",
       price: "250"
   },
     {
       id:5,
       destination: "Miconos",
       nation: "Greece",
       img: "https://tourscanner.com/blog/wp-content/uploads/2021/03/Things-to-do-in-Mykonos.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "03/07/2023 - 13/07/2023",
       price: "1500"
   },
   {
       id:6,
       destination: "Dubrovnik",
       nation: "Croatia",
       img: "https://lp-cms-production.imgix.net/2021-06/shutterstockRF_662032261.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "15/07/2023 - 25/07/2023",
       price: "800"
   },
   {
       id:6,
       destination: "Sveti Stefan",
       nation: "Montenegro",
       img: "https://trip2balkan.com/wp-content/uploads/2019/05/budva_montenegro_coast_balkan_trip2balkan.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "05/06/2023 - 15/06/2023",
       price: "500e"
   },
   {
       id:7,
       destination: "Rovinj",
       nation: "Croatia",
       img: "https://a.cdn-hotels.com/gdcs/production10/d655/101c86d1-e599-4f28-905f-1fa47001bcdf.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "25/07/2023 - 05/08/2023",
       price: "850"
   },
     {
       id:8,
       destination: "Molfeta",
       nation: "Italy",
       img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Porto_di_Molfetta.jpg/1200px-Porto_di_Molfetta.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "25/08/2023 - 05/09/2023",
       price: "1150"
   },
       {
       id:9,
       destination: "Tivat",
       nation: "Montenegro",
       img: "https://www.lomaeuroopassa.fi/wp-content/uploads/2021/08/tivat-porto-montenegro.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "01/08/2023 - 11/08/2023",
       price: "920"
   },
      {
       id:10,
       destination: "Perast",
       nation: "Montenegro",
       img: "https://franks-travelbox.com/wp-content/uploads/2020/04/montenegro-perast-blick-auf-die-historische-stadt-perast-in-der-bucht-von-kotor-im-sommer-bei-sonnenuntergang-montenegro-givaga-shutterstock-1200x800.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "11/08/2023 - 21/08/2023",
       price: "450"
   },
    {
       id:11,
       destination: "Santorini",
       nation: "Greece",
       img: "https://youimg1.tripcdn.com/target/100p1f000001gpdo8957A.jpg?proc=source%2Ftrip",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "11/07/2023 - 21/07/2023",
       price: "1350e"
   },
    {
       id:12,
       destination: "Sicily",
       nation: "Italy",
       img: "https://www.paesana.com/hubfs/Blog/Sicily%20Italy%20landscape%20with%20water%20and%20homes%20in%20background.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "21/07/2023 - 01/08/2023",
       price: "1250"
   },
   {
       id:13,
       destination: "Koper",
       nation: "Slovenia",
       img: "https://travelslovenia.org/wp-content/uploads/2016/06/koper-cruise-ship-slovenia.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "27/07/2023 - 07/08/2023",
       price: "920"
   },
    {
       id:14,
       destination: "Izola",
       nation: "Slovenia",
       img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/160000/160476-Adriatic-Coast-Karst.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "31/07/2023 - 10/08/2023",
       price: "740"
   },
    {
       id:15,
       destination: "Split",
       nation: "Croatia",
       img: "https://traveler.marriott.com/wp-content/uploads/2022/08/Old-split-town-croatia.jpg",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iure.",
       date: "10/08/2023 - 20/08/2023",
       price: "740"
   },
   
];

let destinationDisplay = document.querySelector("#destinationDisplay");
let filterBtns          = document.querySelectorAll(".filterBtn");
let searchField        = document.querySelector(".searchField");


searchField.addEventListener("input",searchFilter);


function searchFilter() {
   let term = this.value;
   let searchDb = db.filter(val => {
       if(val.nation.toLowerCase().indexOf(term) !== -1 || val.destination.toLowerCase().indexOf(term) !== -1)  {
           return val;
       }
   });
   displayItems(searchDb);

}


filterBtns.forEach((btn) => {
   btn.addEventListener("click", (e) => {
       let nation = e.currentTarget.dataset.id;
       let destnation = db.filter((item) => {
           if(item.nation === nation) {
               return item;
           } 
       });
       if(nation === "all") {
           displayItems(db);
       } else {
           displayItems(destnation);
       }
   });
});




window.addEventListener("DOMContentLoaded", () => {
    displayItems(db);
});


function displayItems(item) {
   let destination = item.map((item) => {
       return `<div class="col-md-4">
               <div class="destination">
                   <div class="destination-header">
                      <h2 class="text-center">${item.destination}</h2>
                       <img src="${item.img}" class="img-fluid" alt="img">
                   </div>
                   <div class="destination-body mt-3">
                       <span>${item.description}</span> 
                   </div>
                   <div class="destination-footer mt-3">
                       <span>Date: ${item.date} - <strong class="text-danger">${item.price} €</strong></span>
                   </div>
               </div>
               </div>`; 
   });
   destination = destination.join("");
   destinationDisplay.innerHTML = destination;
}
