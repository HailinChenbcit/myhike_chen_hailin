function read_display_quote() {
    // console.log("inside the quote function")

    //get into right collection
    db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc =>{
        console.log(tuesdayDoc.data());//.data() returns data object
        document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote
    })
}
read_display_quote()

function insertName(){
    // to check if the user is logged in:
     firebase.auth().onAuthStateChanged(user =>{
         if (user){
             console.log(user.uid); // let me to know who is the user that logged in to get the UID
            currentUser = db.collection("user").doc(user.uid); // will to to the firestore and go to the document of the user
            currentUser.get().then(userDoc=>{
                //get the user name
                var user_Name= userDoc.data().name;
                console.log(user_Name);
                $("#name-goes-here").text(user_Name); //jquery
                // document.getElementByID("name-goes-here").innetText=user_Name;
            })    
        }
    
     })
    }
    insertName();