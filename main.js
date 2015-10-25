var albumTemplate = _.template($('#albumTemp').html());
var picturesTemplate = _.template($('#picTemp').html());
var coverPhoto;
var inc = 1;
var int = 1;
var className;
_.each(albums, function(item, idx, arr){
  _.each(item.album, function(item){
    albumPhoto = item.photo;
    photoName = item.name;
    $('section').append(picturesTemplate(item));
  });
});
_.each(albums, function(item, idx, arr){
  coverPhoto = item.album[0].photo;
  $('section').append(albumTemplate(item));
    if(idx === inc-1){
      className = "displayed-" + inc;
      _.each(item.album, function(item){
      $('.pictures-grid:nth-child(' + int + ')').addClass(className);
      int++;
    });
    inc++;
  }
  className = "displayed-" + idx;
  $('.albumsDisplay:eq(' + idx + ')').addClass(className);
});
var albumPhoto;
var photoName;
$('.albumsDisplay').on('click', function(){
  for(var i = 0; i < albums.length; i++){
    console.log(i);
    if($(this).attr('class') === $('.albumsDisplay.displayed-' + i + '').attr('class')){
      console.log("worked");
      console.log('true');
      $('.pictures-grid.displayed-' + (i+1) + '').addClass('displayed');
      $('.grid-albums').addClass('invisible');
    }
  }
});
