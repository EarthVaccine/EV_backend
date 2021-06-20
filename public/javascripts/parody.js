function electronicCalc () {
    let electronicValue = document.getElementById('electronicValue').value;
    document.getElementById('electronicMoney').innerHTML = (electronicValue / 0.07).toFixed(0.21) + " 원 아낌";
    document.getElementById('smartphoneCharge').innerHTML = (Math.floor( electronicValue / 0.47)).toFixed(2) + " % 충전";
    document.getElementById('electronicCar').innerHTML = (electronicValue / 5600).toFixed(2) + " km 주행";
    document.getElementById('computerUse').innerHTML = (Math.floor(electronicValue / 50)).toFixed(2) + " 시간";
    document.getElementById('millionVolts').innerHTML = electronicValue / 2500 + " 회";
}