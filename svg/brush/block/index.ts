import { BlockData } from '../../types/block';
import { append, attr, create } from 'tiny-svg';

/**
 * 绘制svg块
 */
export default class Block {
	public container: SVGElement;
	public block: SVGElement; // svg容器
	private data: BlockData; // 设计数据

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
		this.container = create('g');
		this.block = create('rect');
		attr(this.block, 'width', this.data.width);
		attr(this.block, 'height', this.data.height);
		attr(this.block, 'x', this.data.x);
		attr(this.block, 'y', this.data.y);
		attr(this.block, 'fill', '#ffffff');
		append(this.container, this.block);
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
