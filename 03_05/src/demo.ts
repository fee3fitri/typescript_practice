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
    email: string;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

// Defining ContactQuery type to be used on line 36
// Add Partial to choose properties that I want to include and exclude in the new type
// Partial defines all the properties on Contact and Query objects as optional
// Add Omit to omit certain properties from the cloned definitions.
// Omit requires 2nd parameter which is the list of property names that I'd like to omit
// type ContactQuery = Omit<
//     Partial<
//         Record<keyof Contact, Query>
//     >,
//     "address" | "status"
// >

// Add Pick is the opposite of Omit above
// Pick requires 2nd parameter which is the list of property names that is required
type ContactQuery = Partial<
    Pick<
        Record<keyof Contact, Query>,
        "id" | "name"
    >
>

// Required type is the opposite of Partial
// It will turn all the optional properties to the required ones
// The RequiredContactQuery is inherited the same properties as ContactQuery above
type RequiredContactQuery = Required<ContactQuery>

// Using Record on query parameter to have the same property type as Contact and the same value type as Query object
function searchContacts(contacts: Contact[], query: ContactQuery) {
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