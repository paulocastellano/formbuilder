## FormBuilder
============

FormBuilder is a generator bootstrap from by Json.


## Live example
[Click here](http://paulocastellano.github.io/formbuilder) to go.
## Basic usage

```
<div id='formbuilder'></div>

<script>
	FormBuilder.init('#formbuilder'); // formId
</script>
```

## Design &amp; Dependencies

Formbuilder have any dependencies, all include inside bower.json


## Data format

Use bootstrap-datepicker


Json Format example

```javascript
[{
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
}]
```

## Questions?
Any question about FormBuilder? Feel free to [open a GitHub Issue](https://github.com/paulocastellano/formbuilder/issues/new) 

or contact by e-mail.

## Developing

1. `npm install`
2. `bower install`
3. `grunt watch`
4. open `index.html` and you're all set!

## License
MIT