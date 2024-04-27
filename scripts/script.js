const blocks = document.querySelectorAll('.block');
const origin = document.body.innerHTML;

const moveBlock = (blockOne, blockTwo,index, func) =>{
	blockOne = blocks[index].innerHTML;
	blockTwo = blocks[func].innerHTML;
	blocks[index].innerHTML = blockTwo;
	blocks[func].innerHTML = blockOne
}

const sum = (a, b) => a + b
const sub = (a, b) => a - b


document.addEventListener('click', e =>{
	if(e.target.closest('.block')){
		let block = e.target.closest('.block');
		let active;
		let inactive;
		blocks.forEach((el, i)=>{
			if(el == block && e.target.closest('.arrow.left')){
				moveBlock(active, inactive, i, sub(i, 1))
			}
			if(el == block && e.target.closest('.arrow.right')){
				moveBlock(active, inactive, i, sum(i, 1))
			}
			if(el == block && e.target.closest('.arrow.top')){
				moveBlock(active, inactive, i, sub(i, 5))
			}
			if(el == block && e.target.closest('.arrow.bottom')){
				moveBlock(active, inactive, i, sum(i, 5))
			}
		})
	}
	if(e.target.closest('.btn-reset')){
		document.body.innerHTML = origin;
	}
})




