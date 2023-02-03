type ContactName = string;

// enum ContactStatus {
//     Active = "active",
//     Inactive = "inactive",
//     New = "new"
// }

// Convert enum above to type aliases
type ContactStatus = "active" | "inactive" | "new";

// Create type alias
// The pipe symbol allows the birthDate to have multiple data types
type ContactBirthDate = Date | number | string;

// Create new type from 2 different interfaces
type AddressableContact = Contact & Address;

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        // TS will automatically knows that the type below must be Date type since the above statements handle number and string type
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}