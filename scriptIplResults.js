var firebaseConfig = {
  apiKey: "AIzaSyDr7jYBD30xTNKo5IYvtZZ6Hyt3moXQe2Q",
  authDomain: "sportsweb-b76dd.firebaseapp.com",
  databaseURL: "https://sportsweb-b76dd-default-rtdb.firebaseio.com",
  projectId: "sportsweb-b76dd",
  storageBucket: "sportsweb-b76dd.appspot.com",
  messagingSenderId: "529492985238",
  appId: "1:529492985238:web:e5579965b77616acf409b7",
  measurementId: "G-K46BCQGFV4"
};
firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var UserInputsRef=firebase.database().ref('UserInputs')
document.getElementById('testForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();
  var year=getInputVal('year');
  readYear(year);
}

function getInputVal(id){
  return document.getElementById(id).value;
}
function readYear(year){
  var ref = firebase.database().ref(year);
  ref.on('value', (data) => {
   var winners = data.val();
   document.getElementById("result1").innerHTML ="<br>"+ "1. " + winners[1];
   document.getElementById("result2").innerHTML ="<br>"+ "2. " + winners[2];
   document.getElementById("result3").innerHTML ="<br>"+ "3. " + winners[3];
   document.getElementById("result4").innerHTML ="<br>"+ "4. " + winners[4];
   document.getElementById("result5").innerHTML ="<br>"+ "5. " + winners[5];
})
}
  