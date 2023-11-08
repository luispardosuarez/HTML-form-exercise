document.addEventListener("DOMContentLoaded", function() {
    let personalData = document.getElementById('personalData');

    personalData.addEventListener("submit", function(event) {
        event.preventDefault(); 
        readFormFields();
    });
    
    function readFormFields() {
        let personalData = document.getElementById('personalData');
        let result = '';

        for (let i = 0; i < personalData.elements.length; i++) {
            let element = personalData.elements[i];

            if (element.type === 'radio' || element.type === 'checkbox') {
                if (element.checked) {
                    result += element.value + '\n';
                }
            }

            if (element.type === 'select-one') {
                if (element.selectedIndex !== -1) {
                    result += element.options[element.selectedIndex].value + '\n';
                }
            }

            if (element.type === 'select-multiple') {
                for (let j = 0; j < element.options.length; j++) {
                    if (element.options[j].selected) {
                        result += element.options[j].value + '\n';
                    }
                }
            }

            if (element.type === 'text' && element.value.trim() !== '') {
                result += element.value + '\n';
            }
        }

        console.log(result);

        return false;
    }
});
