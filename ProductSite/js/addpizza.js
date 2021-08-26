"use strict";
const serverUrl = "http://localhost:35592";

let promise = new Promise(async function (resolve, reject) {
    var pizza = await fetch(`${serverUrl}/api/Pizza`)
        .then(response => response.json());
    setTimeout(() => resolve(pizza), 1000);
});

function loadDataServer() {
    promise
        .then(function (result) {
            console.log("Promise result good!---", result);
            document.getElementById("loading").innerHTML = "completed";
            let bodyPizza = document.getElementById("bodyPizza");
            bodyPizza.innerHTML = "";
            result.forEach(function (p) {
                bodyPizza.innerHTML +=
                    `
                            <tr>
                                <th scope="row">${p.id}</th>
                                <td>${p.doug}</td>
                                <td>${p.sauce}</td>
                                <td>${p.cheese}</td>
                                <td>${p.meat}</td>
                                <td>${p.vegetables}</td>
                            </tr>
                        `;
            });

        });
}

window.addEventListener("load", function () {

    loadDataServer();

    console.log("loading is good :)");

    let formAddpizza = document.getElementById("formAddpizza");
    let pizzaid = document.getElementById("pizzaid");
    let doug = document.getElementById("doug");
    let sauce = document.getElementById("sauce");
    let cheese = document.getElementById("cheese");
    let meat = document.getElementById("meat");
    let vegetables = document.getElementById("vegetables");
    formAddpizza.addEventListener("submit", function (e) {
        e.preventDefault();
        let url = `${serverUrl}/api/Pizza/add`;
        let data = {
            id: pizzaid.value,
            doug: doug.value,
            sauce: sauce.value,
            cheese: cheese.value,
            meat: meat.value,
            vegetables: vegetables.value
        };
        axios.post(url, data)
            .then(response => {
                location.reload();
                //loadDataServer();
            });
        console.log(data);
    });

});