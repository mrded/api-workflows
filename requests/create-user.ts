import { api } from "../lib/api";
import { fakeUser } from "../lib/fake";

const user = fakeUser();

const response = await api("POST", "https://api.example.com/users", user);

console.log(JSON.stringify(await response.json(), null, 2));
