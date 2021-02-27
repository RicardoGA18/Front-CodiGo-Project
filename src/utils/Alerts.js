import Swal from 'sweetalert2'

// SweetAlert
const errorAlert = async (message) => {
  await Swal.fire({
    title: 'Error',
    icon: 'error',
    text: message,
  })
}


// ModalCharge
const openModalCharge = () => {
  const body = document.querySelector('body')
  const modalCharge = document.createElement('div')
  modalCharge.setAttribute('class','ModalCharge')
  modalCharge.setAttribute('data-modal','charge')
  modalCharge.innerHTML = '<i class="fas fa-spinner fa-3x fa-pulse"></i>'
  body.appendChild(modalCharge)
}

const closeModalCharge = () => {
  const body = document.querySelector('body')
  const modalCharge = document.querySelector('[data-modal="charge"]')
  body.removeChild(modalCharge)
}

export {
  closeModalCharge,
  openModalCharge,
  errorAlert,
}