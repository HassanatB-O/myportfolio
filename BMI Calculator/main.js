function calculate()
        {            
    var required = document.getElementsByClassName('required').value;
    //this is to get the height input in the field
    var height = document.getElementById('height').value;
    //this is to get the weight input in the field
    var weight = document.getElementById('weight').value;
    //this is to do the calculation invloved to get the body mass index
    calculation = (weight)/((height*height)/10000);
    document.getElementById('category').innerHTML = calculation;
        }
