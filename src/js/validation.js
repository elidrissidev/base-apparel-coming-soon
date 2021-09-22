const form = document.querySelector('.js-form')
const emailInput = document.querySelector('#email-address')

/**
 * Check if field is valid and return an error message if it's not
 */
function hasError(field) {
  if (field.validity.valid) {
    return
  }

  if (field.validity.valueMissing) {
    return `Email cannot be empty`
  }

  if (field.validity.patternMismatch) {
    return 'Please provide a valid email'
  }
}

/**
 * Show input error if {@var error} is truthy, hide it otherwise
 */
function toggleError(field, error) {
  field.setAttribute('aria-invalid', !!error)
  field.setAttribute('aria-live', error ? 'assertive' : 'off')
  field.closest('.input-wrapper').classList.toggle('has-error', !!error)

  const errorEl = document.getElementById(field.getAttribute('aria-errormessage'))
  errorEl.textContent = error
}

emailInput.addEventListener('blur', function(event) {
  const error = hasError(event.target)

  toggleError(event.target, error)
})

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const error = hasError(emailInput)
  toggleError(emailInput, error)

  if (error) {
    emailInput.focus()
    return
  }

  alert("Alas, you will be waiting forever")
})
