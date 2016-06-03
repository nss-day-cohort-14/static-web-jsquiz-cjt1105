var character;
var height;
var btn = document.getElementById('btn');
var tree = {};
// function to get input
function getInput(){
	tree.character = document.getElementById('character').value;
	tree.height = document.getElementById('height').value;
	growTree(tree);
}
/// add event listeners
window.addEventListener("keydown", function(){
	if (event.keyCode === 13)
		getInput();
})


btn.addEventListener('click', function(){
	getInput();
	
})

/// function to grow tree
function growTree(tree){
	var rows = tree.character;
	var space = " ";
	var spaces= tree.height;
	var numOfSpaces = space.repeat(spaces);
	for (var i = 0; i < tree.height-1; i++){
		console.log(numOfSpaces+rows);
		rows += tree.character + tree.character;
		spaces-=1;
		if (spaces >= 0){
			numOfSpaces = space.repeat(spaces)
		}
	}
}