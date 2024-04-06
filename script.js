/*

    Crie uma lista de pacientes

    Cada paciente deverá conter
        nome
        idade
        peso
        altura


    Excreva uma lista contendo o nome dos pacientes
 */

const patients = [
    {
        name: 'Luis',
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: 'Alexandra',
        age: 27,
        weight: 70,
        height: 170,
    },
    {
        name: 'Carlos',
        age: 42,
        weight: 90,
        height: 180,
    },
]
// let patientsNames = []

// for (let index = 0; index < patients.length; index++){
//     patientsNames[index] = patients[index].name
// }
// for(let patient of patients){
//     patientsNames.push(patient.name)
// }

let patientsInformation = []

for( let patient of patients){
    patientsInformation.push(`
    paciente: ${patient.name}
    idade:${patient.age}
    peso: ${patient.weight}
    altura: ${patient.height} \n teste
    `)
}

alert(patientsInformation)

// alert(patientsNames)