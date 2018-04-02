# Node.js and Express Tutorial from The Net Ninja Concluded 
Here you can find the final result of a working example of Node.js, Express.js and EJS extended with body-parser.

## The final code is whatever was presented on tutotial plus had 2 mods from: 

1 -  in the Controller, inside the res function 'res.json(data);'  you need to pass some info but you don't need to pass the data as it's never used: 'res.json(true);' works as well. When you reach AJAX again with successful message it will never use that data and will just tell the web browser to refresh which in the end means to request GET 'todo' and that will get the data from DB again refreshing the data object.

2 -  the delete method was very clever but the way it was done doesn't work with especial characters in the object such as '?' (question marks). To fix this I added id attribute to each todo item with the auto-generated id from mlab like this: '<li id="<%= todos[i].id %>"><%= todos[i].item %></li>'. This was also a good fix to get rid of the replace methods. With that, all you need is 'Todo.find({_id: req.params.item}).remove(function(err,data){' (note that I didn't change the object that gets the id param from the url)


Below is the Original repo README file
-------- 
# node-js-playlist
CSS and asset files for the Net Ninja YouTube nodejs playlist

The final project code can be found in the public/assests folder of this repo

If you have been following the tutorial, code for each and every lesson is added in the Practice folder so you can directly download and check.
All files have been tested.

If more files for  .\Practice\ should be added. They will be added very soon.
