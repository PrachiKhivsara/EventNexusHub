import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  if (!children) {
    throw new Error("Missing 'children' prop in AuthProvider");
  }
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [vendor, setVendor] = useState(null);

  const vendorlogout = () => {
    setVendor(null);
  };

  const vendorlogin = (vendor) => {
    setVendor(vendor);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        vendorlogin,
        vendorlogout,
        vendor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

//Prop Validation
AuthProvider.propTypes = {
  children: PropTypes.node,
};
