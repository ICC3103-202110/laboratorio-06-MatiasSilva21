
function Temp_convertor(Temperature,Temp1_unit,Temp2_unit){
    if (Temp1_unit == Temp2_unit){
        return Temperature       
    }
    if (Temp1_unit =="Celsius" ){
        if (Temp2_unit=="Fahrenheit"){
            return parseInt(Temperature*1.8)+parseInt(32)
        }
    }    
    if (Temp1_unit =="Celsius" ){
        if (Temp2_unit=="Kelvin"){
            return parseInt(temperature)+ parseInt(273.15)        
        }
    }
    if (Temp1_unit =="Fahrenheit" ){
        if (Temp2_unit=="Celsius"){
            return  parseInt(temperature-32)*0.55       
        }
    }
    if (Temp1_unit =="Fahrenheit" ){
        if (Temp2_unit=="Kelvin"){
            return   (parseInt(temperature-32)*0.55) + parseInt(273.15)      
        }
    }
    if (Temp1_unit =="Kelvin" ){
        if (Temp2_unit=="Celsius"){
            return parseInt(temperature)- parseInt(273.15)         
        }
    }
    if (Temp1_unit =="Kelvin" ){
        if (Temp2_unit=="Fahrenheit"){
            return  (parseInt(temperature)- parseInt(273.15))*1.8 + parseInt(32)      
        }
    }
}
console.log(Temp_convertor(0,Celsius,Kelvin))