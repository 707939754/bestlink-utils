import {PortalSvgData, PortalSvgOptions} from './types';

/**
 * 二级门户引擎
 */
export default class PortalSvg {
	constructor(className: string, options?: PortalSvgOptions, data?: PortalSvgData) {
		const element = document.querySelector(className);
		if (!element) {
			throw new Error('do not get target element');
		}
		const { height, width } = getComputedStyle(element);
		this.createSvgContainer(element as HTMLElement, height, width);
	}

	/**
	 * 创建svg容器
	 * @param element
	 * @param height
	 * @param width
	 */
	createSvgContainer(element: HTMLElement, height: string, width: string) {
		const SvgNs = 'http://www.w3.org/2000/svg';
		const container = document.createElementNS(SvgNs, 'svg');
		container.setAttribute('height', height);
		container.setAttribute('width', width);
		element.appendChild(container);
	}

    /**
     * 创建轮播图块
     */
	createCarousel() {}
}
