// Function to set a value in localStorage
export function setLocalStorageItem(
  key: string,
  value: string | number | boolean
): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
}

// Function to get a value from localStorage
export function getLocalStorageItem<T>(key: string): T | null {
  try {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue) as T;
    }
  } catch (error) {
    removeLocalStorageItem(key);
    return null;
  }

  return null;
}

export function removeLocalStorageItem<T>(key: string): T | null {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
  return null;
}
