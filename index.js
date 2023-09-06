let a = document.querySelector(".input");
a.addEventListener('input',function(a){

    let lbs = a.target.value;
    console.log(lbs);
    document.querySelector(".g").innerHTML = "grams = " + lbs/0.002046 + " grams";
    document.querySelector(".k").innerHTML = "kilo = " + lbs/2.2046 + " kilos";

});
  