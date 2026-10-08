/* =========================================
   BUSMITRA DATA
========================================= */


const buses = [

    {
        number: "JLG-101",
        route: "Chalisgaon → Jalgaon",
        from: "Chalisgaon Bus Stand",
        to: "Jalgaon Bus Stand",
        next: "Mehunbare"
    },

    {
        number: "JLG-202",
        route: "Bhadgaon → Jalgaon",
        from: "Bhadgaon Bus Stand",
        to: "Jalgaon Bus Stand",
        next: "Pachora"
    },

    {
        number: "JLG-303",
        route: "Pachora → Chalisgaon",
        from: "Pachora Bus Stand",
        to: "Chalisgaon Bus Stand",
        next: "Bhadgaon"
    },

    {
        number: "JLG-404",
        route: "Bhusawal → Jalgaon",
        from: "Bhusawal Bus Stand",
        to: "Jalgaon Bus Stand",
        next: "Nashirabad"
    },

    {
        number: "JLG-505",
        route: "Amalner → Jalgaon",
        from: "Amalner Bus Stand",
        to: "Jalgaon Bus Stand",
        next: "Dharangaon"
    },

    {
        number: "JLG-606",
        route: "Chopda → Jalgaon",
        from: "Chopda Bus Stand",
        to: "Jalgaon Bus Stand",
        next: "Amalner"
    }

];


/* =========================================
   TALUKA DATA
========================================= */

const talukas = {

    Jalgaon: {
        pin: "425001",
        villages: 87
    },

    Pachora: {
        pin: "424201",
        villages: 129
    },

    Amalner: {
        pin: "425401",
        villages: 154
    },

    Yawal: {
        pin: "425301",
        villages: 91
    },

    Erandol: {
        pin: "425109",
        villages: 65
    },

    Bhusawal: {
        pin: "425201",
        villages: 50
    },

    Chalisgaon: {
        pin: "424101",
        villages: 142
    },

    Jamner: {
        pin: "424206",
        villages: 159
    },

    Bhadgaon: {
        pin: "424105",
        villages: 59
    },

    Chopda: {
        pin: "425107",
        villages: 119
    },

    Raver: {
        pin: "425508",
        villages: 117
    },

    Dharangaon: {
        pin: "425105",
        villages: 89
    },

    Parola: {
        pin: "425111",
        villages: 114
    },

    Muktainagar: {
        pin: "425306",
        villages: 85
    },

    Bodwad: {
        pin: "425310",
        villages: 53
    }

};


/* =========================================
   LOAD BUS CARDS
========================================= */

const busContainer =
    document.getElementById("busContainer");


buses.forEach(bus => {

    const card =
        document.createElement("div");

    card.className =
        "bus-card";


    card.innerHTML = `

        <div class="bus-top">

            <span class="bus-number">
                ${bus.number}
            </span>

            <span class="bus-status">
                ● Active
            </span>

        </div>


        <h3>
            ${bus.route}
        </h3>


        <p>
            📍 ${bus.from}
        </p>


        <p>
            🎯 ${bus.to}
        </p>


        <p>
            ➡️ Next Stop:
            ${bus.next}
        </p>


        <button
            onclick="showBusDetails('${bus.number}')">

            View Details

        </button>

    `;


    busContainer.appendChild(card);

});


/* =========================================
   LOAD TALUKAS
========================================= */

const talukaContainer =
    document.getElementById(
        "talukaContainer"
    );


Object.entries(talukas).forEach(
    ([name, data]) => {

        const card =
            document.createElement("div");

        card.className =
            "taluka-card";


        card.innerHTML = `

            <h3>
                📍 ${name}
            </h3>


            <p>
                🏘️ Villages:
                <b>${data.villages}</b>
            </p>


            <p>
                📮 PIN:
                <b>${data.pin}</b>
            </p>


            <button
                onclick="showTaluka('${name}')">

                View Villages

            </button>

        `;


        talukaContainer.appendChild(card);

    }
);


/* =========================================
   BUS DETAILS
========================================= */

function showBusDetails(number) {

    const bus =
        buses.find(
            item => item.number === number
        );


    document.getElementById(
        "modalContent"
    ).innerHTML = `

        <h2>
            🚌 ${bus.number}
        </h2>

        <br>

        <p>
            <b>Route:</b>
            ${bus.route}
        </p>

        <p>
            <b>Starting Point:</b>
            ${bus.from}
        </p>

        <p>
            <b>Destination:</b>
            ${bus.to}
        </p>

        <p>
            <b>Next Stop:</b>
            ${bus.next}
        </p>

        <br>

        <p>
            🟢 Bus Status:
            <b>Active</b>
        </p>

        <br>

        <small>
            This is a BusMitra college field-project
            demonstration. Real-time bus information
            requires a backend and GPS system.
        </small>

    `;


    document.getElementById(
        "modal"
    ).style.display = "block";

}


/* =========================================
   TALUKA DETAILS
========================================= */

function showTaluka(name) {

    const data =
        talukas[name];


    document.getElementById(
        "modalContent"
    ).innerHTML = `

        <h2>
            📍 ${name}
        </h2>

        <br>

        <p>
            🏘️ Total Villages:
            <b>${data.villages}</b>
        </p>

        <p>
            📮 Headquarters PIN:
            <b>${data.pin}</b>
        </p>

        <br>

        <p>
            Complete official village directory:
        </p>

        <br>

        <a
            href="https://jalgaon.gov.in/en/villages/"
            target="_blank"
            style="color:#159c67;font-weight:bold">

            Open Official Jalgaon Village Directory →

        </a>

        <br><br>

        <small>
            Village-specific PIN codes can be different
            from the taluka headquarters PIN.
        </small>

    `;


    document.getElementById(
        "modal"
    ).style.display = "block";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    document.getElementById(
        "modal"
    ).style.display = "none";

}


window.onclick = function(event) {

    const modal =
        document.getElementById("modal");


    if (event.target === modal) {

        closeModal();

    }

};


/* =========================================
   BUS SEARCH
========================================= */

function searchBus() {

    const input =
        document.getElementById(
            "searchInput"
        ).value
        .toLowerCase()
        .trim();


    const result =
        document.getElementById(
            "searchResult"
        );


    result.innerHTML = "";


    if (input === "") {

        result.innerHTML = `
            <p style="
                margin-top:10px;
                color:#42d49a">

                Please enter a bus,
                route or taluka.

            </p>
        `;

        return;

    }


    let found = false;


    /* Search buses */

    buses.forEach(bus => {

        if (

            bus.number
                .toLowerCase()
                .includes(input)

            ||

            bus.route
                .toLowerCase()
                .includes(input)

            ||

            bus.from
                .toLowerCase()
                .includes(input)

            ||

            bus.to
                .toLowerCase()
                .includes(input)

        ) {

            found = true;


            result.innerHTML += `

                <div style="
                    margin-top:10px;
                    padding:12px;
                    background:#18251f;
                    border-radius:8px">

                    🚌
                    <b>${bus.number}</b>

                    —
                    ${bus.route}

                </div>

            `;

        }

    });


    /* Search talukas */

    Object.keys(talukas).forEach(name => {

        if (
            name
                .toLowerCase()
                .includes(input)
        ) {

            found = true;


            result.innerHTML += `

                <div style="
                    margin-top:10px;
                    padding:12px;
                    background:#18251f;
                    border-radius:8px">

                    📍
                    <b>${name}</b>

                    —
                    ${talukas[name].villages}
                    villages

                </div>

            `;

        }

    });


    if (!found) {

        result.innerHTML = `

            <p style="
                margin-top:10px;
                color:#42d49a">

                ❌ No result found.

            </p>

        `;

    }

}


/* =========================================
   LIVE BUS MOVEMENT DEMO
========================================= */

let busMoved = false;


function moveBus() {

    const bus =
        document.getElementById(
            "busLocation"
        );


    const location =
        document.getElementById(
            "currentLocation"
        );


    if (!busMoved) {

        bus.style.transform =
            "translateX(120px) translateY(-40px)";

        location.innerText =
            "Mehunbare";


        busMoved = true;

    }

    else {

        bus.style.transform =
            "translateX(0)";

        location.innerText =
            "Chalisgaon Road";


        busMoved = false;

    }

}


/* =========================================
   DARK MODE
========================================= */

document.getElementById(
    "darkBtn"
).addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            this.innerText = "☀️";

        }

        else {

            this.innerText = "🌙";

        }

    }
);


/* =========================================
   CONSOLE
========================================= */

console.log(
    "BusMitra website loaded successfully!"
);

console.log(
    "Jalgaon Talukas:",
    Object.keys(talukas).length
);

console.log(
    "Total Villages: 1513"
);