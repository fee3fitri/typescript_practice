type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

// propertyName: keyof Contact will only match the key from Contact interface
// function getValue(source, propertyName: keyof Contact) {
//     return source[propertyName];
// }

// Since we specified "keyOf Contact", the "sttus" below will result in error
// const value = getValue(primaryContact, "sttus")

// The same as line 54 but it wants the return value to match the type of input
// function getValue<T>(source: T, propertyName: keyof T) {

// This version is the same as line 62 with 2 generics.
// U generic extends the the type of T generic
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

// "" causes error since there is no property name of ""
const value = getValue({ min: 1, max: 200}, "")
