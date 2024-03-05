let theContainer = document.getElementById(`container`);
if (localStorage.getItem(`questionnaire`) !== null) {
    theContainer.style.display = `block`;
    theContainer.innerHTML = localStorage.getItem(`questionnaire`);
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
        theContainer.innerHTML = `
            <!--1--> <div>${++a} => 2</div>
            <!--2--> <div>${++a} => ${age}</div>
            <!--3--> <div>${++a} => ${Math.ceil(Math.random() * 2)}</div>
            <!--4--> <div>${++a} => ${[1, 1, 1, 1, 1, 1, 2, 1, 1][Math.round(Math.random() * 8)]}</div>
            <!--5--> ${age > 30 ? `<div>${++a} => ${[2, 2, 2, 3, 4, 2, 2, 2, 2][Math.round(Math.random() * 8)]}</div>` : `<div>${++a} => ${[2, 2, 2, 1, 1, 3, 2, 2, 2, 2][Math.round(Math.random() * 9)]}</div>`}
            <!--6--> <div>${++a} => ${Math.ceil(Math.random() * 4)}</div>
            <!--7--> <div>${++a} => ${Math.ceil(Math.random() * 4)}</div>
            <!--8--> <div>${++a} => ${Math.ceil(Math.random() * 3)}</div>
            <!--9--> <div>${++a} => ${salary}</div>
            <!--10--> <div>${++a} => ${Math.ceil(Math.random() * 2)}</div>
            <!--11--> <div>${++a} => 1</div>
            <!--12--> <div>${++a} => 1</div>
            <!--13--> <div>${++a} => 1</div>
            <!--14--> <div>${++a} => ${recycle}</div>
            <!--15--> <div>${++a} => ${wealth}</div>
            <!--16--> ${recycle === 1 ? `<div>${++a} => 1</div>` : `<div>${++a} => 2</div>`}
            <!--17--> <div>${++a} => ${Math.ceil(Math.random() * 2)}</div>
            <!--18--> <div>${++a} => 1</div>
            <!--19--> <div>${++a} => 1</div>
            <!--20--> <div>${++a} => 1</div>
            <!--21--> <div>${++a} => 1</div>
            <!--22--> ${wealth === 1 ? `<div>${++a} => 1</div>` : `<div>${++a} => ${Math.ceil(Math.random() * 2) + 1}</div>`}
            <!--23--> <div>${++a} => ${Math.ceil(Math.random() * 3)}</div>
            <!--24--> <div>${++a} => 1</div>
            <!--25--> <div>${++a} => 1</div>
            <!--26--> <div>${++a} => 1</div>
            <!--27--> <div>${++a} => ${Math.ceil(Math.random() * 3)}</div>
            <!--28--> <div>${++a} => 1</div>
            <!--29--> <div>${++a} => ${Math.ceil(Math.random() * 3)}</div>
            <!--30--> <div>${++a} => ${salary === 3 ? Math.ceil(Math.random() * 2) : 2}</div>
            <!--31--> <div>${++a} => ${[1, 4][Math.round(Math.random())]}</div>
            <!--32--> <div>${++a} => ${Math.ceil(Math.random() * 2)}</div>
            <!--33--> <div>${++a} => ${uponChoice1}</div>
            <!--34--> ${uponChoice1 === 1 ? `<div>${++a} => ${[`plastics`, `paper`, `metals`, `cardboard`][Math.round(Math.random() * 3)]}</div>` : `<div>${++a} =></div>`}
            <!--35--> <div>${++a} => ${uponChoice2}</div>
            <!--36--> ${uponChoice2 === 1 ? `<div>${++a} => 1</div>` : `<div>${++a} =></div>`}
            <!--37--> <div>${++a} => ${Math.ceil(Math.random() * 3)}</div>
            <!--38--> <div>${++a} => ${Math.ceil(Math.random() * 2)}</div>
            <!--39--> <div>${++a} => 1</div>
            <!--40--> <div>${++a} => ${[15, 20, 25, 30, ``][Math.round(Math.random() * 4)]}</div>
            <!--41--> <div>${++a} => ${Math.ceil(Math.random() * 4)}</div>
            <!--42--> <div>${++a} => ${Math.ceil(Math.random() * 5)}</div>
        `;
        a = 0;
        localStorage.setItem(`questionnaire`, theContainer.innerHTML);
    });