var albumTemplate = _.template($('#albumTemp').html());
var picturesTemplate = _.template($('#picTemp').html());
var albumListTemp = _.template($('#asideTemp').html());
var coverPhoto;
var pint = 1;
var linc = 1;
var inc = 1;
var int = 1;
var className;
_.each(albums, function(item, idx, arr){
  $('aside').append(albumListTemp(item));
  $('aside').addClass('invisible');
  className = 'li-displayed-' + linc;
  if(idx === linc-1){
    $('.albumLiItem:nth-child(' + linc + ')').addClass(className);
    linc++;
  }
});
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
        for(var i = 0; i < albums[0].album.length; i++){
          $('.pictureDisplay:eq(' + (pint-1) + ')').addClass('pic' + i);
          $('.pictureTitle:eq(' + (pint-1) + ')').addClass('pic' + i);
          pint++;
        }
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
    $('h1').addClass('invisible');
    $('aside').removeClass('invisible');
    $('.return').addClass('invisible');
    if($(this).attr('class') === $('.albumsDisplay.displayed-' + i + '').attr('class')){
      $('section').append('<h4>' + albums[i].name + '</h4>');
      $('.pictures-grid.displayed-' + (i+1)).addClass('displayed');
      $('.grid-albums').addClass('invisible');
    }
  }
});
$('li').on('click', function(){
  for(var i = 0; i < albums.length; i++){
    if($(this).attr('class') === $('.albumLiItem.li-displayed-' + (i+1)).attr('class')){
      $('h4').html(albums[i].name);
      for(var j = 0; j <albums.length; j++){
        $('.pictures-grid.displayed-' + (j+1)).removeClass('displayed');
      }
      $('.pictures-grid.displayed-' + (i+1)).addClass('displayed');
      $('.pictureDisplay').removeClass('invisible');
      $('.pictureDisplay').removeClass('enlargedPicture');
    }
  }
});
$('.pictureDisplay').on('click', function(){
  for(var i = 0; i < albums[i].album.length;i++){
    if($(this).attr('class') === $('.pictureDisplay.pic' + i).attr('class')){
      $('.pictureDisplay.pic' + i).addClass('enlargedPicture');
      $('.pictureTitle.pic' + i).css('left', '80px');
      $('.albumLiItem').addClass('invisible');
      $('.return').removeClass('invisible');
      $('h4').addClass('invisible');
      $('aside').addClass('invisible');
    }
    else{
        $('.pictureDisplay.pic' + i).addClass('invisible');
        $('.pictureTitle.pic' + i).addClass('invisible');
        // $('.return:eq('+i+')').removeClass('invisible');
    }
  }
});
$('.return').on('click', function(){
  $('.return').removeClass('invisible');
  if($(this).attr('class') === $('.return').attr('class')){
    $('.pictureTitle').css('left', '0px');
    $('.pictureDisplay').removeClass('enlargedPicture');
    $('.pictureDisplay').removeClass('invisible');
    $('.albumLiItem').removeClass('invisible');
    $('.pictureTitle').removeClass('invisible');
    $('.return').addClass('invisible');
    $('h4').removeClass('invisible');
    $('aside').removeClass('invisible');
  }
});
