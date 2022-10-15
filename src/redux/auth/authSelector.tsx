const userName = (state:any) => state.auth.userData.user.name;
const userEmail = (state:any) => state.auth.userData.user.email;

const isUserLogin = (state:any) => !!state.auth.userData.token;
const userToken = (state:any) => state.auth.userData.token;

export { userName, userEmail, isUserLogin, userToken };
