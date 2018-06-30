/**
 * @description method 入口
 */

import Polygon from '@/graphics/Polygon';
import { Point, PointList } from 'LIB/interface';

export default {
    intersection(p1: PointList, p2: PointList): boolean {
        const point1: Polygon = new Polygon(p1);
        const point2: Polygon = new Polygon(p2);

        return true;
    },
};
