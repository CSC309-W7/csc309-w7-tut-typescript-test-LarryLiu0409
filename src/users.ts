import type { User } from "./types";

export const apiResponse: User[] = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: 24 },
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  return apiResponse;
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}