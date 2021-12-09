const pass = document.getElementById("senha")
const fundo = document.getElementById("background")


pass.addEventListener("input", (e) => {
    const input = e.target.value
    const length = input.length
    fundo.style.filter = `blur(${40-(length*3)}px)`
})