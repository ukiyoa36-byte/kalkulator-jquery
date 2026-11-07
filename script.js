$(document).ready(function() {
    let currentInput = '';
    $('.number, .operator').click(function() {
        let value = $(this).text();
        currentInput += value;
        
        $('#display').val(currentInput);
    });

    $('.clear').click(function() {
        currentInput = '';
        $('#display').val('');
    });

    $('.equal').click(function() {
        try {
            let result = eval(currentInput);
            
            $('#display').val(result);
            currentInput = result.toString();
        } catch (error) {
            $('#display').val('Error');
            currentInput = '';
        }
    });
});