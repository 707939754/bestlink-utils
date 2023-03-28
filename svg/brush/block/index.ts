import {BlockData} from '../../types/block';
import {attr, create} from 'tiny-svg';

/**
 * 绘制svg块
 */
export default class Block {
	private data: BlockData; // 设计数据
	public block: SVGElement; // svg容器

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
		attr(this.block, 'x', this.data.x);
		attr(this.block, 'y', this.data.y);
		attr(this.block, 'fill', '#ffffff');
		// 	增加监听器
		this.block.addEventListener('click', (ev: MouseEvent) => this.appendBorder(ev));
	}

	/**
	 * 拼接外边框
	 * @param ev
	 */
	appendBorder(ev: MouseEvent) {}

	/**
	 * 移除外边框
	 */
	removeBorder(ev: MouseEvent) {}

	removeClick() {
		this.block.removeEventListener('click', (ev: MouseEvent) => this.removeBorder(ev));
	}
}
