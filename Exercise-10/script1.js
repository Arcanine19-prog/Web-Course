
const patients = [
    { PId: 1, Name: "Alen", Age: 39 },
    { PId: 2, Name: "Deena", Age: 47 },
    { PId: 3, Name: "Diana", Age: 21 },
    { PId: 4, Name: "Jack", Age: 54 },
    { PId: 5, Name: "Jain", Age: 23 },
    { PId: 6, Name: "Kelvin", Age: 61 },
    { PId: 7, Name: "Louis", Age: 69 },
    { PId: 8, Name: "Rex", Age: 49 }
];
function sortPatientsByAgeDesc(patients) {
    return patients.sort((a, b) => b.Age - a.Age);
}

function displaySortedPatients() {
    console.log("Sorted Patients by Age (Descending):", sortPatientsByAgeDesc([...patients]));
    alert("Sorted Patients: " + JSON.stringify(sortPatientsByAgeDesc([...patients])));
}

function isPatientPresent(patients, pId) {
    return patients.some(patient => patient.PId === pId);
}

function checkPatient() {
    let pId = parseInt(document.getElementById("patientId").value);
    let result = isPatientPresent(patients, pId) ? "Patient exists." : "Patient not found.";
    document.getElementById("patientCheckResult").innerText = result;
}

function filterPatientsByAgeRange(patients, minAge, maxAge) {
    return patients.filter(patient => patient.Age >= minAge && patient.Age <= maxAge);
}

function filterByAge() {
    let minAge = parseInt(document.getElementById("minAge").value);
    let maxAge = parseInt(document.getElementById("maxAge").value);
    let filtered = filterPatientsByAgeRange(patients, minAge, maxAge);
    document.getElementById("filteredPatients").innerText = JSON.stringify(filtered);
}