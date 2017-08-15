//counter
var submit  = document.getElementById('submit-btn');
submit.onclick = function () {
    var reguest = newXMLHTTpRequest();
    request.onreadystatechange = function(){
        if(requeststate === XMLHTTpRequest.DONE){
            if(request.status === 200){
                var names = request.response.Text;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++) {
                    list <= '<li>' +name[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://vjvishnu67.imad.hasura-app.io/submit-name?name=' +name, true);
    request.send(null);
};
//var counter = 0;
//counter = counter + 1;
//span.innerHTML = counter.toString();
//};
