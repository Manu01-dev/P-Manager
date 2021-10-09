const income = document.querySelector('#income');
const expence = document.querySelector('#expence');

const balanceN = document.querySelector('.balanceN');

const incomeForm = document.querySelector('.incomeForm');
const expenceForm = document.querySelector('.expenceForm');

const incomeInput = document.querySelector('.incomeInput');
const expenceInput = document.querySelector('.expenceInput');

const incomeText = document.querySelector('.incomeText');
const expenceText = document.querySelector('.expenceText');

const incomeBtn = document.querySelector('.incomeBtn');
const expenceBtn = document.querySelector('.expenceBtn');

const callIncome = document.querySelector('.callIncome');
const callExpence = document.querySelector('.callExpence');

const erro1 = document.querySelector('.erro1');
const erro2 = document.querySelector('.erro2');
const erro3 = document.querySelector('.erro3');
const erro4 = document.querySelector('.erro4');

const List = document.querySelector('.List');


//get all items
items = JSON.parse(localStorage.getItem("transactions"));
incomeFigure = localStorage.getItem('income');
balance = localStorage.getItem('balance');

expenceItems = JSON.parse(localStorage.getItem("expences"));
expenceFigure = localStorage.getItem('expence');

//console.log(incomeFigure);
//console.log(items)

//call forms
callIncome.addEventListener('click', function() {
    incomeForm.style.display = 'block';
});

callExpence.addEventListener('click', function() {
    expenceForm.style.display = 'block';
});


//add expence
expenceBtn.addEventListener('click', function(e) {
    e.preventDefault();

    text = expenceText.value;
    value = expenceInput.value;

    if (text !== '' & value !== '') {
    expenceItems = JSON.parse(localStorage.getItem("expences"));
    expenceFigure = localStorage.getItem('expence');
    balance = localStorage.getItem('balance');

    balanceFigure = parseInt(balance);
    prev = parseInt(expenceFigure);
    value = parseInt(value);


    const expences = [
        {
            text: text,
            value: value,
        }]

        const itemLi = document.createElement('li');

    //balance caliculations
    if (balance == null) {
        localStorage.setItem('balance', value);
        balanceN.innerHTML = value;
    } else {
        remBalance = balanceFigure - value;
        localStorage.setItem('balance', remBalance);
        balanceN.innerHTML = remBalance;
    }
       

    if (expenceItems == null) {
        //add to the localstorage
        localStorage.setItem('expence', value);
        localStorage.setItem('expences', JSON.stringify(expences));
        
        //add to the income placehilder
        expence.innerHTML = value;

        //render item on the list
        itemLi.innerHTML = `${text} ${value} <button>x</button>`;

        //styles
        itemLi.style.listStyle = "none";
        itemLi.style.borderLeftStyle = "solid";
        itemLi.style.borderLeftSize = "5x";
        itemLi.style.borderLeftColor = "red";
    
        List.appendChild(itemLi);

        //hide form
        expenceForm.style.display = 'none';

        } else {

            newExpence = {
                text: text,
                value: value,
            }
            expenceItems.push(newExpence);
            figureUpdate = prev + value;
            balanceUpdate = balanceFigure - value;

            localStorage.setItem('expence', figureUpdate);
            localStorage.setItem('expences', JSON.stringify(expenceItems));

     //add to the income placeholder
        expence.innerHTML = value+prev;

        //render item on the list
        itemLi.innerHTML = `${text} ${value} <button>x</button>`
    
        List.appendChild(itemLi);

        //styles
        itemLi.style.listStyle = "none";
        itemLi.style.borderLeftStyle = "solid";
        itemLi.style.borderLeftSize = "5px";
        itemLi.style.borderLeftColor = "red";
        }

        //empty the inputs
        expenceText.value = "";
        expenceInput.value = "";
        erro3.innerHTML = "";
        erro4.innerHTML = "";

        //hide form
        //expenceForm.style.display = 'none';
        

        //display error messseges
    } else {
        if (text === '') {
            erro3.innerHTML = "Please add description";
        } else {
            if (value === '') {
                erro4.innerHTML = "Please add expence value"
            }
        }
    }
    
    });



        //add income
incomeBtn.addEventListener('click', function(e) {
    e.preventDefault();


    text = incomeText.value;
    value = incomeInput.value;


    if (text !== '' & value !== '') {
    items = JSON.parse(localStorage.getItem("transactions"));
    incomeFigure = localStorage.getItem('income');
    balance = localStorage.getItem('balance');

    balanceFigure = parseInt(balance);
    prev = parseInt(incomeFigure);
    value = parseInt(value);


    const transaction = [
        {
            text: text,
            value: value,
        }]

        const itemLi = document.createElement('li');


        //balance calculations
        if (balance == null) {
            localStorage.setItem('balance', value);
            balanceN.innerHTML = value;
        } else {
            remBalance = balanceFigure + value;
            localStorage.setItem('balance', remBalance);
            balanceN.innerHTML = remBalance;
        }

    if (items == null) {
        //add to the localstorage
        localStorage.setItem('income', value);
        localStorage.setItem('transactions', JSON.stringify(transaction));

        
        //add to the income placehilder
        income.innerHTML = value;

        //add item to the income list
        const itemLi = document.createElement('li');
    
        itemLi.innerHTML = `${text} ${value} <button>x</button>`

        //styles
        itemLi.style.listStyle = "none";
        itemLi.style.borderLeftStyle = "solid";
        itemLi.style.borderLeftSize = "5px";
        itemLi.style.borderLeftColor = "green";
    
        List.appendChild(itemLi);
        

        } else {

        newTransaction = {
            text: text,
            value: value,
        }
            items.push(newTransaction);
            figureUpdate = prev + value;

            localStorage.setItem('income', figureUpdate);
            localStorage.setItem('transactions', JSON.stringify(items));

     //add to the income placehilder
        income.innerHTML = value+prev;
        

        //add item to the income list
    
        itemLi.innerHTML = `${text} ${value} <button>x</button>`

        //styles
        itemLi.style.listStyle = "none";
        itemLi.style.borderLeftStyle = "solid";
        itemLi.style.borderLeftSize = "5px";
        itemLi.style.borderLeftColor = "green";
    
        List.appendChild(itemLi);

        }
        //empty the inputs
        incomeText.value = "";
        incomeInput.value = "";
        erro1.innerHTML = "";
        erro2.innerHTML = "";

        //hide form
        incomeForm.style.display = 'none';

    }  else {
        if (text === '') {
            erro1.innerHTML = "Please add description";
        } else {
            if (value === '') {
                erro2.innerHTML = "Please add expence value"
            }
        }
    }
    });





function renderPage() {

    //balance value
    if (balance == null) {
        balanceN.innerHTML = 0;
    } else {
        balanceN.innerHTML = balance;
    }

    //income value
    if (items == null) {
        income.innerHTML = 0;
    } else {
        income.innerHTML = incomeFigure;

    }

     //expence value
    if (expenceItems == null) {
        expence.innerHTML = 0;
        balanceN.innerHTML = 0;
    } else {
    expence.innerHTML = expenceFigure;
    }

    if (items !== null) {
        items.forEach(item => {

            const itemLi = document.createElement('li');
        
            itemLi.innerHTML = `${item.text} ${item.value} <button>x</button>`


        //styles
        itemLi.style.listStyle = "none";
        itemLi.style.borderLeftStyle = "solid";
        itemLi.style.borderLeftSize = "5px";
        itemLi.style.borderLeftColor = "green";
        
            List.appendChild(itemLi);
        });
    }



    if (expenceItems !== null) {
        expenceItems.forEach(expenceItem => {

            const itemLi = document.createElement('li');
        
            itemLi.innerHTML = `${expenceItem.text} ${expenceItem.value} <button>x</button>`


        //styles
        itemLi.style.listStyle = "none";
        itemLi.style.borderLeftStyle = "solid";
        itemLi.style.borderLeftSize = "5px";
        itemLi.style.borderLeftColor = "red";
        
            List.appendChild(itemLi);
        });
    }

}


renderPage();