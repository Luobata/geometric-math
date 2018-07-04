/**
 * @description 点集
 */

import { IPointList } from '@/lib/interface';

export default class PointList {
    public pointList: IPointList;

    constructor(pointList: IPointList) {
        this.pointList = this.sortByAngle(pointList);
    }

    public getConvexHull(): IPointList {
        return [];
    }

    public sortByAngle(pointList: IPointList): IPointList {
        return [];
    }
}
