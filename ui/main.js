//counter
var button = document.getElementById('counter');
button.onclick = function(){
    var reguest = newXMLHTTPRequest();
    request.onreadystatechange = function(){
        if(requeststate === XMLHTTPRequest.DONE){
            if(request.status === 200){
                var counter = request.response.Text;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://vjvishnu67.imad.hasura-app.io',true);
    request.send(null);
};