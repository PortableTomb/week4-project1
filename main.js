
// $(document).ready(function(){

// Week 4 Project One Homework
//1. Hide Me when clicked:
$("div").click(function() {
	$(".hideMe").hide();
});  // Applies hide() to the elements w/ the .hideMe class of the div

//2. Click here to change the colour of 3rd "li" element.
$(".changeColor").click(function() {
	$(".changeMe").css("color","#8A2BE2");
});  //Selects the .changeColor class of the 2.button & targets the li w/ the .changeMe class

//3. When the 4th Item is clicked, add another beneath it.
$("li:nth-child(4)").click(function() {
	$("li:nth-child(4)").append("<li>Hi! I'm the other li created below.</li>");
});	 // Selects the 4th item via li:nth-child(4) & appends the new li

//4. Click button to remove the 2nd list item.
$("#removeLi").click(function() {
	$("li:nth-child(2)").remove();
}); //Selects from the button w/ id #removeLi & removes the 2nd item via li:nth-child(2)

//5. When the last list item is clicked, change its font size to 40px and hide all other items.
$("ul li:last-child").click(function() {
	$("ul li:last-child").css("font-size", "40px");
	$(this).siblings().hide();
});	//selects the last-child & changes fontsize to 40px
	//selects all the sibling elements and hides them

//6. When clicked make 1 more of me!

$(".cute").click(function() {
	$(".cute:first").clone().insertAfter(".cute:last");
}); // ** This solution makes single clones ... **
	//Takes the first .cute, makes a copy and places it last

//7. On a double-click anywhere on the page, turn this rounded rectangle into a square. 
$("#body").dblclick(function() {
	$("#makeSquare").css("width", "120px");
}); // Dblclicks on body changes width to make a square.

//8. Alert the user if they click this button:
$("#dontClick").click(function(){
	alert('Ha! I knew you would click this button if I told you not too.');
}); // Issues an alert on click...

//9. On click, change the page background to match these beautiful swatches.
  $(".black").click(function(){
 	$("body").addClass('black');
  });
  
  $(".wood").click(function(){
 	$("body").addClass('wood');
   });
		
 $(".chaos").click(function(){
 	$("body").addClass('chaos');
    });

   $(".restore").click(function(){
	 $("body").removeClass();
    });

//10. When your mouse is over the box, turn it red.
  $("#hover").mouseover(function(){
	$("#hover").css('background-color', '#ff0000');
	  });
		
//11. Add the class 'green' when clicked 
//12. Remove the class 'green' when clicked again. 

$("#hover").click(function(){
	$("#hover").toggleClass('green');
});


// EXERCISE THE JQUERY
// We'll be using the html in index.html for the following jQuery exercises.
// After you've completed an exercise, comment out your code (unless otherwise indicated).

// 1. Hide all of the paragraphs on the index.html page.
 // $(".hide").click(function() {
 //    $("p").hide();
 //  });

// 2. Hide all of the h2's on the page.
// $(".hider").click(function() {
//     $("h2").hide();
//   });

// 3. Hide all of the elements in the document.
// $("#hid").click(function() {
//     $("body").hide();
//   });

// 4. Hide all links on the page
// $(".cute").click(function() {
//     $("img").hide();
//   });

// 5. Hide all of the odd table rows (Austin, Colin, & Jessica's rows)
// 6. Hide all paragraphs when they're clicked.
