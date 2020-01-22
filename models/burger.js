var orm = require("./config/orm.js");
//Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAll("animal_name", "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
orm.insertOne("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
orm.updateOne("buyer_name", "buyer_id", "buyers", "pets");

module.exports = burger;
