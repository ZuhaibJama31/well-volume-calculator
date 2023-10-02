function calcWellVolume() {
    let wellDiameter = parseFloat(document.getElementById('well-diameter').value);
    let wellDepth = parseFloat(document.getElementById('well-depth').value);
    let staticDepth = parseFloat(document.getElementById('static-depth').value);
    let wellVolume = (Math.PI / 4) * Math.pow(wellDiameter, 2) * (wellDepth - staticDepth);
    // Update the result input field with the calculated volume
    document.getElementById('result').value = wellVolume.toFixed(1);
     // Check if any of the input fields are empty or not valid numbers
     if (isNaN(solarOutput) || isNaN(sunHours) || isNaN(sellingPrice) || isNaN(dailyCost)) {
        alert("Please enter valid numeric values in all fields.");
        return;
    }

}

let clearScreen = () => {
    document.getElementById("form_id").reset();
}

function disable(){
    document.getElementById("result").disabled = true; 
} 



function enable(){ 
    document.getElementById("result").disabled = false; 
}

