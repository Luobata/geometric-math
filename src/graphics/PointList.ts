/**
 * @description 点集
 */

import Graham from '@/algorithm/convex-hull/Graham';
import { IPoint, IPointList } from '@/lib/interface';
import Vector from '@/core/Vector';

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

    // 与x轴
    public sortByAngle(pointList: IPointList): IPointList {
        // 先找到y最小的点 一定是凸包上的一个点
        let minP: IPoint = pointList[0];

        for (let i: number = 1; i < pointList.length; i = i + 1) {
            if (pointList[i].y < minP.y) {
                minP = pointList[i];
            }
        }

        const list: IPointList = pointList.filter((v: IPoint) => {
            return v !== minP;
        });
        // 按照夹角大小排序
        list.sort(
            (a: IPoint, b: IPoint): number => {
                // cross 代表方向
                const l: number = new Vector({
                    x: a.x - minP.x,
                    y: a.y - minP.y,
                }).cross(
                    new Vector({
                        x: b.x - minP.x,
                        y: b.y - minP.y,
                    }),
                );

                if (!l) {
                    return a.x !== b.x
                        ? Math.abs(a.x - minP.x) - Math.abs(b.x - minP.x)
                        : b.y - a.y;
                } else {
                    return -l;
                }
            },
        );

        return [minP, ...list];
    }
}
