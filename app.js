const seatBtn = document.querySelectorAll(".seat");
let seatAvl = 40;
let selectedSeats = [];

let buySeat = 0;


for (let seat of seatBtn) {
    seat.addEventListener("click", function (e) {
        const isSelected = seat.classList.contains('bg-[#1DD100]', 'text-[#fff]');

        if (isSelected) {
            // Deselect the seat
            seat.classList.remove('bg-[#1DD100]', 'text-[#fff]');
            for (let i = 0; i < selectedSeats.length; i++) {
                if (selectedSeats[i] === seat.innerText) {
                    selectedSeats.splice(i, 1);
                    break;
                }
            }
            buySeat--;
        } else {
            if (buySeat < 4 && seatAvl > 0) {
                // Select the seat
                seat.classList.add('bg-[#1DD100]', 'text-[#fff]');
                if (!selectedSeats.includes(seat.innerText)) {
                    selectedSeats.push(seat.innerText);
                    appendTableRow(seat.innerText);
                    buySeat++;
                }
            }
        }

        // Update seat counts
        setInnerText('seat-buy', buySeat);
        setInnerText('seat-left', seatAvl - buySeat);
    });
}

function appendTableRow(seatText) {
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('tr');

    td1.innerText = seatText;
    td2.innerText = "Economy";
    td3.innerText = 550;

    const seatContain = document.getElementById("table-body");

    td4.appendChild(td1);
    td4.appendChild(td2);
    td4.appendChild(td3);

    seatContain.appendChild(td4);
}

// Set the inner text of an HTML element
function setInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}






