// Defining custom types using interface
// Similar to JS class, thus any JS class can use any interfaces
// The main difference is interface is only used during the compile time, never available in run time. So it's strictly used to define the data type only

interface Contact extends Address { //extends will merge Contact interface with Address interface to create 1 big interface
  id: number;
  name: string;
  birthDate?: Date;
  // "?" will define the optional field, otherwise it needs to be filled. Will cause an error if it's empty
}

// Creating Address interface. Needs to be separated so I can use in multiple places, not just Contact
interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: number;
}

// Create a new var with Contact type interface
let primaryContact: Contact = {
  id: 1234,
  name: "Wednesday Osborne",
  birthDate: new Date("01-01-1990"),
  line1: "109 Duane Street #3",
  city: "San Jose",
  state: "CA",
  zipCode: 95110
}