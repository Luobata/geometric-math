/**
 * @description IPoint 相关的算法入口
 */

import Point from '@/graphics/Point';
import PointList from '@/graphics/PointList';
import Polygon from '@/graphics/Polygon';
import { IPoint, IPointList } from '@/lib/interface';

export default {
    // 返回包含点集的最大凸包
    findConvexHull(list: IPointList): IPointList {
        const p: PointList = new PointList(list);

        return p.getConvexHull();
    },
    innerPloymer(p: IPoint, list: IPointList): boolean {
        const point: Point = new Point(p);
        const polygon: Polygon = new Polygon(list);

        return point.innerPolygon(polygon);
    },
};
