function query<T>(
    items: T[],
    // Need to use T since T is defined as function query's generic
    query: // Record<keyof T, (val) => boolean>
    {
        // This works better than Record since I define the type of individual properties instead of the whole object
        [Person in keyof T]?: (val: T[Person]) => boolean
    } // <--- replace this!
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })
