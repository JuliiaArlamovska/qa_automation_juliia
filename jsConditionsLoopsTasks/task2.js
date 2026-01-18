const averageGrade = 59;
switch (averageGrade) {
    case averageGrade > 90 && averageGrade <= 100:
        console.log("excellent");
        break;
    case averageGrade > 80 && averageGrade <= 90:
        console.log("very good");
        break;
    case averageGrade > 70 && averageGrade <= 80:
        console.log("good");
        break;
    case averageGrade > 60 && averageGrade <= 70:
        console.log("satisfied");
        break;
    default:
        console.log("not satisfied");
}