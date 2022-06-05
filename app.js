var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var setTime = setInterval(showtime, 1000);
let temp = true;

function showtime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDay();

    toptime.innerHTML = hours + ":" + minutes;
    middletime.innerHTML = hours + ":" + minutes;
    daydisplay.innerHTML = days[day];
}
setInterval(time, 1000);

function select(msgId) {
    let msg = document.getElementById("showMsg");
    let msgList = [
        "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
        "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
    ];
    document.getElementById("list").style.display = "none";
    msg.textContent = msgList[msgId - 1];
}

function sms() {
    if (temp) {
        temp = false;
        toptime.style.display = "none";
        document.querySelector(".centertime").style.display = "none";
        document.querySelector("#sms").style.display = "";
    }
    else{
        temp = true;
        toptime.style.display = "";
        document.querySelector(".centertime").style.display = "";
        document.querySelector("#sms").style.display = "none";
    }
}