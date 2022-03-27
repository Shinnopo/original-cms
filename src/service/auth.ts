import firebase from "../config/FirebaseConfig"

const socialMediaAuth = (provider: firebase.auth.AuthProvider) => {
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user
        })
        .catch((error) => {
            return error
        })
}

export default socialMediaAuth