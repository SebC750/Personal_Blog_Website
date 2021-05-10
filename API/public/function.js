var update = async(e) => {
     if(e.dataset.querytype = 'by_code')
     {
       let value = document.querySelector('#code').value;
       api = `http://localhost:3000/courses/by_code/${value}`;
     }
     if(e.dataset.querytype = 'by_level')
     {
       let value = document.querySelector('#level').value;
       api = `http://localhost:3000/courses/by_level/${value}`;
       
     }
     if(e.dataset.querytype = 'by_title')
     {
       let value = document.querySelector('#title').value;
       api = `http://localhost:3000/courses/by_title/${value}`;
     }
     if(e.dataset.querytype = 'by_instructor')
     {
       let value = document.querySelector('#instructor').value;
       api = `http://localhost:3000/courses/by_instructor/${value}`;
     }
     const results = await fetch(api)
     const model = await results.json()
     console.log(model);
     render_view(model)
}

var render_view = (model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
  var template = Handlebars.compile(source);
  var html = template(model);
	document.querySelector("#displays").innerHTML = html;
  
}

