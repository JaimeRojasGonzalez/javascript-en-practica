function operaciones(op) {

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
    };

    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
    } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML = "<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {

        switch (op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML = "<span>" + resultado + "</span>";
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML = "<span'>" + resultado + "</span>";
                break;

        }
    }

}
