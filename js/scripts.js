$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault(event);
    var number = $("input#number").val();
    console.log();
    function factorialize (number) {
      if (number === 0 || number === 1)
      return 1;
      for (var i=-1; i>=1; i--){
        number*1;
        console.log();
      }
      return number;
    }
    $("#result").text();

  });
});
