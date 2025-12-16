const button = document.getElementById('button')


const customAlert = (message) => {
    alert(message)
}
button.addEventListener('click', () => {
    customAlert('Learn frontend!')
})
