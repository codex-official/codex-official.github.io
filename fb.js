import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, set, get, child} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL:"https://fir-test-1b571-default-rtdb.firebaseio.com/"
// }



const firebaseConfig = {
    apiKey: "AIzaSyBKNB3vnrvJRF1uY1x-qBL-7YWl71lkFDY",
    authDomain: "fir-test-1b571.firebaseapp.com",
    databaseURL: "https://fir-test-1b571-default-rtdb.firebaseio.com",
    projectId: "fir-test-1b571",
    storageBucket: "fir-test-1b571.appspot.com",
    messagingSenderId: "631675954378",
    appId: "1:631675954378:web:b502bb40fa2c939ee50033",
    measurementId: "G-NTX0TX1P26"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)


const movies = ref(database,"movies")
const books = ref(database,"books")
const chat = ref(database,"chat")
console.log(app);

const submit = document.getElementById("submit")
const list = document.getElementById("list")
const clr = document.getElementById('clr')
submit.addEventListener("click",test)
clr.addEventListener("click", clear)


function test() {
    const val = document.getElementById('input').value;
    const user = document.getElementById('userid').value;
    let newEl = document.createElement('li');
    let newVal = user+": "+val
    newEl.textContent=newVal;
    list.appendChild(newEl);
    // set(ref(database, '/chat'), {
    //     user: text
    // });
    push(chat,newVal);
    console.log(user);
    document.getElementById('input').value="";
}

function clear() {
    document.getElementById('userid').value = "";
}


// function log() {
//     onValue(movies, function(snapshot) {
//         let booksArray = Object.keys(snapshot.val());
//         console.log(booksArray);
//     })
// }
// log();

function display() {
    onValue(chat, function(snapshot) {
        list.innerHTML=""
        let chatsArray = Object.values(snapshot.val());
        console.log(chatsArray[chatsArray.length - 1]);
        for (let i=0;i<chatsArray.length;i++) {
            let newEl = document.createElement('li');
            newEl.textContent=chatsArray[i];
            list.appendChild(newEl);
        }
    })
}
display();
