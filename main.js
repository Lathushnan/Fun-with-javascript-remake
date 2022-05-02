// Modal box
let dialog = document.querySelector("#fun-box-alert");

// buttons
let fun_btn = document.querySelector("#fun-btn");
let close_btn = document.querySelector("#btn-close");

// name input
let nick_name = document.querySelector("#nick-name");
let input_name = document.querySelector("#input-name");
let input_fun = document.querySelector("#input-fun");

// Alert msg
window.addEventListener("DOMContentLoaded", () => {
   alert(`This is just for Fun
   Note::
          Input your name which
          others call you usually

      Note :: 
             plz don't try other's name
                     :: Lathu 👍`);

   alert(`You will get different nick-names,
          If you try it again and again
                     :: Lathu 👍`);

   alert(`Note :: (For my Friends)
         I add custom nick-names 
         for some of my friends 
         Hope You Like it 😂
                      :: Lathu 👍`);
});

// nick_names (Random name)
let nickName = async () => {
   // fetching from json files
   let specific_name = fetch("./json/specific_nick_name.json").then((res) =>
      res.json()
   );
   let nick_names = fetch("./json/nick_names.json").then((res) => res.json());
   // initializing in variables
   let specific_res = await specific_name;
   let random_res = await nick_names;
   let key = Object.keys(specific_res);

   // function
   getName(specific_res, random_res, key);
};

let getName = (res, random_res, key) => {
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
      }

      // selecting random index of the random nick-names
      const random = Math.floor(Math.random() * random_res.length);

      let input_lowerCase = input_fun.value.toString().toLowerCase();

      // Selecting the nick_name for specific persons
      const specific = key.find((name) => {
         return name.indexOf(input_lowerCase) > -1;
      });

      const name = res[specific];

      input_name.innerText = input_fun.value;

      if (input_lowerCase === specific) {
         // specific name
         nick_name.innerText = name;
      } else {
         // random name
         nick_name.innerText = random_res[random];
      }  
   });

   close_btn.addEventListener("click", () => {
      dialog.close();
   });
};

nickName();
