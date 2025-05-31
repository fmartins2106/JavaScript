  function exibirResultado(){
            const inputVar1 = document.getElementById("var1");
            const inputVar2 = document.getElementById("var2");
              
            const var1 = Number(inputVar1.value);
            const var2 = Number(inputVar2.value);


            alert("A soma de "+var1+" + "+var2+" = "+ (var1 + var2));
            alert("A subtração de "+var1+" - "+var2+" = "+(var1 - var2));
            alert("A multiplicação de "+var1+" * "+var2+" = "+(var1 * var2));
            alert("A divisão de "+var1+" / "+var2+" = "+(var1 / var2));
        }