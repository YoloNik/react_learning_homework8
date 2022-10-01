const userName = state => state.auth.userData.user.name;
const userEmail = state => state.auth.userData.user.email;

const isUserLogin = state => !!state.auth.userData.token;
const userToken = state => state.auth.userData.token;

export { userName, userEmail, isUserLogin, userToken };
