export const hashEmail = {
    getHash(email:string) {
        // remove dots beofre @
        // replace @ with _at_
        // replace dot with '_'
        var split:string[] = email.split('@')
        const emailFront = split[0].split('.').join("")
        const emailBack = split[1].split('.').join("_dot_")
        return (emailFront + '_at_' + emailBack)
    }
}