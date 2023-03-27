import {BlockData} from '../../types/block';
import {attr, create} from 'tiny-svg';

/**
 * 绘制svg块
 */
export default class Block {
	private data: BlockData;
	public block: SVGElement;

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
		this.block = create('rect');
		attr(this.block, 'width', this.data.width);
		attr(this.block, 'height', this.data.height);
		attr(this.block, 'fill', '#ffffff');
	}
}
