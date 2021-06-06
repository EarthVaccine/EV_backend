function electronicCalc () {
    let electronicValue = document.getElementById('electronicValue').value;
    document.getElementById('electronicMoney').innerHTML = electronicValue / 100 + " 원 아낌";
    document.getElementById('smartphoneCharge').innerHTML = Math.floor( electronicValue / 100) + " % 충전";
    document.getElementById('electronicCar').innerHTML = electronicValue / 10000 + " km 주행";
    document.getElementById('computerUse').innerHTML = Math.floor( electronicValue / 3000) + " 시간";
    document.getElementById('millionVolts').innerHTML = electronicValue / 1000000 + " 회";
}