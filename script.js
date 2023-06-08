document.addEventListener('click', e => {
    const  isDropdownButton = e.target.matches('[data-dropdown-button]')
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')

        if(currentDropdown.style['background'] === 'red'){
            currentDropdown.style['background'] = 'indigo'
            currentDropdown.style['padding'] = '7px 20px'
            currentDropdown.style['border'] = 'solid white'
        }else{
            currentDropdown.style['background'] = 'red'
            currentDropdown.style['padding'] = '5px 20px'
            currentDropdown.style['border'] = 'none'
            currentDropdown.style['borderColor'] = 'red'
            currentDropdown.style['borderRadius'] = '20px'
        }
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown =>{
        if(dropdown === currentDropdown) return

        dropdown.style['background'] = 'red'
        dropdown.style['padding'] = '5px 20px'
        dropdown.style['border'] = 'none'
        dropdown.style['borderColor'] = 'red'
        dropdown.style['borderRadius'] = '20px'
        dropdown.classList.remove('active')
    })
})