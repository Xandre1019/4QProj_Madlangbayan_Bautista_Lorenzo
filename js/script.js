
function collectInputPage1() {
    var fullname = fname.value + " " + lname.value;
    page1 = {
      name: fullname,
      classSection: sections.value,
      age: age.value,
    }

    return page1;
  }

  function collectInputPage2() {
  page2 = {
      invite: invite.value,
		  tickets: tickets.value,
		  movie: movies.value,
		  seats: seat.value,
    }
  
    return page2;
  }

  function collectInputPage3() {
    page3 = {
      place: place.value,
      friend1: friend1.value,
      friend2: friend2.value
    }
  
    var formString3 = JSON.stringify(page3);
    var dataPage3 = "page3";
		localStorage.setItem(dataPage3, formString3);

    var x = collectInputPage1();
    var formString1 = JSON.stringify(x);
    var dataPage1 = "x";
		localStorage.setItem(dataPage1, formString1);

    var y = collectInputPage2();
    var formString2 = JSON.stringify(y);
    var dataPage2 = "y";
		localStorage.setItem(dataPage2, formString2);

    if (confirm("Are you sure you want to submit?")) {
      window.open("summary.html","_self");
    }

    else {
      return false;
    }

	  return page3;
  }

function summaryPage() {

  dataPage1 = "x";
  dataPage2 = "y";
  dataPage3 = "page3";

	var formData1 = localStorage.getItem(dataPage1);
	var formDataObj1 = JSON.parse(formData1); 
  var formData2 = localStorage.getItem(dataPage2);
	var formDataObj2 = JSON.parse(formData2); 
  var formData3 = localStorage.getItem(dataPage3);
	var formDataObj3 = JSON.parse(formData3); 

	fullname.innerHTML = formDataObj1.name;
	section.innerHTML  = formDataObj1.section;
	age.innerHTML  = formDataObj1.age;

	invite.innerHTML  = formDataObj2.invite;
	tickets.innerHTML  = formDataObj2.tickets;
	movies.innerHTML  = formDataObj2.movies;
	seat.innerHTML  = formDataObj2.seat;

	friend1.innerHTML  = formDataObj3.friend1;
	friend2.innerHTML  = formDataObj3.friend2;
	place.innerHTML  = formDataObj3.place;
  }

/////////////////////////
  function nextButton1stPage() {
    collectInputPage1();
    window.open("second.html","_self");
  }

  function nextButton2ndPage() {
    collectInputPage2();
    window.open("third.html","_self");
  }
///////////////////////////////////


////////////////////////
  function prevButton2ndPage() {
    window.open("index.html","_self")
  }

  function prevButton3rdPage() {
    window.open("second.html","_self")
  }
  ///////////////////////