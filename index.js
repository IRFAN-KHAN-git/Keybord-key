const child = document.getElementById('child')

window.addEventListener('keydown' , function(e){
    child.innerHTML =`
        <div class="color">
        <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <th>${e.key}</th>
                <th>${e.keyCode}</th>
                <th>${e.code}</th>
            </tr>
        </table>
        </div>

    `
})