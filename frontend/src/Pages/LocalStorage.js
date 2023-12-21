export const setItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error setting item in localStorage:', error);
    }
  };
  
  export const getItem = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting item from localStorage:', error);
      return null;
    }
  };
  
  export const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from localStorage:', error);
    }
  };
  
  export function getemployeeData() {
    const employeeData = localStorage.getItem('employeeData');
    return employeeData ? JSON.parse(employeeData) : [];
  }
  
  export function setemployeeData(data) {
    localStorage.setItem('employeeData', JSON.stringify(data));
  }
  
  export const getItemFromLocalStorage = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage: ${error}`);
      return null;
    }
  };
  
  export const setItemInLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in localStorage: ${error}`);
    }
  };
  
  export const removeItemFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage: ${error}`);
    }
  };
  
  export function setemail(email){
    localStorage.setItem('email',email);
  }
  
  export function setToken(token) {
    localStorage.setItem('jwtToken', token);
  }
  
  export function setRole(role) {
    localStorage.setItem('role', role);
  }
  
  export function getRole() {
    return localStorage.getItem('role');
  }
  
  export function getToken() {
    return localStorage.getItem('jwtToken');
  }
  
  export function getEmail() {
    return localStorage.getItem('email');
  }
  
  export function removeToken() {
    localStorage.removeItem('jwtToken');
  }
  
  export function removeEmail() {
    localStorage.removeItem('email');
  }
  
  export function removeRole() {
    localStorage.removeItem('role');
  }