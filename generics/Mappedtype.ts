type ReadOnlyType<T> ={
   readonly [P in keyof T]:T[P]
}

interface User{
    id:number,
    name:string,
    age:number
}
interface employee{
    id:number
}

type ReadOnlyUser = ReadOnlyType<User>
type ReadOnlyEmp = ReadOnlyType<employee>
const userVal: ReadOnlyUser ={
    id:100,
    name:"Saravanan",
    age:18
}


// userVal.age =19 // Can't modify the values of Readonly variables.

