     function increaseValue()
        {
            //this is to check browser support
            if (typeof(Storage) !== "undefined")
            if (localStorage.clickcount)
            {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            }
            else
            {
                localStorage.clickcount = 1;
            }
            document.getElementById("result").style.color = "green";
            document.getElementById("result").innerHTML= localStorage.clickcount;
        }
        function decreaseValue()
        {
            if (typeof(Storage) !== "undefined")
            if (localStorage.clickcount)
            {
                localStorage.clickcount = Number(localStorage.clickcount)-1;
            }
            else
            {
                localStorage.clickcount = 1;
            }
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML= localStorage.clickcount;
        }