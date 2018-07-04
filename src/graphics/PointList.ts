/**
 * @description 点集
 */

import Graham from '@/algorithm/convex-hull/Graham';
import { IPoint, IPointList } from '@/lib/interface';

export default class PointList {
    // 点集 并且按夹角排序
    public pointList: IPointList;

    constructor(pointList: IPointList) {
        this.pointList = pointList;
    }

    public getConvexHull(): IPointList {
        if (this.pointList.length < 3) {
            throw new Error('凸包的点个数不能小于3个');
        }

        return Graham(this.sortByAngle(this.pointList));
    }

    // 与x周
    public sortByAngle(pointList: IPointList): IPointList {
        // 先找到最小的点
        let minP: IPoint = pointList[0];
        for (let i: number = 1; i < pointList.length; i++) {
            if (pointList[i].y < minP.y) {
                minP = pointList[i];
            }
        }

        return [];
    }
}
