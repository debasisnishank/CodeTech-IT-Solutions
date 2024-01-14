const sections = document.querySelectorAll(".section");
const sectbtns = document.querySelectorAll(".controlls");
const secbtn = document.querySelectorAll(".control");
const allsections = document.querySelector(".main-content");

function PageTran() {
  // btn active on click
  for (let i = 0; i < secbtn.length; i++) {
    secbtn[i].addEventListener("click", function () {
      let currentbtn = document.querySelectorAll(".active-btn");
      currentbtn[0].className = currentbtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //section active class
  allsections.addEventListener("click", (e) => {
    //   console.log(e.target);
    const id = e.target.dataset.id;

    if (id) {
      //remove the selected from the other btns
      sectbtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      //hide the other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
  //TOggle theme tn
  const themebtn = document.querySelector('.theme-btn');
  themebtn.addEventListener('click',()=>{
    let element = document.body;
    element.classList.toggle('light-mode');
  })
}

PageTran();
