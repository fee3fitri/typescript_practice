interface Contact {
    id: number;
    name: string;
    clone(name: string): Contact // Define method on an interface and define type on parameter. Another way to write it is using "Function Signature"
}

// Add Contact type to the source paramete => source: Contact
// Without (source: Contact): "Contact", the return type is not gonna be the same as Contact
function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

/*
FUNCTION SIGNATURE
(source: Contact) parameter can also be written using function.
function clone(source: Contact, func: (source: Contact) => Contact): Contact {
    return Object.apply({}, source);
}
*/



const a: Contact = {id: 23, name: "Ali Rivera"};
const b = clone(a);