const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const selectorsExportObject = {
  getIsAuthenticated,
  getUsername
};

export default selectorsExportObject;
