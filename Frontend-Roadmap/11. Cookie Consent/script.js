window.addEventListener("DOMContentLoaded", () => {
    const consent = localStorage.getItem('cookie')
    const banner = document.querySelector('.cookie')
    const accept = document.querySelector('#accept')
    const reject = document.querySelector('#reject')
    const page = document.getElementById('page')
    const overlay = document.querySelector('.overlay')

    if (consent === 'accept') {
        banner.style.display = "none"
        overlay.style.display = "none"
        page.classList.remove('page-blur')
    } else {
        banner.style.display = "block"
        overlay.style.display = "block"
        page.classList.add('page-blur')
    }



    accept.addEventListener('click', () => {
        localStorage.setItem('cookie', 'accept')
        banner.style.display = "none"
        overlay.style.display = "none"
        page.classList.remove('page-blur')

    })

    reject.addEventListener('click', () => {
        localStorage.setItem('cookie', 'reject')
        banner.style.display = "none"
        overlay.style.display = "none"
        page.classList.remove('page-blur')
    })
})

function resetConsent() {
    localStorage.removeItem('cookie')
    location.reload()
  }

