interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status: ContactStatus; // The status is using ContactStatus enum
}

// Enum is a special type that has a hard-coded list of values
enum ContactStatus {
    // String values are assigned to each values to change the default value to 0,1,2 to "active", "inactive", "new"
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    // If I hover over the ContactStatus.Active, it will show the value of 0. 0 represents the first value in ContactStatus enum. 
    status: ContactStatus.Active
}

type ContactName = string