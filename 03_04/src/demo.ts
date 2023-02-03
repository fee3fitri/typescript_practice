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

// Match the type of Contact's address + Address' postalCode value
type Awesome =  Contact["address"]["postalCode"];

interface ContactEvent {
    // Match the type of Contact's id value
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent { 
}

interface ContactStatusChangedEvent extends ContactEvent { 
    oldStatus: ContactStatus;
    newStatus: ContactStatus;
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent;
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
    // Matches type of any ContactEvents value
    eventName: T,

    // Below is a function that accept single parameter that matches the type of first parameter eventName above
    // ContactEvents[T] is similar to ContactEvents["deleted"] or ContactEvents["statusChanged"]
    handler: (event: ContactEvents[T]) => void  
) {
    if (eventName === "statusChanged") {
        // This will throw an error since ContactDeletedEvent is not the same as "statusChanged" type
        // handler({ contactId: 1} as ContactDeletedEvent)

        handler({
            contactId: 1, 
            oldStatus: "active", 
            newStatus: "inactive" 
        });
    }
}

// event => event type will be the same as "statusChanged" since we specify it on handleEvent function above
handleEvent("statusChanged", event => event)