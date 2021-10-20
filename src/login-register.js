const $ = document.querySelector.bind(document)

const inputBtn = $('#file-upload-btn')
const customInputBtn = $('#custom-upload-btn')
const imgWrapper = $('.img-wrapper')
const img = $('.img-wrapper .image img')
const cancelBtn = $('#cancel-btn')
const fileName = $('.img-wrapper .file-name')
let regexExp = /[0-9a-zA-Z\^\&\@\{\}\[\]\,\&\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

function inputActiveDefault(element, inputEle) {
    if (element !== null) {
        element.onclick = (event) => {
            event.preventDefault()
            inputEle.click()
            event.stopPropagation()
        }
    }
}

inputActiveDefault(customInputBtn, inputBtn)
inputActiveDefault(imgWrapper, inputBtn)

if (inputBtn !== null) {
    inputBtn.addEventListener("change", function() {
        const file = this.files[0]
        
        if (file) {
            const reader = new FileReader()
    
            reader.onload = function () {
                const result = reader.result
                img.src = result
                imgWrapper.classList.add('active')
            }
    
            cancelBtn.addEventListener('click', function (event) {
                img.src = ""
                imgWrapper.classList.remove('active')
                event.stopPropagation()
            })
    
            reader.readAsDataURL(file)
        }
    
        if (this.value) {
            let inputStorage = this.value.match(regexExp)
            fileName.textContent = inputStorage
        }
    })
}
