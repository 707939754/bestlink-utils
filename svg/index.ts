import {PortalSvgData, PortalSvgOptions} from './types';
import Block from './brush/block';
import {append, attr, create} from 'tiny-svg';

/**
 * 二级门户引擎
 */
export default class PortalSvg {
	private readonly mainContainer: HTMLElement; // 父容器
	private svgContainer: SVGElement; // 主容器

	constructor(className: string, options?: PortalSvgOptions, data?: PortalSvgData) {
		this.mainContainer = document.querySelector(className);
		if (!this.mainContainer) {
			throw new Error('do not get target element');
		}
		const { height, width } = getComputedStyle(this.mainContainer);
		this.createSvgContainer(height, width);
		this.createCarousel();
	}

	/**
	 * 创建svg容器
	 * @param height
	 * @param width
	 */
	createSvgContainer(height: string, width: string) {
		this.svgContainer = create('svg');
		attr(this.svgContainer, 'height', height);
		attr(this.svgContainer, 'width', width);
		append(this.mainContainer, this.svgContainer);
	}

	/**
	 * 创建轮播图块
	 */
	createCarousel() {
		const block = new Block({ x: 200, y: 0, height: 100, width: 100 });
		append(this.svgContainer, block.container);
	}
}
