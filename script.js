function search() {
  let { value } = document.querySelector(".cari");
  if (!value) return;
  let baseurl = "https://disease.sh/v3/covid-19/countries/" + value;
  fetch(baseurl)
    .then((res) => res.json())
    .then((data) => {
      if (!data.country) {
        document.querySelector("#shape h2").innerHTML = "Country: Not Found !";
        for (let i = 0; i < 6; i++) {
          document.querySelectorAll(".bagian p")[i].innerHTML = "N/A";
        }
        return document.querySelector(".cari").value = "";
      }

      document.querySelector("#shape h2").innerHTML =
        "Country: " + data.country;
      let search = [
        "cases",
        "deaths",
        "recovered",
        "todayCases",
        "todayDeaths",
        "todayRecovered",
      ];
      for (let i = 0; i < search.length; i++) {
        document.querySelectorAll(".bagian p")[i].innerHTML =
          data[search[i]].toLocaleString();
      }
      return document.querySelector(".cari").value = "";

    });
}

let baseurl = "https://disease.sh/v3/covid-19/all";
fetch(baseurl)
  .then((res) => res.json())
  .then((data) => {
    let search = [
      "cases",
      "deaths",
      "recovered",
      "todayCases",
      "todayDeaths",
      "todayRecovered",
    ];
    for (let i = 0; i < search.length; i++) {
      document.querySelectorAll(".bagian p")[i].innerHTML =
        data[search[i]].toLocaleString();
    }
  });

const links = document.querySelectorAll('header ul li a');
const sections = document.querySelectorAll('.ok');

function changeLinkState() {
  if (window.screen.width > 768) return links.forEach((link) => link.classList.remove('headeractive'));
  console.log(document.body.scrollTop)
  let index = sections.length;

  while(--index && window.scrollY + 97 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('headeractive'));
  links[index].classList.add('headeractive');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);