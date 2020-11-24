function insert(num)
{
    //this is to view the numbers or signs in the input field after clicking on any number or sign
    document.form.textview.value = document.form.textview.value + num
} 
function equal()
{
    var exp = document.form.textview.value;
    if (exp)
    {
        //this is to evaluate whatever calculation is input
        document.form.textview.value = eval(exp)
    }
}
function c()
{
    //this is to clear the entire field
    document.form.textview.value = "";
}
function back()
{
    //this is to clear one wrong sign or number input in the field.
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}
