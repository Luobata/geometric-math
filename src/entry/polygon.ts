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
        const axes: Vector[] = p1Axes.concat(p2Axes);
        let flag: boolean = true;

        // tslint:disable-next-line prefer-for-of
        for (let i: number = 0; i < axes.length; i = i + 1) {
            const v: Vector = axes[i];
            const max1: number = Math.max(...point1.getProject(v));
            const min1: number = Math.min(...point1.getProject(v));
            const max2: number = Math.max(...point2.getProject(v));
            const min2: number = Math.min(...point2.getProject(v));

            if (!(max1 > min2 && max2 > min1)) {
                flag = false;
                debugger;
                break;
            }
        }

        return flag;
    },
};
