
function view(Temp1,Temp1_Name,Temp2,Temp2_Name){
    const { printTable } = require('console-table-printer');
    const testCases = [
        { "Left Value": Temp1 , "Left unit": Temp1_Name, 'Right Value': Temp2, "Right Unit":Temp2_Name },
  
    ];
    printTable(testCases);
}  
function Temp_convertor_CtoK(temperature){
    return parseInt(temperature)+ parseInt(273.15)
}
function Temp_convertor_CtoF(temperature){
    return parseInt(temperature*1.8)+parseInt(32)
}
function Temp_convertor_KtoC(temperature){
    return parseInt(temperature)- parseInt(273.15)
}
function Temp_convertor_FtoC(temperature){
    return parseInt(temperature-32)*0.55
}

function app(temperature){
    var Left_value= temperature
    var Left_Unit
    var Right_value
    var Right_unit
    var prompt =require('prompt-sync')();
    var testCases;
    var source;
    
        source= prompt('Left temperature is source? ')

        if (source == 'yes'){
            Left_value= prompt('Temperature value to covert? ')
            Left_Unit =prompt('From? ') 
            Right_unit=prompt("to? ")   

            //celisius to
            if (Left_Unit =="Celsius" ){

                if (Right_unit=="Fahrenheit"){
                    Right_value= Temp_convertor_CtoF(Left_value)
                } 

                if (Right_unit=="Kelvin"){
                    Right_value= Temp_convertor_CtoK(Left_value)    
                }
                if (Right_unit=="Celsius"){
                    Right_value= Left_value
                }
            } 
//Fahrenheit to
            if (Left_Unit =="Fahrenheit" ){

                if (Right_unit=="Celsius"){
                    Right_value= Temp_convertor_FtoC(Left_value)
                } 

                if (Right_unit=="Kelvin"){
                    Right_value= Temp_convertor_FtoC(Left_value)   
                    Right_value= Temp_convertor_CtoK(Right_value)
                }
                if (Right_unit=="Fahrenheit"){
                    Right_value= Left_value
                }
            } 
//Kelvin to
            if (Left_Unit =="Kelvin" ){

                if (Right_unit=="Celsius"){
                    Right_value= Temp_convertor_KtoC(Left_value)
                } 

                if (Right_unit=="Fahrenheit"){
                    Right_value= Temp_convertor_KtoC(Left_value)   
                    Right_value= Temp_convertor_CtoF(Right_value)
                }
                if (Right_unit=="Kelvin"){
                    Right_value= Left_value
                }
            } 
        }
        if (source == 'no'){
            Right_value= prompt('Temperature value to covert? ')
            Right_unit =prompt('From? ') 
            Left_Unit=prompt("to? ")   

            //celisius to
            if (Right_unit =="Celsius" ){

                if (Left_Unit=="Fahrenheit"){
                    Left_value= Temp_convertor_CtoF(Right_value)
                } 

                if (Left_Unit=="Kelvin"){
                    Left_value= Temp_convertor_CtoK(Right_value)    
                }
                if (Left_Unit=="Celsius"){
                    Left_value= Right_value
                }
            } 
//Fahrenheit to
            if (Right_unit =="Fahrenheit" ){

                if (Left_Unit=="Celsius"){
                    Left_value= Temp_convertor_FtoC(Right_value)
                } 

                if (Left_Unit=="Kelvin"){
                    Left_value= Temp_convertor_FtoC(Right_value)   
                    Left_value= Temp_convertor_CtoK(Left_value)
                }
                if (Left_Unit=="Fahrenheit"){
                    Left_value= Left_value
                }
            } 
//Kelvin to
            if (Right_unit =="Kelvin" ){

                if (Left_Unit=="Celsius"){
                    Left_value= Temp_convertor_KtoC(Right_value)
                } 

                if (Left_Unit=="Fahrenheit"){
                    Left_value= Temp_convertor_KtoC(Right_value)   
                    Left_value= Temp_convertor_CtoF(Left_value)
                }
                if (Left_Unit=="Kelvin"){
                    Left_value= Right_value
                }
            } 
        }
        console.clear()
        testCases = view(Left_value,Left_Unit,Right_value,Right_unit)
        
        app()
    

}
view(0,"Celsius",32,"Faherenheit")
app()