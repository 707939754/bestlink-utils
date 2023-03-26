import { PortalSvgData, PortalSvgOptions } from './types';
import Block from './brush/block';

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
		const svgNs = 'http://www.w3.org/2000/svg';
		this.svgContainer = document.createElementNS(svgNs, 'svg');
		this.svgContainer.setAttribute('xmlns', svgNs);
		this.svgContainer.setAttribute('height', height);
		this.svgContainer.setAttribute('width', width);
		this.mainContainer.appendChild(this.svgContainer);
	}

	/**
	 * 创建轮播图块
	 */
	createCarousel() {
		const block = new Block({ x: 0, y: 0, height: 100, width: 100 });
		this.svgContainer.appendChild(block.container);
	}
}
