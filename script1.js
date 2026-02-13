

const form = document.getElementById("eventForm");
const eventList = document.getElementById("event-list");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");
const keyBox = document.getElementById("keyBox");


const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descriptionInput = document.getElementById("description");



form.addEventListener("submit", function(event){

    
    event.preventDefault();

    
    if(eventList.innerText.includes("No events")){
        eventList.innerHTML = "";
    }

    
    const card = document.createElement("div");
    card.className = "event";

    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete";

    
    const title = document.createElement("h4");
    title.innerText = titleInput.value;

    
    const date = document.createElement("div");
    date.innerText = dateInput.value;

    
    const category = document.createElement("div");
    category.innerText = categoryInput.value;


    const desc = document.createElement("p");
    desc.innerText = descriptionInput.value;

    
    card.appendChild(deleteBtn);
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(category);
    card.appendChild(desc);

    
    eventList.appendChild(card);

    
    form.reset();
});



eventList.addEventListener("click", function(event){

    
    if(event.target.className === "delete"){

        const card = event.target.parentElement;
        card.remove();

        
        if(eventList.children.length === 0){
            eventList.innerText = "No events yet. Add your first event!";
        }
    }
});



clearBtn.addEventListener("click", function(){
    eventList.innerText = "No events yet. Add your first event!";
});



sampleBtn.addEventListener("click", function(){

    eventList.innerHTML = "";

    const samples = ["Conference 2026", "Web Dev Webinar", "College Meetup"];

    for(const i = 0; i < samples.length; i++){

        const card = document.createElement("div");
        card.className = "event";

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.className = "delete";

        const title = document.createElement("h4");
        title.innerText = samples[i];

        const date = document.createElement("span");
        date.innerText = "Sample Date";

        const category = document.createElement("span");
        category.innerText = "Sample Category";

        const desc = document.createElement("p");
        desc.innerText = "Sample Description";

        card.appendChild(deleteBtn);
        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(category);
        card.appendChild(desc);

        eventList.appendChild(card);
    }
});



document.addEventListener("keydown", function(event){
    keyBox.innerText = "You Pressed: " + event.key;
});