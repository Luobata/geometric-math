/**
 * @description Point 相关算法
 */

import innerPolygon from '@/algorithm/point-inner-polygon';
import Polygon from '@/graphics/Polygon';
import { IPoint } from '@/lib/interface';

export default class Point {
    public point: IPoint;

    constructor(point: IPoint) {
        this.point = point;
    }

    // 点是否在多边形内算法
    public innerPolygon(polygon: Polygon): boolean {
        return innerPolygon(this.point, polygon);
    }
}
