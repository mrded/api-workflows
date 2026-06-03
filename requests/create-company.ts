#!/usr/bin/env bun
import { api } from "../lib/api";
import { fakeCompany } from "../lib/fake";

const company = fakeCompany();

const response = await api(
  "POST",
  "https://api.example.com/companies",
  company,
);

console.log(JSON.stringify(await response.json(), null, 2));
