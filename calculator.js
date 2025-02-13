function handleButtonClick(value) {
    const display = document.querySelector('input[name="display"]');
    
    if (value === 'AC') 
    {
        display.value = '';  
    } 
    else if (value === 'DC')
    {
        display.value = display.value.slice(0, -1);  
    } 
    else if (value === '=') 
    {
        try 
        {
            display.value = eval(display.value); 
        } catch (error) 
        {
            display.value = 'Error';  
        }
    } 
    else 
    {
        display.value += value;  
    }
}


document.querySelectorAll('.Calculator input[type="button"]').forEach(button => 
{
    button.addEventListener('click', function() 
    {
        handleButtonClick(this.value);
    });
});
