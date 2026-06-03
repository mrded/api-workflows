import { faker } from "@faker-js/faker";

export const fakeUser = () => ({
  id: crypto.randomUUID(),
  email: faker.internet.email(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  phone: faker.phone.number(),
});

export const fakeCompany = () => ({
  id: crypto.randomUUID(),
  name: faker.company.name(),
  registrationNumber: faker.string.alphanumeric(8).toUpperCase(),
  address: {
    line1: faker.location.streetAddress(),
    city: faker.location.city(),
    postcode: faker.location.zipCode(),
    country: faker.location.countryCode(),
  },
});
