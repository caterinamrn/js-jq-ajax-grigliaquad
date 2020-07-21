function confrontoCinque(selected,value) {
  var confronto = value<=5;
  if (confronto) {
    selected.addClass("min");
  }
  else {
    selected.addClass("max");
  }
}


function getRandomNum(selected) {
  $.ajax({
    url:"https://flynn.boolean.careers/exercises/api/random/int",
    method:"GET",
    success:function (data,state) {
      // selected.children("span") == "";
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

function selectCell(){
  var target = $("#tabella td");
  target.click(
    function () {
      var selected = $(this);
      var contenuto = selected.children("span").text();

      // template.find('#message-text').text(txt);
      // console.log(contenuto);

      if (contenuto == "") {
      console.log("è vuoto");
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
