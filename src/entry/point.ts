/**
 * @description IPoint 相关的算法入口
 */

import PointList from '@/graphics/PointList';
import { IPointList } from '@/lib/interface';

export default {
    // 返回包含点集的最大凸包
    findConvexHull(list: IPointList): IPointList {
        const p: PointList = new PointList(list);

        return p.getConvexHull();
    },
};
