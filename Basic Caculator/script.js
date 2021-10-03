  function num1() {
        let num = 1;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num2() {
        let num = 2;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num3() {
        let num = 3;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num4() {
        let num = 4;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num5() {
        let num = 5;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num6() {
        let num = 6;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num7() {
        let num = 7;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num8() {
        let num = 8;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num9() {
        let num = 9;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function num0() {
        let num = 0;
        document.getElementById("show").value = document.getElementById("show").value + num;
    }
    function sum() {
        var data = document.getElementById("show").value;
        var sum = "+";
        document.getElementById("show").value = document.getElementById("show").value + sum;
    }
    function sub() {
        var data = document.getElementById("show").value;
        var sub = "-";
        document.getElementById("show").value = document.getElementById("show").value + sub;
    }
    function mul() {
        var data = document.getElementById("show").value;
        var mul = "*";
        document.getElementById("show").value = document.getElementById("show").value + mul;
    }
    function divi() {
        var data = document.getElementById("show").value;
        var divi = "/";
        document.getElementById("show").value = document.getElementById("show").value + divi;
    }
    function result() {
        let result = (eval(document.getElementById('show').value));
        document.getElementById("show").value = result;
    };
    function reset() {
        document.getElementById('show').value = " ";
    }
