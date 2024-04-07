const students = [
    {
        name: 'Marcelo',
        firstGrade: 10,
        secondGrade: 10
    },
    {
        name: 'Manuel',
        firstGrade: 2,
        secondGrade: 3
    },
    {
        name: 'Júlia',
        firstGrade: 9,
        secondGrade: 6
    },
]

const calcMedia = (gradeOne, GradeTwo) => {
    let media = (gradeOne + GradeTwo) / 2
    return media
}

for( let student of students){
    let grade1 = student.firstGrade
    let grade2 = student.secondGrade

    let media = calcMedia(grade1,grade2)
    let result = media > 7

    if(result){
        alert(`A média do(a) aluno(a) ${student.name} é: ${media}\nParabens, ${student.name}! Você foi aprovado(a) no concurso!`)
    }else{
        alert(`A média do(a) aluno(a) ${student.name} é: ${media}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
    }

}
