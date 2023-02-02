/**  
 * Declaring js var type
 * Try to hover over the contactId parameter. It will show the popup box what kind of type this parameter is. If the argument has different type, then it will show the red error underline
 * @param {number} contactId
 * @returns
*/

async function getContact(contactId) {
  const resp = await $.ajax({  
    // The "$" will cause error since ts can't recognize jQuery syntax
    url: `/contacts/${contactId}`,
    dataType: "json",
  });

  return {
    id: +resp.id,
    name: resp.name,
    birthDate: new Date(resp.birthDate),
  };
}

getContact(1).then((contact) => {
  // contact.id = "1234"
  // contact.birthDate = "12/12/1990";
  // Both codes above generate error since the types that are assigned on line 9,11 are different than the ones on line 16,17
  contact.id = 1234;
  contact.birthDate = new Date("12/12/1990");
});

getContact(2).then((contact) => {
  console.log("Contact: ", JSON.stringify(contact));
});
