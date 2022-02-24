let jsp_current_page = 1;
const jsp_records_per_page = 10; //if page has less or mroe lines then get screwed bozo?

let jsp_json_object = [
    //Start golden rain
    { heading: '(Acid & Bases) 𝐆𝐨𝐥𝐝𝐞𝐧 𝐑𝐚𝐢𝐧 𝐄𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭' },
    { text: "" },
    { text: " The Golden Rain experiment is an example of a chemical reaction because when two colourless aqueous solutions were mixed together the solution changed to a bright yellow colour  and some dark yellow powder was formed to prove that there were two new substances produced when filtered." },
    { text: "" },
    { text: " When the Led-Nitrade and Potassium-Ionite (The colourless, aqueous solutions) mixed together depending on the ratio of the Led-Nitrade to Pottasium-Iodite the colour would be stronger or weaker, they also produced a powdery solid that was dark yellow and if introduced to heat then mixed and  then hit with a shock (i.e. thermal shock) a glitter like substance would be produced, see pictures in pictures page." },
    { text: "" },
    { text: " This colour change and the production of the powdery solid is important because they identify a chemical reaction, they also indicate that, by taking observations like this, we can figure out if the gold rain is a chemical or physical reaction." },
    { text: "" },
    { text: "In conclusion, we have gathered that the Golden Rain Experiment is a chemical reaction where two solutions (both aqueous and colourless) were mixed and formed a denser yellow liquid with a solid powdery substance at the bottom of the tube and if said tube would get hit a shock  (i.e. thermal shock) the powder would turn into a glitter like solid." },
    { images: ["tgre (1).jpg", "tgre (2).jpg","tgre (3).jpg"] },
    //End golden rain
    //Start fizzyrainbow
    { heading: ' (Acid & Bases) 𝐅𝐢𝐳𝐳𝐲 𝐑𝐚𝐢𝐧𝐛𝐨𝐰 𝐄𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭' },
    { text: "Chemical Equation: <div style='color: gray;'>HCl + Na<a class='smallsci'>2</a>CO<a class='smallsci'>3</a> = NaCl + H<a class='smallsci'>2</a>O+CO<a class='smallsci'>2(g)</a> </div>" },
    { text: "Observations: <div style='color:black'>When the base (Na<a class='smallsci'>2</a>CO<a class='smallsci'>3</a>) and the acid (HCl) mixed up they neutralized eachother thus the green color, this also created tablesalt(NaCl) and water(H<a class='smallsci'>2</a>O+CO<a class='smallsci'>2(g)</a>) in the end creating salty water (not potable because of the) </div>" },
    { text: "" },
    { text: "Explanation:" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
	{ images: ["FizzyRainbow (1).jpg","FizzyRainbow (2).jpg","FizzyRainbow (3).jpg"] },
    //End fizzyrainbow
    //start making green
    { heading: ' (Acid & Bases) 𝐌𝐚𝐤𝐢𝐧𝐠 𝐆𝐫𝐞𝐞𝐧, 𝐑𝐚𝐢𝐧𝐛𝐨𝐰 𝐚𝐧𝐝 𝐏𝐇-𝐒𝐜𝐚𝐥𝐞' },
	{ text: "" },
    { text: "This is a big one, making green was hard but Hunter figured it out before me, if you put in the same ammount of each chemical (base and acid) and a small ammount of universal indicator in." },
    { text: "" },
    { text: "The making rainbow was a bit harder and we did not get the full rainbow, but we tried and got some really cool colors." },
	{ text: "" },
    { text: "the PH-Scale was great and it was pretty hard and we ended up getting so many different colors and expermimenting." },
    { text: "" },
    { text: "" },
    { images: ["makinggreen (1).jpg", "makinggreen (2).jpg","makinggreen (3).jpg"] },
	//End makinggreen
    //start Litmus Paper
    { heading: ' (Acid & Bases) 𝐋𝐢𝐭𝐦𝐮𝐬 𝐏𝐚𝐩𝐞𝐫' },
	{ text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
	{ text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
	{ text: "" },
];

function jsp_num_pages() {
    return Math.ceil(jsp_json_object.length / jsp_records_per_page);
}

function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_change_page(page) {
    const btn_prev = document.getElementById('btn-prev');
    const btn_next = document.getElementById('btn-next');
    const listing_table = document.getElementById('listing-table');
    let page_span = document.getElementById('page');
    jsp_current_page = page;

    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < jsp_json_object.length; i++) {
        switch (Object.keys(jsp_json_object[i])[0]) {
            case 'heading':
                listing_table.innerHTML += `<h1>${jsp_json_object[i].heading}</h1>`;
                break
            case 'text':
                listing_table.innerHTML += `<p>${jsp_json_object[i].text}</p>`;
                break
            case 'images':
                listing_table.innerHTML += "<div class=image-container id=images></div>"
                jsp_json_object[i].images.forEach(image => {
                    loadImage(image);
                });
                break
        }

    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

    btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
    btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-block';
}


function loadImage(src, div) {
    var img = new Image(250, 333);
    var div = document.getElementById('images');

    img.onload = function () {
        div.appendChild(img)
    };
    img.src = `./main/imgs/${src}`
}

window.onload = () => {
    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_prev_page();
    });

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_next_page();
    });

    jsp_change_page(1);
};

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }