(function() {
    var rng = document.querySelector("#font-size-control");
    var text = document.querySelector("#text");  
    rng.addEventListener("input", 
      function() {            
        text.style.fontSize = rng.value + 'px'           
      });
})();