/**
 * @description method 入口
 */

import Vector from '@/core/Vector';
import Polygon from '@/graphics/Polygon';
import { Point, PointList } from 'LIB/interface';

export default {
    intersection(p1: PointList, p2: PointList): boolean {
        // 创建两个图形
        const point1: Polygon = new Polygon(p1);
        const point2: Polygon = new Polygon(p2);

        const p1Axes: Vector[] = point1.getAxes();
        const p2Axes: Vector[] = point2.getAxes();

        return true;
    },
};
