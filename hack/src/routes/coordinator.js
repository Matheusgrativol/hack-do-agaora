export const goToLogout = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/login")
}
export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/perfil")
}

export const goToPoit = (history) =>{
    history.push("/point")
}

export const goBack = (history) =>{
    history.goBack()
}