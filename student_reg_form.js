$(function(){
    $('#namecheck').hide(); //hiding all the error messages
    $('#emailvalid').hide();
    $('#passcheck').hide();
    $('#conpasscheck').hide();

    var error_name=false;
    var error_email=false;
    var error_password=false;
    var error_vpassword=false;

    $('#name').focusout(function(){ //function 'check_name' called when user is out of the 'name' box
        check_name();
    });
    $('#email').focusout(function(){
        check_email();
    });
    $('#password').focusout(function(){
        check_password();
    });
    $('#v_password').focusout(function(){
        check_vpassword();
    });

    function check_name(){
        var pattern = /^[a-zA-Z]*$/;  
        var name = $('#name').val();
        if(pattern.test(name) && name !== '') {
            $('#namecheck').hide();
            $('#name').css("border-bottom","2px solid #34F458");
        }
        else{
            $('#namecheck').html("Please enter valid username!");
            $('#namecheck').show();
            $('#name').css("border-bottom","2px solid #F90A0A");
            error_name = true;
        }
    }

    
    function check_email(){
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $('#email').val();
        if(pattern.test(email) && email !== ''){
            $('#emailvalid').hide();
            $('#email').css("border-bottom","2px solid #34F458");
        }
        else{
            $('#emailvalid').html("Please enter valid email ID!");
            $('#emailvalid').show();
            $('#email').css("border-bottom","2px solid #F90A0A");
            error_email = true;
        }
    }

    function check_password(){
        var pwd_len = $('#password').val().length;
        if(pwd_len<8){
            $('#passcheck').html('Password should be atleast 8 characters long');
            $('#passcheck').show();
            $('#password').css("border-bottom","2px solid #F90A0A");
            error_password=true;
        }
        else{
            $('#passcheck').hide();
            $('#password').css("border-bottom","2px solid #34F458");
        }
    }

    function check_vpassword(){
        var password = $('#password').val();
        var v_password = $('#v_password').val();
        if(password !== v_password){
            $('#conpasscheck').html('Password does not match!');
            $('#conpasscheck').show();
            $('#v_password').css("border-bottom","2px solid #F90A0A");
            error_vpassword=true;
        }
        else{
            $('#conpasscheck').hide();
            $('#v_password').css("border-bottom","2px solid #34F458");
        }
    }

    $('#form').submit(function() {
        error_name=false;
        error_email=false;
        error_password=false;
        error_vpassword=false;

        check_name();
        check_email();
        check_password();
        check_vpassword();

        if(error_name==false && error_email==false && error_password==false && error_vpassword==false){
            alert("Registration Successfull!");
            return true;
        }
        else{
            alert("Kindly fill the form correctly!");
            return false;
        }
    });

});