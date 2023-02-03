interface Contact {
    id: number;
    name: ContactName; // Alias is used here
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
}

// Defining type using type aliases to provide alias to already existing type
// The only benefit is that it provides more descriptive name instead of using primitive data type
type ContactName = string