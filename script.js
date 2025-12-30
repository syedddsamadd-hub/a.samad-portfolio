let data = [
  {
    img: "petbot.png",
    title: "petbot",
    description: "Petbot is a responsive manufacturing company website for plastic products, including bottles, jars, and glasses. The site allows users to browse products with an interactive and user-friendly interface, showcasing my skills in responsive design and front-end development.",
    button: "live",
    button1: "view code",
    one: "https://syedddsamadd-hub.github.io/petbot/",
    two: "https://github.com/syedddsamadd-hub/petbot"
  },
  {
    img: "todo.png",
    title: "to do list manager",
    description: "A sleek To-Do List application designed to keep your day organized. With real-time updates, interactive design, and smooth transitions, this project demonstrates clean jquery logic and creative UI styling.",
    button: "live",
    button1: "view code",
    one: "https://6900f59bdf039229229b12a2--todtaskapp.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/todolist"
  },
  {
    img: "calculator.png",
    title: "calculator",
    description: "a calculator where you calculate your expense made with html css and javascript and responsive for every screen size till 400px.",
    button: "live",
    button1: "view code",
    one: "https://calculationapp1.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/calculator"
  },
  {
    img: "bridges.png",
    title: "famous bridges",
    description: "This project is a responsive informational website showcasing famous bridges from around the world. The website is designed with a clean and modern layout using Bootstrap to ensure compatibility across all devices.",
    button: "live",
    button1: "view code",
    one: "https://syedddsamadd-hub.github.io/bridgeswebsite/",
    two: "https://github.com/syedddsamadd-hub/bridgeswebsite.git"
  },
  {
    img: "count.png",
    title: "life calculator",
    description: "a beautiful design life calculator made with html , css and javascript.",
    button: "live",
    button1: "view code",
    one: "https://birth-calculator-app.netlify.app/",
    two: "index.html"
  },
  {
    img: "voice.png",
    title: "text to voice generator",
    description: "This innovative Text to Voice Generator app instantly converts written text into clear, natural-sounding speech. Users can simply type or paste any text and listen to it in human voice.",
    button: "live",
    button1: "view code",
    one: "https://textvoicechange.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/textchangeintovoice.git"
  },
  {
    img: "generator.png",
    title: "dynamic-cards",
    description: "A dynamic e-commerce cards generator built using HTML,bootstrap and jquery. It allows users to enter data through an input field, and generates stylish cards based on their input with responsive design.",
    button: "live",
    button1: "view code",
    one: "https://690201a0111b4258a6636991--e-commercecardsgenerator.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/cardsgenerator"
  },

]
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-container");
  const row = document.getElementById("row1");
  let proCards = "";
  data.forEach(a => {
    proCards += `
               <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div style="" class="project-card m-3">
                  <img width='100%' height="300px"style="border-radius: 15px 15px 0 0;" src="images/${a.img}"  alt="pic">
                  <h3 class="ms-2 mt-2 text-capitalize">${a.title}</h3>
                  <p style=" text-align:justify;"class="mx-2 mt-3 text-capitalize">${a.description}</p>
                  <a href="${a.one}" style="font-size:20px;"class="btn text-capitalize mx-2 my-1 fw-bold"><i class="fa-solid fa-link me-1"></i>${a.button}</a>
                  <a href="${a.two}" style="font-size:20px;" class="btn text-capitalize mx-2 my-1 fw-bold"><i class="fa-brands fa-github me-1"></i>${a.button1}</a>
            </div>
          </div>
            `;
    row.innerHTML = proCards;
    container.append(row);


  });
});