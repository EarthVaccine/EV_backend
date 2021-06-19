/*
 1. electronicMoney
 450kWh 초과 : 기본요금 6,060원 + 전력량당 요금 210.6원/kWh => 약 0.21

 2. smartphoneCharge
 회당 약 11.31wh / 24H -> 약 0.47wh

 3. electronicCar
 회당 약 5.6kwh => 약 5600 wh

 4. computerUse
 회당 약 0.05kwh => 약 50wh

 5. millionVolts
 회당 약 
 */


 function electronicCalc () {
    let electronicValue = document.getElementById('electronicValue').value;
    document.getElementById('electronicMoney').innerHTML = (electronicValue / 0.07).toFixed(2) + " 원 아낌";
    document.getElementById('smartphoneCharge').innerHTML = (Math.floor( electronicValue / 0.47)).toFixed(2) + " % 충전";
    document.getElementById('electronicCar').innerHTML = (electronicValue / 5600).toFixed(2) + " km 주행";
    document.getElementById('computerUse').innerHTML = (Math.floor(electronicValue / 50)).toFixed(2) + " 시간";
    document.getElementById('millionVolts').innerHTML = (electronicValue / 25000).toFixed(2) + " 회";
}