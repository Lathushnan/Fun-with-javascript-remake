// Alert
// window.addEventListener("load", () => {
//    alert(`This is just for Fun
//           Input name which
//           others call you usually
//                      :: Lathu 👍`);
// });

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

let nick = async () => {
   // fetching from json files
   let specific_name = fetch("./specific_nick_name.json").then((res) =>
      res.json()
   );
   let nick_names = fetch("./nick_names.json").then((res) => res.json());
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
      } // selecting random index of the random nick-names
      const random = Math.floor(Math.random() * random_res.length);
      const specific = key.find((name) => {
         return name.indexOf(input_fun.value) > -1;
      });

      const name = res[specific];

      input_name.innerText = input_fun.value;

      if (input_fun.value === specific) {
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
nick();
