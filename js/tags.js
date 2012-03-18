
( function( $ )
{
    
    $( init );
    
    var $posts, tag;
    
    $( window ).bind( 'hashchange', hashChanged );
    
    function hashChanged()
    {
        console.log( 'hashChanged: ' + getTagToShow() );
        var tag = getTagToShow();
        showPostsWithTag( tag );
    }
    
    function init()
    {
        $posts    = $( '#tagged-posts > li' );
        $tagsList = $( '#tags' );
        
        buildTagList();
        
        if( tag = getTagToShow() )
        {
            showPostsWithTag( tag );
        }
    }
    
    function getTagToShow()
    {
        if( location.hash.length > 0 )
        {
            return location.hash.substr( 1 );
        }
    }
    
    function showPostsWithTag( tag )
    {
        $tagsList.children().removeClass( 'active' );
        $( '#tag-' + tag ).addClass( 'active' );
        $posts.hide();
        $posts.filter( '.' + tag ).show();
    }
    
    function buildTagList()
    {
        var tags   = getTagsList(),
            links  = '';
        
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
        
        return tags;
    }
    
} )( jQuery );
