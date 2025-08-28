const heartButtons = document.querySelectorAll('.heart-btn');
const heartCount = document.getElementById('heartCount');
let count = 0;

heartButtons.forEach(button => {
    button.addEventListener("click", function(e){
        count++;
        heartCount.innerText = count;
    });
});


// Call buttons (History and others staff related to Calls)
const callButtons = document.querySelectorAll('.call-btn');
const coinCount = document.getElementById('coinCount');
const clearHistoryBtn = document.getElementById('clearHistory');
const historyList = document.getElementById('historyList');
let coins = parseInt(coinCount.textContent);

let history = [];

function renderHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        const callItem = document.createElement("div");
        callItem.className = "p-5 flex justify-between bg-gray-200 shadow-sm rounded-2xl items-center mb-2";
        callItem.innerHTML = `
            <div>
                <h1 class="text-[12px] font-semibold">${item.name}</h1>
                <p class="text-[12px]">${item.number}</p>
            </div>
            <div>
                <p class="text-[12px] font-semibold">${item.time}</p>
            </div>
        `;
        historyList.appendChild(callItem);
    });
}

callButtons.forEach(button => {
    button.addEventListener("click", function(){
        if(coins < 20) {
            alert("Not enough coins , You need at least 20 coins for a call!");
            return;
        }

        const card = button.closest(".p-15");
        const serviceName = card.querySelector("h1.font-bold").textContent;
        const serviceNumber = card.querySelector("p.text-2xl").textContent;
        const serviceNames = card.querySelector("p.text-gray-400.text-sm").textContent;

        alert("📞 Calling " + serviceNames + " " + serviceNumber + "....");
        coins -= 20;
        coinCount.textContent = coins;

        const data = {
           name: serviceName,
           number: serviceNumber,
           time: new Date().toLocaleTimeString()
        }
        history.push(data);
        renderHistory();
    });
});

// Clear button
clearHistoryBtn.addEventListener("click", () => {
    history = [];
    renderHistory();
});


// copy functions and Counter related works 
const copyButtons = document.querySelectorAll('.copy-btn');
const copyButton = document.getElementById('copyButton');
let cnt = 0;

copyButtons.forEach(button => {
    button.addEventListener("click", function(e){
        const card = button.closest(".p-15"); 
        const number = card.querySelector("p.text-2xl").textContent.trim();
        const tempInput = document.createElement("textarea");
        tempInput.value = number;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy"); 
        document.body.removeChild(tempInput);
        alert("Number is Copied: " + number);
        cnt++;
        copyButton.innerText = cnt + " Copy";
    });
})