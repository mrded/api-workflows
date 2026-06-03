#!/usr/bin/env bun
import { api } from "../lib/api";
import { fakeCompany, fakeUser } from "../lib/fake";

const company = await api(
  "POST",
  "https://api.example.com/companies",
  fakeCompany(),
).then((r) => r.json());

const user = await api(
  "POST",
  "https://api.example.com/users",
  { ...fakeUser(), companyId: company.id },
).then((r) => r.json());

console.log(JSON.stringify({ company, user }, null, 2));
