function init(){
//add your javascrip between these two lines of code

document.getElementById('button').addEventListener('click', function(){
	var pw = document.getElementById('password').value;
	var pw1 = document.getElementById('input_float_pw').value;
	var email = document.getElementById('email').value;
	var plength = document.getElementById('password').value.length;
	var regex = /^[A-Za-z0-9 ]+$/;
	var isValid = regex.test(pw);
	
	if ( pw != pw1) {
		alert('Your passwords dont match please try again');
		document.getElementById("myform").addEventListener("click", function(event){
		event.preventDefault()
	});
	}else if (isValid) {
		alert("Your password must contain at least one special character to proceed");
		document.getElementById("myform").addEventListener("click", function(event){
		event.preventDefault()
	});
    } else if (plength==0){
		alert("Your Password cannot be blank please provide a suitable password.");
		document.getElementById("myform").addEventListener("click", function(event){
		event.preventDefault()
	});
	} else if (plength<=7){
		alert("Your Password is too short! It must be at least 8 characters, please try again.");
		document.getElementById("myform").addEventListener("click", function(event){
		event.preventDefault()
	});
	} else {
		alert('Your password is acceptable');
		document.getElementById("myform").submit();
	}
});

}

 
window.addEventListener('load', init);
