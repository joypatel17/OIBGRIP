const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);    

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celtoFah = (cel) => {
        let fahrenheit = (cel * 9/5) + 32 ;
        return fahrenheit;
    }

    const Fahtocel = (fah) => {
        let cel = (fah - 32) * 5/9 ;
        return cel;
    }

    let result;
    
    if(valueTemp == 'cel'){
        result= celtoFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°F`
    }
    else{
        result= Fahtocel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°C`
    }
}