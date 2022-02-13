let jsp_current_page = 1;
const jsp_records_per_page = 9; //if page has less or mroe lines then get screwed bozo?

let jsp_json_object = [
    //Start golden rain
    { json_item: '𝐆𝐨𝐥𝐝𝐞𝐧 𝐑𝐚𝐢𝐧 𝐄𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭' },
    { json_item: ""},
    { json_item: " The Golden Rain experiment is an example of a chemical reaction because when two colourless aqueous solutions were mixed together the solution changed to a bright yellow colour  and some dark yellow powder was formed to prove that there were two new substances produced when filtered."},
    { json_item: ""},
    { json_item: " When the Led-Nitrade and Potassium-Ionite (The colourless, aqueous solutions) mixed together depending on the ratio of the Led-Nitrade to Pottasium-Iodite the colour would be stronger or weaker, they also produced a powdery solid that was dark yellow and if introduced to heat then mixed and  then hit with a shock (i.e. thermal shock) a glitter like substance would be produced, see pictures in pictures page."},
    { json_item: ""},
    { json_item: " This colour change and the production of the powdery solid is important because they identify a chemical reaction, they also indicate that, by taking observations like this, we can figure out if the gold rain is a chemical or physical reaction."},
    { json_item: ""},
    { json_item: "In conclusion, we have gathered that the Golden Rain Experiment is a chemical reaction where two solutions (both aqueous and colourless) were mixed and formed a denser yellow liquid with a solid powdery substance at the bottom of the tube and if said tube would get hit a shock  (i.e. thermal shock) the powder would turn into a glitter like solid."},
     //End golden rain
     //Start fizzyrainbow
     { json_item: '𝐅𝐢𝐳𝐳𝐲 𝐑𝐚𝐢𝐧𝐛𝐨𝐰 𝐄𝐱𝐩𝐞𝐫𝐢𝐦𝐞𝐧𝐭'},
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
 
    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < jsp_json_object.length; i++) {
        listing_table.innerHTML += `${jsp_json_object[i].json_item}<br>`;
    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

    btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
    btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-block';
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

