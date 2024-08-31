// Reference data-type
// Array
const marks = [23,54,67,84,98,optsub=[45,65,89]] // Index always start with 0
console.log(marks);

// Object in JS
const Student_Details = {
  Name:'Bibek',
  Class:12,
  Subjects:{
    main_Sub:['English' , 'Nepali' , 'Social'],
    Optional_sub:['Account' , 'Computer' , 'Economics']
  },
  Section:'A'
}
console.log(Student_Details.Subjects.main_Sub);
console.log(Student_Details['Subjects']['main_Sub']);
// console.log(Object.keys(Student_Details));