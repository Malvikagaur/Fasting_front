export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const validatePassword = (password) => {
    // At least 6 characters (customize as needed)
    return password.length >= 6;
  };
  
  export const validateName = (name) => {
    return name.trim().length >= 2;
  };
  