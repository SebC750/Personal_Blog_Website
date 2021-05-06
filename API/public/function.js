var update = async(e) => {
     if(e.dataset.querytype = 'by_code')
     {
       let value = document.querySelector('#codeQ').value;
       api = `http://localhost:3000/courses/by_code/:${value}`;
     }
     const results = await fetch(api)
     const model = await results.json()
     render_view(model)
}

var render_view = (model) => {
	var source = document.querySelector("#show_results_view")

	var template = Handlebars.compile(source);

	var html = template(model);
	document.querySelector("#displays").innerHTML = html;
  
}