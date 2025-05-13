import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { createPet, updatePet, getPet, deletePet } from "..cypress/e2e/PetApi.cy.js";

let petId;

Given("I create a new pet", () => {
  createPet().then((res) => {
    expect(res.status).to.eq(200);
    petId = res.body.id;
  });
});

When("I update the pet", () => {
  updatePet(petId).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.name).to.eq("UpdatedPet");
  });
});

Then("I can read the pet", () => {
  getPet(petId).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.id).to.eq(petId);
  });
});

And("I can delete the pet", () => {
  deletePet(petId).then((res) => {
    expect(res.status).to.eq(200);
  });
});