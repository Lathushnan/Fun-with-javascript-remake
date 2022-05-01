// Alert
window.addEventListener("load", () => {
   alert(`This is just for Fun
          Input name which
          others call you usually
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

let nick = async () => {
   let name = fetch("./nick_name.json").then((res) => res.json());
   let res = await name;
   let key = Object.keys(res);
   getName(res, key);
};

let getName = (res, key) => {
   fun_btn.addEventListener("click", () => {
      if (input_fun.value === "") {
         alert(
            `Plz input your name 😅
          Not your full name
          Name others call you usually
                                :: Lathu , Ashvin 👌`
         );
      } else {
         dialog.showModal();
      } // selecting random index of the random nick-names
      const random = Math.floor(Math.random() * nick_names.length);
      const specific = key.find((name) => {
         return name.indexOf(input_fun.value) > -1;
      });

      const name = res[specific];
      console.log(name);
      input_name.innerText = input_fun.value;

      if (input_fun.value === specific) {
         // specific name
         nick_name.innerText = name;
      } else {
         // random name
         nick_name.innerText = nick_names[random];
      }

      // specific_name (Sorry guys)
   });

   close_btn.addEventListener("click", () => {
      dialog.close();
   });
};
nick();
