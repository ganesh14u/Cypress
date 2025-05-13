const baseUrl = "https://petstore.swagger.io/v2";

export function createPet() {
  return cy.request({
    method: "POST", 
    url:'${baseUrl}/pet', 
    body : {
    id: Date.now(),
    name: "TestPet",
    status: "available"
    }
  });
}

export function updatePet(id) {
  return cy.request({
    method: "PUT", 
    url: '${baseUrl}/pet', 
    body: {
    id: id,
    name: "UpdatedPet",
    status: "sold"
    }
  });
}

export function getPet(id) {
  return cy.request({
    method:"GET", 
    url: '${baseUrl}/pet/${id}'
});
}

export function deletePet(id) {
  return cy.request({
    method: "DELETE", 
    url: '${baseUrl}/pet/${id}'
});
}