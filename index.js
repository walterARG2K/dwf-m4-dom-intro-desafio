const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const removeLiEl = document.querySelectorAll(".lista li");
  removeLiEl.forEach(i => {
    i.remove()
  });

  const ulEl = document.querySelector(".lista");
    cosasQueAprendimos.forEach(i => {
      let newElementLi = document.createElement("li");
      newElementLi.textContent = i.tema;
      if (i.class !== "") { 
        newElementLi.classList.add(i.class)
      }
      ulEl.appendChild(newElementLi)
    });
  }

main();
