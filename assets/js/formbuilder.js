var selector;
var label;
var css;
var type;
var options;
var form;

var json_database = 
	{
	"Field": [
    	{
			"label": "Name",
			"type": "text-short",
			"options": {},
		},
		{
			"label": "Data",
			"type": "date",
			"options": {},
		},
		{
			"label": "Gender",
			"type": "boolean",
			"options": {
		        "options": [{
		            "label": "H"
		        }, 
		        {
		            "label": "M"
		        }],
		    }
		},
		{
			"label": "Mark",
			"type": "checkbox",
			"options": {
		        "options": [{
		            "label": "Today"
		        }, 
		        {
		            "label": "Tomorrow"
		        },
		        {
		            "label": "Yesterday"
		        }]
		    }
		},
		{
			"label": "Bio",
			"type": "text-long",
			"field_options": {},
			"css": ""
		},
		{
 			"label":"Select",
	 		"type":"dropdown",
	 		"options": {
 				"options": [{
						"label" : "1"
					},
					{
						"label" : "2"
					}]
			}
		}
	]
}
	
/**
 * Class FormBuilder
 */
var FormBuilder = {	

	init: function(FormId)
	{
		// seta o FormId
		selector = FormId;

		//busca o json no database
		var json = json_database;


		// varre o json e chamando os metodos de formatação
		$(json.Field).each(function(key, field){
		    FormBuilder.format(field);
		});

		// adiciona a classe necessária e da append com os inputs no form
		$(selector).addClass('form-horizontal');
		$(selector).append(form);
	},

	format: function(json)
	{
		switch(json.type) {
		    case 'text-long':
		        form +=
			    	'<div class="form-group">' +
					    '<label class="col-sm-2 control-label">'+ json.label +':</label>' +
					    '<div class="col-sm-4">' +
					    	'<textarea class="form-control" name="' + json.name + '" rows="3"></textarea>' +
					    '</div>' +
					'</div>';

		        break;
		    case 'text-short':
		    	form +=
			    	'<div class="form-group">' +
					    '<label class="col-sm-2 control-label">'+ json.label +':</label>' +
					    '<div class="col-sm-4">' +
					        '<input type="text" name="' + json.label + '" class="form-control">' + 
					    '</div>' +
					'</div>';
		    	break;

		    case 'date':
		    	form +=
			    	'<div class="form-group">' +
					    '<label class="col-sm-2 control-label">'+ json.label +':</label>' +
					    '<div class="col-sm-4">' +
					    	'<div class="input-group">' +
                                '<input type="text" name="' + json.label + '" class="datepicker form-control">' +
                                '<span class="input-group-addon"><i class="fa fa-calendar"></i></span>' +
                            '</div>' +
					    '</div>' +
					'</div>';
		    	break;

		    case 'boolean':
		    	form +=
			    	'<div class="form-group">' +
			    		'<label class="col-sm-2 control-label">'+ json.label +':</label>';
			    			for (i = 0; i < json.options.options.length; i++) {
							   	form += '<label class="radio-inline">' +
							  		'<input type="radio" name="' + json.label + '" value=""> ' + json.options.options[i].label + 
								'</label>';
							}
					form += '</div>';
		    	break;

		    case 'checkbox':
		    	form +=
			    	'<div class="form-group">' +
			    		'<label class="col-sm-2 control-label">'+ json.label +':</label>';
			    			for (i = 0; i < json.options.options.length; i++) {
							   	form += '<label class="checkbox-inline">' +
							  		'<input type="checkbox" name="' + json.label + '" value=""> ' + json.options.options[i].label + 
								'</label>';
							}
					form += '</div>';
		    	break;

		    case 'dropdown':
		    	form +=
			    	'<div class="form-group">' +
			    		'<label class="col-sm-2 control-label">'+ json.label +':</label>' +
			    			'<div class="col-sm-4">' +
			    				'<select class="form-control">';
					    			for (i = 0; i < json.options.options.length; i++) {
									  	form += '<option name="' + json.label + '" value="' + json.options.options[i].label + '">' + json.options.options[i].label + '</option>';
									}
							
							form += '</select>'+
							'</div>' +
					'</div>';
		    	break;
		}
	}
}

$(document).ready(function() {
	FormBuilder.init('#formbuilder');

	//plugins
	$('.datepicker').datepicker()
});