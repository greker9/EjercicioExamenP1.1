function calcular() {
    let n1 = parseInt(document.getElementById('txtN1').value)
    let n2 = parseInt(document.getElementById('txtN2').value)
    let n3 = parseInt(document.getElementById('txtN3').value)
    let n4 = parseInt(document.getElementById('txtN4').value)
    let n5 = parseInt(document.getElementById('txtN5').value)

    if (isNaN(n1)) {
        alert('Por favor, ingrese todos los datos');
    
    } else if(isNaN(n2)) {
        alert('Por favor, ingrese todos los datos');
    
    } else if(isNaN(n3)) {
        alert('Por favor, ingrese todos los datos');
    
    } else if(isNaN(n4)) {
        alert('Por favor, ingrese todos los datos');
       
    } else if(isNaN(n5)) {
        alert('Por favor, ingrese todos los datos');
    } else {
        let calcular = (n1+n2+n3+n4+n5);
        document.getElementById('SubTotal').value = calcular

        let Descuento;

        if (calcular >= 0 && calcular <= 999.99) {
            Descuento = (0);
        } else if (calcular >= 1000.00 && calcular <= 4999.99) {
           Descuento = (calcular * 0.10);
        } else if (calcular >= 5000.00 && calcular <= 8999.99) {
            Descuento = (calcular * 0.20);
        } else if (calcular >= 9000.00 && calcular <= 12999.99) {
            Descuento = (calcular * 0.30);
        } else if (calcular >= 13000.00) {
            Descuento = (calcular * 0.40);
        } else {
            alert("El descUENTO está fuera del rango válido");
        }

        document.getElementById('Descuento').value = Descuento
       
         
        let TotalaPagar = (calcular-Descuento);
        document.getElementById('TotalaPagar').value = TotalaPagar

        

    }


}



function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtN3').value = ''
    document.getElementById('txtN4').value = ''
    document.getElementById('txtN5').value = ''
    document.getElementById('SubTotal').value = ''
    document.getElementById('Descuento').value = ''

    document.getElementById('TotalaPagar').value = ''
}