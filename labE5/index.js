
//When the window opens, EventListener will load a function to (e)
window.addEventListener('load', function(e) {
	var appleGrid = document.getElementById('apple-grid'); // variable appleGrid assigned to all child elements with the specified ID 'apple-grid'
	var appleList = document.getElementById('apple-list');//  variable appleList assigned to all child elements with the specified ID 'apple-list'
	var appleThumbs = document.getElementById('apple-thumbs');//assign  variable appleThumbs assigned to all child elements with the specified ID 'apple-thumbs'
	var gridApples = document.querySelectorAll('.apple'); // variable gridApples assigned to all child elements with the specified ID '.apple'

    

	gridApples.forEach((gridApple, i) => {//for elements under '.apple' -- on click, perform pickApple function:
		gridApple.addEventListener('click', pickApple);
	});

    
    //assigned to perform the function pickApple
	function pickApple(e) {
        //appleGrid assign to all child elements with the ID 'apple-grid'
		var apple = e.target;
		var appleName = apple.dataset.apple.toString();
        

// each item assign of appleaListItem to as a list element
		var appleListItem = document.createElement('li');
        
     //each appleList arranged as element into an ordered list   
		var appleListItem = document.createElement('li');

         //appleListItem is added to an element in an ordered list
		var ol = appleList.querySelector('ol');
		ol.appendChild(appleListItem);
        //appleListItems are added to appleName
		appleListItem.innerText = appleName;
        
        //appleListItem are added to element within an ordered list
		var appleThumb = apple.cloneNode(true);
        
         //to appleThumbs elements, add an appleThumb
		appleThumbs.appendChild(appleThumb);

	}

});