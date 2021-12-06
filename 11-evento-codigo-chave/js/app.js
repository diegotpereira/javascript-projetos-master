const inserir = document.getElementById('inserir')

window.addEventListener('keydown', (event) => {
    inserir.innerHTML = `
    <div class="chave">
        ${event.key === '' ? 'Space' : event.key}
        <small>event.key</small>
    </div>
    <div class="chave">
      ${event.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="chave">
      ${event.code}
      <small>event.code</small>
    </div>
    `
})