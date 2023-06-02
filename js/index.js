
let vehicleInventory = [];

function logVehicle() {

    const vehicleType = document.getElementById("vehicleType").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const registrationNumber = document.getElementById("registrationNumber").value;
    const condition = document.getElementById("condition").value;

    const vehicle = {
        vehicleType: vehicleType,
        make: make,
        model: model,
        registrationNumber: registrationNumber,
        condition: condition
    };

    vehicleInventory.push(vehicle);

    document.getElementById("vehicleType").selectedIndex = 0;
    document.getElementById("make").value = "";
    document.getElementById("model").value = "";
    document.getElementById("registrationNumber").value = "";
    document.getElementById("condition").selectedIndex = 0;

    console.log(vehicle);

    alert("Vehicle logged successfully!");
}
