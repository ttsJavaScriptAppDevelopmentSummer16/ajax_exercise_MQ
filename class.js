// 1)
$(document).ready(function() {
    $('#allPosts').on('click', function() {
        $.get("http://jsonplaceholder.typicode.com/posts/", function(data) {
            console.log(data);
        });
    });
});

// 2)
$(document).ready(function(){
  $("#idOfTen").on('click', function() {
    $.get("http://jsonplaceholder.typicode.com/posts/10", function(data){
      console.log(data);
    });
  });
});

// 3)
$(document).ready(function(){
  $('#twelveComment').on('click', function(){
    $.get("http://jsonplaceholder.typicode.com/posts/12/comments", function(data){
      console.log(data);
    })
  })
})

// 4)
$(document).ready(function(){
  $('#userTwo').on('click', function(){
    $.get("http://jsonplaceholder.typicode.com/users/2", function(data){
          console.log(data);
    });
  });
});


// 5)
  $(document).ready(function(){

    var og = $("#newPost").on('click', function(){
      $.post("http://jsonplaceholder.typicode.com/posts",
      {
      "userId": 11,
      "id": 101,
      "title": "qui est esse",
      "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque"
    },
      function(data){
        console.log(data.id);
        });
      });



// 6) - posts/101 doesnt exist so its cant PUT? i get 404 errors, if i change it to an existing posts (like posts/100) - it shoes me nothing...

$(document).ready(function(){

  $("#replaceTwelve").on('click', function(){
    $.ajax(
        {
          method: "PUT",
          url: "http://jsonplaceholder.typicode.com/posts/100",
          // dataType: "text",
          data:
            {"userId": 12,
            "id": 101,
            "title": "qui est esse",
            "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque"
            }
        },
      function(response){
        console.log(response.data);
      });
    });
  });
});

// 7)

$(document).ready(function(){
  $('#updateTwelve').on('click', function(){
    $.ajax(
            {
              method: 'PUT',
              url: 'http://jsonplaceholder.typicode.com/posts/12',
              dataType: "json",
              data: {
                "userId": 2,
                "id": 12,
                "title": "NEW TITLE",
                "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
              }
            ,
            complete: function(response){
              console.log(response);
            }

  });
});
});

// 8)

$(document).ready(function(){
  $('#deleteTwelve').on('click', function(){
    $.ajax(
            {
              method: 'DELETE',
              url: 'http://jsonplaceholder.typicode.com/posts/12',
            complete: function(response){
              console.log("SUCCESS!");
            }

  });
});
});

// 9) How does the var list work??

$(document).ready(function(){

$('#display').on('click', function(){

  var list = $('posts#title'); //not sure how this works?? no id for the posts..

  //Make a GET request for the items to render
  $.get('http://jsonplaceholder.typicode.com/posts', function(posts){
      //Iterate over the response, adding elements to DOM
      console.log(posts);
      posts.forEach(function(post){
          var li = $('<li></li>');
          li.text(post.title);
          list.append(li);
      })
  })
});
});
