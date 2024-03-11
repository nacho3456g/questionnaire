let theContainer = document.getElementById(`container`);
if (localStorage.getItem(`questionnaire`) !== null) {
    theContainer.style.display = `block`;
    theContainer.innerHTML = localStorage.getItem(`questionnaire`);
    let serialNumber = document.getElementById(`serialNumber`);
    if (localStorage.getItem(`serial`) !== null) {
        serialNumber.innerHTML = localStorage.getItem(`serial`);
    }
    let serial = document.getElementById(`serial`);
    serial.addEventListener(`blur`, function () {
        if (serial.value.length === 3) {
            localStorage.setItem(`serial`, serial.value);
            serialNumber.innerHTML = localStorage.getItem(`serial`);
        }
    });
    let allResults = [...document.querySelectorAll(`div.container div span`)];
    let copyAll = allResults.reduce((accum, currEle) => {
        return accum + `${currEle.innerHTML}\t`;
    }, ``).trim();
    let showResultDiv = document.getElementById(`showResult`);
    let copyButton = document.getElementById(`copyButton`);
    copyButton.addEventListener(`click`, function () {
        if (/^\d{1}\t/.test(copyAll)) {
            copyAll = localStorage.getItem(`serial`) + `\t` + copyAll;
        }
        if (/^\d{3}\t\d{1}/.test(copyAll)) {
            copyAll = localStorage.getItem(`serial`) + copyAll.slice(3);
        }
        showResultDiv.style.display = `block`;
        showResultDiv.innerHTML = `<input value="${copyAll}" readonly>`;
        if (document.querySelector(`div.container div#showResult input`)) {
            document.querySelector(`div.container div#showResult input`).addEventListener(`select`, function () {
                this.select();
            });
        };
    });
};
let theGenerator = document.getElementById(`generator`);
let newResultBox = document.getElementById(`newResult`);
theGenerator.addEventListener(`click`, function () {
    newResultBox.style.display = `flex`;
    setTimeout(_ => {
        newResultBox.style.display = `none`;
    }, 1000);
    theContainer.style.display = `block`;
    let a = 0;
    let age = Math.round(Math.random() * 35) + 25;
    let salary = Math.ceil(Math.random() * 3);
    let wealth = Math.ceil(Math.random() * 2);
    let uponChoice1 = Math.ceil(Math.random() * 2);
    let uponChoice2 = Math.ceil(Math.random() * 2);
    let recycle = Math.ceil(Math.random() * 2);
    let wasteRemoval = Math.ceil(Math.random() * 4);
    theContainer.innerHTML = `
            <div><div id="serialNumber">${localStorage.getItem(`serial`) || `Serial`}</div></div>
            <div><p>If your serial Number is already inserted, you don't have to insert it again!</p></div>
            <div class="copy-questionnaire" id="copy"><input type="number" id="serial" placeholder="Serial" title="If your serial Number is already inserted, you don't have to insert it again!"><div id="copyButton">Show Final Result</div></div>
            <div id="showResult"></div>
            <!--1--> <div>${++a} => <span>2</span></div>
            <!--2--> <div>${++a} => <span>${age}</span></div>
            <!--3--> <div>${++a} => <span>${Math.ceil(Math.random() * 2)}</span></div>
            <!--4--> <div>${++a} => <span>${[1, 1, 1, 1, 1, 1, 2, 1, 1][Math.round(Math.random() * 8)]}</span></div>
            <!--5--> ${age > 30 ? `<div>${++a} => <span>${[2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2][Math.round(Math.random() * 10)]}</span></div>` : `<div>${++a} => <span>${[2, 2, 2, 2, 1, 1, 3, 2, 2, 2, 2][Math.round(Math.random() * 10)]}</span></div>`}
            <!--6--> <div>${++a} => <span>${Math.ceil(Math.random() * 4)}</span></div>
            <!--7--> <div>${++a} => <span>${Math.ceil(Math.random() * 4)}</span></div>
            <!--8--> <div>${++a} => <span>${Math.ceil(Math.random() * 3)}</span></div>
            <!--9--> <div>${++a} => <span>${salary}</span></div>
            <!--10--> <div>${++a} => <span>${Math.ceil(Math.random() * 2)}</span></div>
            <!--11--> <div>${++a} => <span>1</span></div>
            <!--12--> <div>${++a} => <span>1</span></div>
            <!--13--> <div>${++a} => <span>1</span></div>
            <!--14--> <div>${++a} => <span>${recycle}</span></div>
            <!--15--> <div>${++a} => <span>${wealth}</span></div>
            <!--16--> ${recycle === 1 ? `<div>${++a} => <span>1</span></div>` : `<div>${++a} => <span>2</span></div>`}
            <!--17--> <div>${++a} => <span>${Math.ceil(Math.random() * 2)}</span></div>
            <!--18--> <div>${++a} => <span>1</span></div>
            <!--19--> <div>${++a} => <span>1</span></div>
            <!--20--> <div>${++a} => <span>1</span></div>
            <!--21--> <div>${++a} => <span>1</span></div>
            <!--22--> ${wealth === 1 ? `<div>${++a} => <span>1</span></div>` : `<div>${++a} => <span>${Math.ceil(Math.random() * 2) + 1}</span></div>`}
            <!--23--> <div>${++a} => <span>${Math.ceil(Math.random() * 3)}</span></div>
            <!--24--> <div>${++a} => <span>1</span></div>
            <!--25--> <div>${++a} => <span>1</span></div>
            <!--26--> <div>${++a} => <span>1</span></div>
            <!--27--> <div>${++a} => <span>${Math.ceil(Math.random() * 3)}</span></div>
            <!--28--> <div>${++a} => <span>1</span></div>
            <!--29--> <div>${++a} => <span>${Math.ceil(Math.random() * 3)}</span></div>
            <!--30--> <div>${++a} => <span>${salary === 3 ? Math.ceil(Math.random() * 2) : 2}</span></div>
            <!--31--> <div>${++a} => <span>${[1, 4][Math.round(Math.random())]}</span></div>
            <!--32--> <div>${++a} => <span>${Math.ceil(Math.random() * 2)}</span></div>
            <!--33--> <div>${++a} => <span>${uponChoice1}</span></div>
            <!--34--> ${uponChoice1 === 1 ? `<div>${++a} => <span>${[`plastics`, `paper`, `metals`, `cardboard`][Math.round(Math.random() * 3)]}</span></div>` : `<div>${++a} => <span></span></div>`}
            <!--35--> <div>${++a} => <span>${uponChoice2}</span></div>
            <!--36--> ${uponChoice2 === 1 ? `<div>${++a} => <span>1</span></div>` : `<div>${++a} => <span></span></div>`}
            <!--37--> <div>${++a} => <span>${Math.ceil(Math.random() * 3)}</span></div>
            <!--38--> <div>${++a} => <span>${Math.ceil(Math.random() * 2)}</span></div>
            <!--39--> <div>${++a} => <span>1</span></div>
            <!--40--> <div>${++a} => <span>${[15, 20, 25, 30][Math.round(Math.random() * 3)]}</span></div>
            <!--41--> <div>${++a} => <span>${wasteRemoval}</span></div>
            <!--42--> <div>${++a} => <span>${wasteRemoval === 1 ? Math.ceil(Math.random() * 2) : wasteRemoval === 2 ? Math.round(Math.random()) + 2 : Math.round(Math.random() * 2) + 3}</span></div>
        `;
    let allResults = [...document.querySelectorAll(`div.container div span`)];
    let copyAll = allResults.reduce((accum, currEle) => {
        return accum + `${currEle.innerHTML}\t`;
    }, ``).trim();
    let serial = document.getElementById(`serial`);
    let serialNumber = document.getElementById(`serialNumber`);
    serial.addEventListener(`blur`, function () {
        if (serial.value.length === 3) {
            localStorage.setItem(`serial`, serial.value);
            serialNumber.innerHTML = localStorage.getItem(`serial`);
        }
    });
    let showResultDiv = document.getElementById(`showResult`);
    let copyButton = document.getElementById(`copyButton`);
    copyButton.addEventListener(`click`, function () {
        if (/^\d{1}\t/.test(copyAll)) {
            copyAll = localStorage.getItem(`serial`) + `\t` + copyAll;
        }
        if (/^\d{3}\t\d{1}/.test(copyAll)) {
            copyAll = localStorage.getItem(`serial`) + copyAll.slice(3);
        }
        showResultDiv.style.display = `block`;
        showResultDiv.innerHTML = `<input value="${copyAll}" readonly>`;
        if (document.querySelector(`div.container div#showResult input`)) {
            document.querySelector(`div.container div#showResult input`).addEventListener(`select`, function () {
                this.select();
            });
        };
    });
    a = 0;
    localStorage.setItem(`questionnaire`, theContainer.innerHTML);
});
let d = new Date();
console.log(d);
