
// Love Count Functionality
let loveIcons = document.querySelectorAll(".love-icon");

let loveCount = parseInt(document.getElementById("love-count").innerText);


for(let loveIcon of loveIcons){
    loveIcon.addEventListener("click",function(){
        loveCount = loveCount+1;
        document.getElementById("love-count").innerText = loveCount;
    })
}


// Call Buttons Functionality...................................

// Call Buttons selection
let callButtons = document.querySelectorAll(".call-btn");
let CallBtnArray = Array.from(callButtons);


// Service names selection
let serviceNames = document.querySelectorAll(".service-name");
let serviceNamesArray = Array.from(serviceNames);

// Service numbers selection
let serviceNumbers = document.querySelectorAll(".service-number");
let serviceNumbersArray = Array.from(serviceNumbers);

// Service Title
let serviceTitles = document.querySelectorAll(".service-title");
let serviceTitlesArray = Array.from(serviceTitles);


// Coin selection
let coin = document.getElementById("coin").innerText;
let totalCoin = parseInt(coin);

for(let callBtn of callButtons){
    callBtn.addEventListener("click",function(){
        let index = CallBtnArray.indexOf(callBtn);
        let name = serviceNamesArray[index].innerText;
        let number = serviceNumbersArray[index].innerText;
        let title = serviceTitlesArray[index].innerText;
        
        if(totalCoin>=20){
            totalCoin -= 20;
            alert(`You are calling to ${name} with the number ${number}`);
            document.getElementById("coin").innerText = totalCoin;

            let historyParent = document.getElementById("history-section-parent");

            let historyDiv = document.createElement("div");
            historyDiv.classList.add("mt-2","grid","grid-cols-[70%_30%]","gap-5");

            let infoDiv = document.createElement("div");

            let historyServiceName = document.createElement("h2");
            historyServiceName.classList.add("text-2xl", "font-bold");
            historyServiceName.innerText = title;

            let historyServiceNumber = document.createElement("p");
            historyServiceNumber.classList.add("text-[1.5rem]");
            historyServiceNumber.innerText = number;

            infoDiv.appendChild(historyServiceName);
            infoDiv.appendChild(historyServiceNumber);

            let timeContainer = document.createElement("p");
            timeContainer.classList.add("text-[1.5rem]");
            timeContainer.innerText = new Date().toLocaleTimeString("en-US", { hour12: true });

            historyDiv.appendChild(infoDiv);
            historyDiv.appendChild(timeContainer);

            historyParent.appendChild(historyDiv);


        }
        else{
            alert("Your Credit are short. Please, Try with adequate coins")
        }

    })
}






// ......................................................................
// Call History section
document.getElementById("clear-history-btn").addEventListener("click",function(){
    document.getElementById("history-section-parent").innerHTML = '';
})








// Copy button making dynamic here
let copyButtons = document.querySelectorAll(".copy-btn");
let copyButtonsArray = Array.from(copyButtons);

let copyCount = document.getElementById("copy-count").innerText;
convertedCopyCount = parseInt(copyCount);

for(let copybtn of copyButtons){
    copybtn.addEventListener("click",function(){
        let btnIndex = copyButtonsArray.indexOf(copybtn);

        convertedCopyCount ++;
        alert('Text copied to clipboard!');
        document.getElementById("copy-count").innerText = convertedCopyCount;

        let number = serviceNumbersArray[btnIndex].innerText;
        navigator.clipboard.writeText(number)
        
        .then(function() {
        let toast = document.getElementById("toast");
        toast.style.opacity = 1; 
        setTimeout(function() {
          toast.style.opacity = 0;
        }, 2000);
      })
      .catch(function(err) {
        console.error('Copy failed', err);
      });
       


    })
}

