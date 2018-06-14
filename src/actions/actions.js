import React from "react";
import { v4 } from "node-uuid";

export function addItem(value) {
  return { type: "ADD", id: v4(), value };
}

export function deleteItem(id) {
  return { type: "DELETE", id };
}

export function markAsComplete(id) {
  return { type: "COMPLETE", id };
}

export function showCompleted() {
  return { type: "COMPLETED", filter: "complete" };
}
export function showIncompleted() {
  return { type: "INCOMPLETE", filter: "incomplete" };
}
export function showAll() {
  return { type: "ALL", filter: "all" };
}
