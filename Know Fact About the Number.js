let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");


userInputEl.addEventListener("keydown", function(event) {
    let userEl = userInputEl.value.trim();

    if (event.key === "Enter") {
        if (userInputEl.value === "") {
            alert("enter the userInput value");
            return;
        }
        factEl.classList.add("d-none");
        spinnerEl.classList.remove("d-none");


        let url = "https://apis.ccbp.in/numbers-fact?number=" + userEl;
        console.log(url);
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(dataJson) {
                factEl.classList.remove("d-none");
                spinnerEl.classList.add("d-none");


                let data = dataJson.fact;
                console.log(data);
                factEl.textContent = data;


            });
    }
});