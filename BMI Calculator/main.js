function calculate()
        {            
    var required = document.getElementsByClassName('required').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    calculation = (weight)/((height*height)/10000);
    document.getElementById('category').innerHTML = calculation;
        }