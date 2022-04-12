function calculate()
        {            
    var required = document.getElementsByClassName('required').value;
    //this is to get the height input in the field
    var height = document.getElementById('height').value;
    //this is to get the weight input in the field
    var weight = document.getElementById('weight').value;
    //this is to do the calculation invloved to get the body mass index
    calculation = ((weight)/((height*height)/10000)).toFixed(2);
    document.getElementById('category').innerHTML = calculation;

    if (calculation <= 18.4){
        document.getElementById('category').textContent = `Your BMI is ${calculation}, therefore you are Underweight`
    }
    else if(calculation  <= 24.9){
        document.getElementById('category').textContent = `Your BMI is ${calculation}, therefore you are Healthy`
    }
    else if(calculation <= 29.9){
        document.getElementById('category').textContent = `Your BMI is ${calculation}, therefore you are Overweight`
    }
    else if (calculation >= 30){
        document.getElementById('category').textContent = `Your BMI is ${calculation}, therefore you are Obese`
    }
        }
