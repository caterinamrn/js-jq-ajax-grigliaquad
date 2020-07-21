// confronto il numero randomico con cinque e cambio il colore di sfondo della cella
function confrontoCinque(selected,value) {
  var confronto = value<=5;
  if (confronto) {
    selected.addClass("min");
  }
  else {
    selected.addClass("max");
  }
}

// numero random da 1 a 9
function getRandomNum(selected) {
  $.ajax({
    url:"https://flynn.boolean.careers/exercises/api/random/int",
    method:"GET",
    success:function (data,state) {

      var success = data["success"];
      var value = data["response"];

      if (success) {
        // console.log(data);
        selected.children("span").append(value);
        confrontoCinque(selected,value);
      }
      else {
        console.log("error");
      }
    },
    error:function(request,state,error){
      console.log("request",request);
      console.log("state",state);
      console.log("error",error);
    }
  })
}
// seleziono la cella dove inserire il numero, ogni cella può essere selezionata solo 1 volta
function selectCell(){
  var target = $("#tabella td");
  target.click(
    function () {
      var selected = $(this);
      var contenuto = selected.children("span").text();

      if (contenuto == "") {
      // console.log("è vuoto");
      getRandomNum(selected);
      }

      // console.log(selected);
    }

  );
}

function init() {
  selectCell();
}


$(document).ready(init)
