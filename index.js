// declaration of the variable
let a, time, date, m;

//function to get and print the date and time
myFunction = () => {
    a = new Date();
    date = check(a.getDate()) + '-' + check(a.getMonth() + 1) + '-' + check(a.getFullYear());
    time = check(a.getHours()) + ':' + check(a.getMinutes()) + ':' + check(a.getSeconds());
    document.getElementById('time').innerHTML = time + "<br> Date: " + date;
}

//This arrow function will add 0 in front of the number if it is smaller than 10
check = (m) => {
    if (m < 10) {
        m = "0" + m;
    }
    return m;
}

//This will make the function myFunction to execute after every 1000ms.
window.setInterval(myFunction, 1000);
