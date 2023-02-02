interface Contact {
    id: number;
    name: string;
}

// Generics can also be applied in interface and class too
// TExternalId is a generic
interface UserContact<TExternalId> {
    id: number;
    name: string;
    username: string;
    externalId: TExternalId;
    // Generic in function
    loadExternalId(): Task<TExternalId>;
}

// Defining generic type, a metatype that represents any other type we might want to substitute in.
// T1, T2 are generics
// T1: generic for parameter, T2: generic for return value
// or function clone<T>(source: T): T => parameter and return val have the same type. In this case, no need to call the generics explicitly on line 16
// extends will allow to apply more restrictive rules to match the return type to be the same as the input type
function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };

// Need to explicitly call the generics from clone function above
// Since UserContact shares similar property as Contact, it won't cause error if on line 17 we're using "<T1, T2 extends T1>"
const b = clone<Contact, UserContact>(a)


// Generic constraints: allow more restrictive rules around the type than generics
