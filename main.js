// Alert
window.addEventListener("load", () => {
   alert(`This is just for Fun
                     :: Lathu 👍`);
});

// Modal box
let dialog = document.querySelector("#fun-box-alert");
// buttons
let fun_btn = document.querySelector("#fun-btn");
let close_btn = document.querySelector("#btn-close");

// name input
let nick_name = document.querySelector("#nick-name");
let input_name = document.querySelector("#input-name");
let input_fun = document.querySelector("#input-fun");

// nick_names (Random name)
const nick_names = [
   "சார பாம்பு",
   "Loosu",
   "பாடி சோடா 🔥",
   "சைக்கோ",
   "கைப்புள்ளை",
   "காளையன்",
   "Jillu",
   "கத்தி குத்து",
   "சண்டியன்",
   "காகா முட்டை",
   "கருடன்",
   "மொரட்டு தமிழன்",
   "ஓட்டேரி நரி",
   "கோத்தா",
   "Thalapathi",
   "சோத்துமூட்ட",
   "சூனா பானா",
   "பூரி செட்டு ",
];
// specific names for my friends
const specific_nick_name = {
   // First letter capital
   Ashvin: "Vijay kanth",
   Rohit: "Vijay",
   Jude: "mama",
   Geethan: "Smart Guy",
   Lathu: "Smart Guy",
   Sam: "Mr.Dog 🐶",
   Sajohn: "Mr.புயல்",

   // Lower case Name
   ashvin: "Vijay kanth",
   rohit: "Vijay",
   jude: "mama",
   geethan: "Smart Guy",
   lathu: "Smart Guy",
   sam: "Mr.Dog 🐶",
   sajohn: "Mr.புயல்",
};

// object keys (Name of my Friends)
let keys = Object.keys(specific_nick_name);

fun_btn.addEventListener("click", () => {
   // alert, if you didn't input your name
   if (input_fun.value === "") {
      alert(
         `Plz input your name 😅
          Not your full name
          Name others call you usually
                                :: Lathu , Ashvin 👌`
      );
   } else {
      dialog.showModal();
   }

   // selecting random index of the random nick-names
   const random = Math.floor(Math.random() * nick_names.length);
   // Selecting specific nick-name
   const specific_name = keys.find((name) => {
      return name.indexOf(input_fun.value) > -1;
   });

   // specific_name (Sorry guys)
   const name = specific_nick_name[specific_name];

   //  dialog box(Your name)
   input_name.innerText = input_fun.value;

   if (input_fun.value === specific_name) {
      // specific name
      nick_name.innerText = name;
   } else {
      // random name
      nick_name.innerText = nick_names[random];
   }
});

close_btn.addEventListener("click", () => {
   dialog.close();
});
