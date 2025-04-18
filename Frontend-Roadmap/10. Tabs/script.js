
// allTabs.forEach((tab) => {
//     tab.addEventListener('click', function (event) {
//         event.preventDefault()
//         allTabs.forEach(t => t.classList.remove('activet'))
//         this.classList.add('activet')
//     })
// })



const allTabs = document.querySelectorAll('.tab a')
const allContent = document.querySelectorAll('.container-change div')

const changeTab = (event) => {
    event.preventDefault()

    allTabs.forEach(t => t.classList.remove('activet'))
    event.currentTarget.classList.add('activet')
    
    allContent.forEach(ct => {
        ct.classList.add('hidden')
        ct.classList.remove('show')
    })


    const target = document.getElementById(`${event.currentTarget.id}-t`)
    target.classList.remove('hidden')
    target.classList.add('show')

    
}

allTabs.forEach(tab => {
    tab.addEventListener('click', changeTab)
})
