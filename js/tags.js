
( function( $ )
{
  
  $( init );
  
  var $posts, tag;
  
  $( window ).bind( 'hashchange', hashChanged );
  
  function hashChanged()
  {
    var tag = getTagToShow();
    showPostsWithTag( tag );
  }
  
  function init()
  {
    $posts  = $( '#tagged-posts > li' );
    $tagsList = $( '#tags' );
    
    buildTagList();
    
    if( tag = getTagToShow() ) {
      showPostsWithTag( tag );
    }
    else {
      $( '#tag-all' ).addClass( 'active' );
    }
  }
  
  function getTagToShow()
  {
    if( location.hash.length > 1 )
    {
      return location.hash.substr( 1 );
    }
  }
  
  function showPostsWithTag( tag )
  {
    $tagsList.children().removeClass( 'active' );
    $( '#tag-' + tag ).addClass( 'active' );
    
    if( tag === 'all' ) {
      $posts.show();
    }
    else {
      $posts.hide();
      $posts.filter( '.' + tag ).show();
    }
  }
  
  function buildTagList()
  {
    var tags  = getTagsList(),
        links = '';
    
    tags.unshift( 'all' );
    
    for( var i = 0, len = tags.length; i < len; i++ )
    {
      var tag = tags[ i ],
          url = location.pathname + '#' + tag;
      
      links += '<li id="tag-' + tag + '"><a href="' + url + '">' + tag + '</a></li>';
    }
    
    $tagsList.append( links );
  }
  
  function getTagsList()
  {
    var tags = [];
    
    $posts.each( function()
    {
      var postTags = $( this ).attr( 'class' ).split( ' ' );
      
      tags = $.merge( tags, postTags );
    } );
    
    return uniq( tags ).sort();
  }
  
  function uniq( a )
  {
    var n = [], o = {}, p, i, len;
    
    for( i = 0, len = a.length; i < len; i++ ) {
      o[ a[ i ] ] = true;
    }
    
    for( p in o ) {
      if( o.hasOwnProperty( p ) ) {
        n.push( p );
      }
    }
    
    return n;
  }
  
} )( jQuery );
