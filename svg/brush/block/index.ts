import { BlockData } from '../../types/block';

/**
 * 绘制svg块
 */
export default class Block {
	private data: BlockData;
	private block: HTMLElement;

	constructor(data: BlockData) {
		this.data = data;
		if (data) {
			this.draw();
		}
	}

	/**
	 * 绘制
	 */
	draw() {
		this.block = document.createElement('rect');
		this.block.setAttribute('width', this.data.width + '');
		this.block.setAttribute('height', this.data.height + '');
		console.log(this.block, 'block');
	}

	get container() {
		return this.block;
	}
}
