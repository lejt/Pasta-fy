// USES LOCAL STORAGE TO SAVE CURRENT TAB OF PAGE
if (!localStorage.getItem("currentId")) { 
   currentIdValue = "page1";
   localStorage.setItem("currentId", currentIdValue);
};

// console.log(localStorage.getItem("currentId"));

page1 = document.getElementById("page1").id;
page2 = document.getElementById("page2").id;
page3 = document.getElementById("page3").id;
page4 = document.getElementById("page4").id;
page5 = document.getElementById("page5").id;

tabs = [page1, page2, page3, page4, page5];

for (let i=0; i<tabs.length; i++) {
   if (tabs[i] == localStorage.getItem("currentId")) {
      document.getElementById(tabs[i]).className="selected";
      document.getElementById("page_content").innerHTML=document.getElementById(localStorage.getItem("currentId")+"_desc").innerHTML;
   } else {
      document.getElementById(tabs[i]).className="notselected";
   }
}

// FUNCTION FOR CHANGING TABS ON SINGLE PAGE
function change_tab(id) {
   currentIdValue = id;
   localStorage.setItem("currentId", currentIdValue);
   
   document.getElementById("page_content").innerHTML=document.getElementById(localStorage.getItem("currentId")+"_desc").innerHTML;
   document.getElementById("page1").className="notselected";
   document.getElementById("page2").className="notselected";
   document.getElementById("page3").className="notselected";
   document.getElementById("page4").className="notselected";
   document.getElementById("page5").className="notselected";
   document.getElementById(id).className="selected";
};
