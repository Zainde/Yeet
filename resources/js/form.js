function validate_dom(form_object) {

    var formstatus = 1;

    var textarea = document.getElementById('comment')

    var textareavalue = document.getElementById('commentlabel').textContent;

    var confirm_message = "Bekræft at du vil sende følgende oplysninger:\n\n";

    var input_elements = form_object.querySelectorAll(":required");

    var checkboxes = document.getElementsByTagName('input');

    for(var i = 0; i < input_elements.length; i++) {

        var labeltext = input_elements[i].placeholder;

        if(!input_elements[i].value) {

            display_error(input_elements[i], "Du skal udfylde feltet " + labeltext.toLocaleLowerCase() + "!");
            formstatus = 0;
            return false;

        } else {
            confirm_message += labeltext + ": " + input_elements[i].value + "\n";
        }
   
    }

    for(var i = 0; i <checkboxes.length; i++) {
        if(checkboxes[i].type === 'checkbox'){
            if(checkboxes[i].checked) {
                console.dir(checkboxes[i])
                confirm_message += "Bestilt: " + checkboxes[i].parentElement.innerText + "\n";
            }
        }
            
        
 }
        if(textarea.value) {
            confirm_message += textareavalue + ": " + textarea.value + "\n";
        }


if(formstatus) {
        if(confirm(confirm_message)) {
            location.href = 'http://www.sanger.dk/';
        }
    }
   
    

function display_error(input_object, string) {

    if(!input_object.nextElementSibling.classList.contains("text-error")) {
        input_object.insertAdjacentHTML('afterend','<div class="text-error">' + string + '</div>');

        input_object.classList.add("field-error");

        input_object.onkeypress = function() {
            if(input_object.nextElementSibling.classList.contains("text-error")) {

                input_object.nextElementSibling.remove();

                input_object.classList.remove("field-error");

            }
        }
    }
}}



function buttons(obj,adc) {
    var position = document.getElementById('form');
    position.scrollIntoView({
        behavior: 'smooth'
    });

    var classname = obj.className;

    var checks = document.getElementsByTagName("input")

    for(var i = 0; i < checks.length; i++) {
        if(checks[i].type === 'checkbox') {
            if(checks[i].className === classname) {
                checks[i].checked = true
            }
        }
    }
}