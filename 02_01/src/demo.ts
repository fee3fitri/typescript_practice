// Define variable data type
let x: number
let y: string
let z: boolean
let a: Date
let b: string[] // Instead of using any data types, better to use this
// let b: any // To assign multiple data types into 1 variable
// However, this beats the purpose of using typescript


// Since b type is any, we can reassign different data type
// Since b type is string with cast "[]", we need to add "as any" at the end of the variable
b = "Hello" as any
b = 1234