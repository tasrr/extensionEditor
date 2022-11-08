
onUiUpdate(
	function(){
		
		let id = "zzzEditor";
		
		let button = document.querySelector( "#" + id );

		if( button === null ){

			let btn = document.createElement( "button" );
			btn.setAttribute( "id", id );
			btn.appendChild( document.createTextNode( "OPEN ExtensionEditor" ) );
			btn.disabled = true;
			btn.addEventListener( "click", function() {
				window.open( "file/extensions/extensionEditor/extensionEditor/extensionEditor.html", null, "popup,top=100,left=100" );
			});
			document.body.insertBefore( btn, document.body.firstChild );

			return;
		}

		if( gradioApp().querySelector( "#tab_txt2img" ) !== null ){
			button.disabled = false;
		}

		return;

	}
);
