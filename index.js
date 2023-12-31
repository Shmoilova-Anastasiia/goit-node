import yargs from "yargs";

import contactsService from "./db/contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await contactsService.listContacts();
        return console.table(allContacts);
      case "get":
        const oneContact = await contactsService.getContactById(id);
        return console.log(oneContact);
      case "add":
        const newContact = await contactsService.addContact(name, email, phone);
        return console.log(newContact);
      case "remove":
        const deleteContact = await contactsService.removeContact(id);
        return console.log(deleteContact);
      default:
        console.log("Unknown action");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
