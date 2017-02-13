var button=document.getElementById('counter');

button.onClick=function(){
    
    var request=XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readychange===XMLHttprequest.DONE){
            if(request.status===200){
                var counter=request.responsetext;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://bharathreddy911.imad.hasura-app.io/counter',true);
    request.send(null);
};