const form = document.getElementById('form')
const nameInput = document.getElementById('name') as HTMLInputElement
const emailInput = document.getElementById('email') as HTMLInputElement
const messageInput = document.getElementById('message') as HTMLTextAreaElement
const erroMsg = 'This field can\'t be empty'

const setError = (element:HTMLInputElement | HTMLTextAreaElement) => {
	element.parentElement!.classList.add('error')
	element.nextElementSibling!.textContent = erroMsg
}

const validateInput = () => {

	// Check if name input is empty
	if(nameInput.value === '') {
		setError(nameInput)
	}

	// Check if email input is empty
	if(emailInput.value === '') {
		setError(emailInput)
	}

	// Check if textarea is empty
	if(messageInput.value === '') {
		setError(messageInput)
	}
}

form?.addEventListener('submit', (e) => {
	e.preventDefault()

	validateInput();
})