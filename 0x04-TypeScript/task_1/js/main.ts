interface Teacher {
    readonly firstName : string,
    readonly lastName : string,
    fullTimeEmployee : boolean,
    yearsOfExperience? : number,
    location : string,
    [key : string] : any
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
interface Directors extends Teacher{
    numberOfReports : number,

}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);


interface printTeachersInterface{
    (firstName : string, lastName: string) : string
}
const printTeacher : printTeachersInterface = (firstName : string, lastName: string) : string => `${firstName[0]}. ${lastName}`
console.log(printTeacher("Aganze", "Felicite"))