var currentUser;
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        currentUser = db.collection("users").doc(user.uid);   //global
        console.log(currentUser);

        // the following functions are always called when someone is logged in
        read_display_Quote();
        insertName();
        populateCardsDynamically();
    } else {
        // No user is signed in.
        console.log("No user is signed in");
        window.location.href = "login.html";
    }
});

function read_display_Quote(){
    const date = new Date();
    const today = date.getDay();

    switch (today) {
        case 0:
            db.collection("quotes").doc("Sunday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(dayDoc => {                                                               //arrow notation
                console.log("current document data: " + dayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        case 1:
            db.collection("quotes").doc("Monday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(tuesdayDoc => {                                                               //arrow notation
                console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        case 2:
            db.collection("quotes").doc("Tuesday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(tuesdayDoc => {                                                               //arrow notation
                console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        case 3:
            db.collection("quotes").doc("Wednesday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(tuesdayDoc => {                                                               //arrow notation
                console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        case 4:
            db.collection("quotes").doc("Thursday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(tuesdayDoc => {                                                               //arrow notation
                console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        case 5:
            db.collection("quotes").doc("Friday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(tuesdayDoc => {                                                               //arrow notation
                console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        case 6:
            db.collection("quotes").doc("Saturday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
            .onSnapshot(tuesdayDoc => {                                                               //arrow notation
                console.log("current document data: " + tuesdayDoc.data());                          //.data() returns data object
                document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;      //using javascript to display the data on the right place
                
                //Here are other ways to access key:value data fields
                //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
                //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
            })
            break;
        default:
            console.log("current document data: None Available");                          //.data() returns data object
            document.getElementById("quote-goes-here").innerHTML = "Sorry, no daily quotes available!";
            break; 
    }
}
read_display_Quote();

function insertName(){
// to check if the user is logged in:
 firebase.auth().onAuthStateChanged(user =>{
     if (user){
         console.log(user.uid); // let me to know who is the user that logged in to get the UID
        currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
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

function writeHikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hikesRef = db.collection("hikes");

    hikesRef.add({
                      code:"BBY01",
        name: "Burnaby Lake Park Trail",    //replace with your own city?
        city: "Burnaby",
        province: "BC",
        level: "easy",
        length: "10",
        details: "Elmo goes here regularly",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()  
    });
    hikesRef.add({
                      code:"AM01",
        name: "Buntzen Lake Trail Trail",    //replace with your own city?
        city: "Anmore",
        province: "BC",
        level: "moderate",
        length: "10.5",
        details: "Elmo goes here regularly",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
   });
   hikesRef.add({
                      code:"NV01",
        name: "Mount Seymoure Trail",    //replace with your own city?
        city: "North Vancouver",
        province: "BC",
        level: "hard",
        length: "8.2",
        details: "Elmo goes here regularly",
        last_updated: firebase.firestore.Timestamp.fromDate(new Date("March 10, 2022"))
   });
}

function populateCardsDynamically() {
    let hikeCardTemplate = document.getElementById("hikeCardTemplate");  //card template
    let hikeCardGroup = document.getElementById("hikeCardGroup");   //where to append card
    
    //doublecheck: is your Firestore collection called "hikes" or "Hikes"?
    db.collection("hikes").get()   
        .then(allHikes => {
            allHikes.forEach(doc => {
                var hikeName = doc.data().name; //gets the name field
                var hikeID = doc.data().code; //gets the unique ID field
                var hikeLength = doc.data().length; //gets the length field
                let testHikeCard = hikeCardTemplate.content.cloneNode(true);
                testHikeCard.querySelector('.card-title').innerHTML = hikeName;
                testHikeCard.querySelector('.card-length').innerHTML = hikeLength;
                testHikeCard.querySelector('a').onclick = () => setHikeData(hikeID);

                //next 2 lines are new for demo#11
                //this line sets the id attribute for the <i> tag in the format of "save-hikdID" 
                //so later we know which hike to bookmark based on which hike was clicked
                testHikeCard.querySelector('i').id = 'save-' + hikeID;
                // this line will call a function to save the hikes to the user's document             
                testHikeCard.querySelector('i').onclick = () => saveBookmark(hikeID);

                testHikeCard.querySelector('img').src = `./images/${hikeID}.jpg`;
                hikeCardGroup.appendChild(testHikeCard);
            })
        })
}
populateCardsDynamically();

function setHikeData(id){
    localStorage.setItem ('hikeID', id);
}