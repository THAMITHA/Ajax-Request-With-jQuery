 function fetchRandomDogImage(){
// method:1
//     var xhrRequest = new XMLHttpRequest();

//     xhrRequest.onload = function(){
//         console.log(xhrRequest.response);
//         var responseJSON = JSON.parse(xhrRequest.response);
//         var imageUrl = responseJSON.message;
//         $('#dog-image').attr('src',imageUrl);
//     };
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
//     xhrRequest.send();

// }

// method:2
// making similar request using jQuery
// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'GET',
//     //data:is response.data already in JSON format
//     success:function(data){{
//         // var responseJSON = JSON.parse(xhrRequest.response);
//         var imageUrl = data.message;
//         $('#dog-image').attr('src',imageUrl); 
//     }}

// });



// method:3

$.get('https://dog.ceo/api/breeds/image/random',function(data){
            var imageUrl = data.message;
            $('#dog-image').attr('src',imageUrl); 
 });
}
// handel button-click
$('#fetch-dog-image-button').click(fetchRandomDogImage);
