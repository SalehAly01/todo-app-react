export function saveToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function removeLocalStorageItem(item) {
  localStorage.removeItem(item);
}

export function getLocalStorageItem(item) {
  let data = localStorage.getItem(item);
  if (data) {
    return JSON.parse(data);
  }
  return data;
}
