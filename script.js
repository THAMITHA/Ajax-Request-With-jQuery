 function fetchRandomDogImage(){
// //method:1(plain venila js call)
//     var xhrRequest = new XMLHttpRequest();

//     xhrRequest.onload = function(){
//          console.log(xhrRequest.response);
//         var responseJSON = JSON.parse(xhrRequest.response);
//         var imageUrl = responseJSON.message;
//         $('#dog-image').attr('src',imageUrl);
//     };
//     xhrRequest.onerror = function(){
//         console.log("Request Failed");
//     };
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
//     xhrRequest.send('');

// }

// method:2
// making similar request using jQuery
// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'GET',
//     //data:is response.data already in JSON format
//     success:function(data){
//         // var responseJSON = JSON.parse(xhrRequest.response);
//         var imageUrl = data.message;
//         $('#dog-image').attr('src',imageUrl); 
//     },

// }).fail(function(){
//     console.log('error');
// });
 


// method:3
// xhr here is jQuery xhr
$.get('https://dog.ceo/api/breeds/image/random',function(data){
            var imageUrl = data.message;
            $('#dog-image').attr('src',imageUrl); 
 }).fail(function(xhr, textStatus, errorThrown){
    console.log("Request Failed");
 });
 }


// handel button-click
$('#fetch-dog-image-button').click(fetchRandomDogImage);
