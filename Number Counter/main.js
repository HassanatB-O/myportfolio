     function increaseValue()
        {
            //this is to check browser support
            if (typeof(Storage) !== "undefined")
            if (localStorage.clickcount)
            {
                //this increases the number by one after clicking the button
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            }
            else
            {
                localStorage.clickcount = 1;
            }
            //this turns the color of the result green when it is a positive number
            document.getElementById("result").style.color = "green";
            document.getElementById("result").innerHTML= localStorage.clickcount;
        }
        function decreaseValue()
        {
            if (typeof(Storage) !== "undefined")
            if (localStorage.clickcount)
            {
                //this reduces the number by one after clicking the button
                localStorage.clickcount = Number(localStorage.clickcount)-1;
            }
            else
            {
                localStorage.clickcount = 1;
            }
            //this turns the color of the result red when it is a negative number
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML= localStorage.clickcount;
        }
