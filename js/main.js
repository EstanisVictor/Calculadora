var input = document.getElementById("inp");
var resultado = document.getElementById("resultado");
input.focus();

function verificaIgual(event) {

    const char = event.key;

    if (char.includes("=")) {
        return false;
    }

    return true;
}

document.body.addEventListener("keydown", function (event) {

    if (!verificaIgual(event)) {
        event.preventDefault();
        buttons('btn-ig');
    } else {
        if (event.key === "Delete") {
            buttons('btn-clear');
        }
        if (event.key === "Enter" || event.key === "=") {
            buttons('btn-ig');
        }
    }


});

function buttons(btn) {

    switch (btn) {

        case 'btn-clear':
            input.value = "";
            resultado.innerHTML = "";
            break;

        case 'btn-raiz':

            var num = parseInt(input.value.replace(/\D+/g, ''));
            resultado.innerHTML = Math.sqrt(num);

            break;

        case 'btn-parenteses1':
            input.value += "(";
            break;

        case 'btn-parenteses2':
            input.value += ")";
            break;

        case 'btn-porcento':
            input.value += "%";
            break;

        case 'btn-7':
            input.value += 7
            break;

        case 'btn-8':
            input.value += 8
            break;

        case 'btn-9':
            input.value += 9
            break;

        case 'btn-mult':
            input.value += "*";
            break;

        case 'btn-ponto':
            input.value += ".";
            break;

        case 'btn-4':
            input.value += 4;
            break;

        case 'btn-5':
            input.value += 5;
            break;

        case 'btn-6':
            input.value += 6;
            break;

        case 'btn-sub':
            input.value += "-";
            break;

        case 'btn-negativo':
            input.value += "(-";
            break;

        case 'btn-1':
            input.value += 1;
            break;

        case 'btn-2':
            input.value += 2;
            break;

        case 'btn-3':
            input.value += 3;
            break;

        case 'btn-sum':
            input.value += "+";
            break;

        case 'btn-div':
            input.value += "/";
            break;

        case 'btn-0':

            if (input.value === "0") {
                return;
            } else {
                input.value += 0;
            }
            break;

        case 'btn-ig':

            if (input.value === "undefined" || input.value === null || input.value === "") {
                return resultado.innerHTML = 0;
            } else {
                var recebe = input.value.toString();

                if (recebe[recebe.length - 1] === "%") {
                    recebe = recebe.replace("%", "/100");
                }

                resultado.innerHTML = eval(recebe.toString());
                input.value = eval(recebe.toString());
            }

            break;

        default:
            alert("Não Existe esse botão na calculadora");
    }
}