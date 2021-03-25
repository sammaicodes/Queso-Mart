console.log('does this work 1?')


$(document).ready(function() {
  // when the button  is clicked
  $("#checkout").click(function() {
      
    let option = $("#cheddar").val();
    // find which option was selected
    // get all of the options
    let option1 = $("#Mild")[0].selected;
    let option2 = $("#Sharp")[0].selected;
    let option3 = $("#Extra")[0].selected;
    let option4 = $("#Five")[0].selected;
    let option5 = $("#Dry")[0].selected;


    // let option6 = $("#Dry").selected;
    // let properties = $("#Dry");
    // console.log("Here are the properties/keys: "+ properties);
    // console.log(properties[0]);
    // console.log("Length: "+ properties.length);

    // console.log("Here is the value: " + option6);

    // determine which is chosen/selected
    let cheese; // placeholder for when we find the right cheese
    
    // if the option that we are checking is selected, then we want to put that option into cheese
    if (option1 === true) {
      cheese = "Mild";
    } else if (option2 === true) {
      cheese = "Sharp";
    } else if (option3 === true) {
      cheese = "Extra Sharp";
    } else if (option4 === true) {
      cheese = "5 Year Aged";
    } else if (option5 === true) {
      cheese = "Dry Aged";
    }

    // put the cheese option in the cheeseSelection span
    $(".cheeseSelection").text(cheese);

    // display the selection in the receipt div
    $("#receipt").show();
  });
}); 