let send_button = document.getElementById("send_button");

const person = {
  name: "",
  lastName: "",
  email: "",
  sex: "",
  confirmation: false,
};

const radio = {
  male: document.getElementById("radio_male"),
  female: document.getElementById("radio_female"),
};

const selectSex = (e) => {
  if (e === "male") {
    radio.male.checked = true;
    radio.female.checked = false;
    person.sex = "male";
  }

  if (e === "female") {
    radio.male.checked = false;
    radio.female.checked = true;
    person.sex = "female";
  }

  console.log(person);
};

radio.male.addEventListener("click", () => {
  selectSex("male");
});
radio.female.addEventListener("click", () => {
  selectSex("female");
});

const setPerson = () => {
  person.name = document.getElementById("name").value;
  person.lastName = document.getElementById("lastName").value;
  person.email = document.getElementById("email").value;
};

const validation = () => {
  if (
    person.name === "" ||
    !person.name.match(/[a-z]/g) ||
    !person.name.match(/[а-я]/g)
  ) {
    console.log("ошибка в имени", person);
    return;
  }
  if (person.lastName.length <= 2 || !person.lastName.match(/[0-9]/g)) {
    console.log("ошибка в фамилии", person);
  }
};

send_button.addEventListener("click", () => {
  setPerson();
  validation();
});
