$(document).ready(function(){
    
    $('.well h4').each(function(){
        $(this).wrap(function(){
            var link = $('<a/>');
            var href;
            
            switch($(this).text()){
            
                case 'Understanding PDX CitySync' :
                    href = 'understanding-pdx-citysync';
                    break;
                case 'Getting Started' :
                    href = 'getting-started';
                    break;
                case 'Building & Submitting Your App':
                    href = 'building-and-submitting';
                    break;
                case 'JavaScript SDK':
                    href = 'javascript-sdk';
                    break;
                default :
                    href = 'sample-app';
                    break;
            }
            
            
            link.attr('href', '../' + href);
            return link;     
        });
        

    });

});
