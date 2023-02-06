// Using Record to define property and value types
// Notice that I can add any types for the value using pipe symbol
let x: Record<string, string | number | boolean | Function > = { name: "Wruce Bayne" };
x.id = 1234;
x.active = true;
x.log = () => console.log("awesome");


////////////////////


type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

// Using Record on query parameter to have the same property type as Contact and the same value type as Query object
function searchContacts(contacts: Contact[], query: Record<keyof Contact, Query>) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
        // It causes error since Contact doesn't have phoneNumber property
        // phoneNumber: { matches: (name) => name === "Carol Weaver" }, 
    }
);