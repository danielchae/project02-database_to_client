function getData() {
	//	set variables to placeholder values for now, connect them to database
	var get_animal 		= 'placeholder';
	var get_1stnumber	= 1;
	var get_2ndnumber	= 2;
	var get_checkstatus = true;
	
	
	//	populate fields with appropriate data
	$('#in01').val(get_animal);
	$('#in02').val(get_1stnumber);
	$('#in03').val(get_2ndnumber);	
	$('#in04').prop('checked',get_checkstatus);
};

$('.load').click(function(){
	getData();
});