const seatBtn = document.querySelectorAll(".seat");
const seatArr = [];
let seatAvl = 40;
let buySeat = 0;

// for (let seat of seatBtn) {
//     seat.addEventListener("click", function () {
//        const seatText = seat.innerText;
//        seat.classList.add('bg-[#1DD100]', 'text-[#fff]');

//        seat.classList.remo('bg-[#1DD100]')

//         const td1 = document.createElement('td')
//         const td2 = document.createElement('td')
//         const td3 = document.createElement('td')
//         const td4 = document.createElement('tr')

//         td1.innerText = seatText;
//         td2.innerText = "Economy";
//         td3.innerText = 550;'xc

//         const seatContain = document.getElementById("table-body")

//         td4.appendChild(td1);
//         td4.appendChild(td2);
//         td4.appendChild(td3);

//         seatContain.append(td4);

//         seatArr.push(seat.innerText);

//         const seatLeft = document.getElementById('seat-left');
//         const seatBuy = document.getElementById('seat-buy');

//         buySeat += 1;

//         seatBuy.innerText = buySeat;

//         if (seatArr.length > 4) {

//             alert ("You Have been Seleted Maximum Number Seat")

//             for (let seat of seatBtn) {
//                 seat.removeEventListener("click")
//             }

//         }

//         seatAvl -= 1;

//         seatLeft.innerText = seatAvl

//     })

// }

// Get The HTML Element

for (let seat of seatBtn) {
  seat.addEventListener("click", function (e) {
    const selected = seat.classList.contains("bg-[#1DD100]", "text-[#fff]");

    if (!selected) {
      // seat.classList.remove("bg-[#1DD100]", "text-[#fff]");
      // buySeat--;
      // setInnerText("seat-buy", buySeat);
      // seatAvl++;
      // setInnerText("seat-left", seatAvl);

      // const rows = document.getElementsByClassName("tro")
      if ((buySeat >= 0 && buySeat < 4) || seatAvl < 0) {
        seat.classList.add("bg-[#1DD100]", "text-[#fff]");
        seatAvl--;
        setInnerText("seat-left", seatAvl);
        buySeat++;
        setInnerText("seat-buy", buySeat);

        const seatText = seat.innerText;

        appendTableRow(seatText);

        seatArr.push(seatText);

        

        let totalPrice = buySeat * 550;
        setInnerText("total-price", totalPrice);
        setInnerText("grand-price", totalPrice);

        // Discount

        const applyBtn = document.getElementById("apply-btn");
        const couponCode = document.getElementById("coupon-code");

        couponCode.addEventListener("keyup", function (event) {
          const text = event.target.value;

          if ((text === "NEW15" && text.length === 5) || text === "Couple 20") {
            applyBtn.removeAttribute("disabled");
            applyBtn.classList.add(
              "bg-[#1DD100]",
              "hover:bg-[#1DD100]",
              "hover:border",
              "border-[#1DD100]"
            );

            if (text.length === 5) {
              applyBtn.addEventListener("click", function () {
                let discountAmout = discount15(totalPrice);
                let grandPrice = totalPrice - discountAmout;
                setInnerText("grand-price", grandPrice);

                const showAmountDiscount =
                  document.getElementById("show-amount");
                showAmountDiscount.classList.remove("hidden");
                setInnerText("discount-amount", discountAmout);

                const couponApply = document.getElementById("coupon-apply");
                couponApply.style.display = "none";
              });
            } else {
              if (text.trim() === "Couple 20") {
                applyBtn.addEventListener("click", function () {
                  let discountAmout = discount20(totalPrice);
                  let grandPrice = totalPrice - discountAmout;
                  setInnerText("grand-price", grandPrice);

                  const showAmountDiscount =
                    document.getElementById("show-amount");
                  showAmountDiscount.classList.remove("hidden");
                  setInnerText("discount-amount", discountAmout);

                  const couponApply = document.getElementById("coupon-apply");
                  couponApply.style.display = "none";
                });
              } else {
                alert("Not Valid");
              }
            }
          }
        });

        const sendBtn = document.getElementById("send-btn");
        const inputNumber = document.getElementById("input-number");

        inputNumber.addEventListener("keyup", function (event) {
          const number = event.target.value;

          if (seatArr.length > 0 && number !== "" && number.length >= 10) {
            sendBtn.removeAttribute("disabled");
            sendBtn.classList.add(
              "bg-[#1DD100]",
              "hover:bg-[#1DD100]",
              "hover:border",
              "border-[#1DD100]"
            );



            sendBtn.addEventListener('click', function (e) {
              inputNumber.value = '';
             
            })
          }
        });
      } else if (seatArr.length >= 4) {
        alert("You Are Selected Maximum Number of Seat");
      }
    } else {
      // alert ("Already Selected");
     
    }
  });
}

// Set The Inner Text
function setInnerText(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function appendTableRow(seatNo) {
  const seatContain = document.getElementById("table-body");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("tr");
    td4.classList.add("tro");
    td1.innerText = seatNo;
    td2.innerText = "Economy";
    td3.innerText = 550;

    td4.appendChild(td1);
    td4.appendChild(td2);
    td4.appendChild(td3);

    seatContain.append(td4);
  
}

// 15%

function discount15(discounts) {
  const dicount = Math.round((discounts * 15) / 100);
  return dicount;
}

// 20%

function discount20(discounts) {
  const dicount = Math.round((discounts * 20) / 100);
  return dicount;
}



// Refresh The Page When Clicked Continue Button on Modal

const refreshBtn = document.getElementById('refresh-button');

refreshBtn.addEventListener('click', function (e) {
  location.reload();
})