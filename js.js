function mojafunkcia() {
    var perem_x = document.getElementByld("x").value;
    var perem_y = document.getElementByld("y").value;
    var vysled = (perem_x+Math.sqrt(5-perem_y))/(Math.pow(perem_x,2)-(Math.pow(perem_y,3)));
    document.getElementByld("vysledok").innerHTML = vysled;
}

