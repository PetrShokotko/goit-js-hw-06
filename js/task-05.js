// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value.trim();
// });

const textInput = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
  output.textContent = event.target.value.trim();

	if (event.target.value === '') {
		output.textContent = 'Anonymous'
	}
})