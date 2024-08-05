function password() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*(){}|[]<>";
    let password = "";
    const length = 10;
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    document.getElementById("screen").value = password;
}
