function saveToStorage(key, value) {
  let stringValue = JSON.stringify(value);
  // if (typeof value == "object") {
    // stringValue = JSON.stringify(value);
  // } else
  localStorage.setItem(key, stringValue);
}

function getFromStorage(key) {
  let returnedString = "";
  let returnedObject = null;
  try {
    returnedString = localStorage.getItem(key);
    returnedObject = JSON.parse(returnedString);
    return returnedObject;
  } catch (error) {
    return returnedString;
  }
}

function removeFromStorage(key) {
  localStorage.removeItem(key);
}

export { saveToStorage, getFromStorage, removeFromStorage };
