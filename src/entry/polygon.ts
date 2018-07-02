/**
 * @description method 入口
 */

import Vector from '@/core/Vector';
import Circular from '@/graphics/Circular';
import Polygon from '@/graphics/Polygon';
import { PointList, Round } from 'LIB/interface';

export default {
    // 判断两个多边形是否相交
    intersection(p1: PointList, p2: PointList): boolean {
        // 创建两个图形
        const point1: Polygon = new Polygon(p1);
        const point2: Polygon = new Polygon(p2);

        if (!point1.isConvexHull() || !point2.isConvexHull()) {
            debugger;
            // 不是闭包 不能使用该方法判断
            return false;
        }

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
                break;
            }
        }

        return flag;
    },
    // 判断多边形与圆形是否相交
    intersectionWithCircular(p1: PointList, p2: Round): boolean {
        const point1: Polygon = new Polygon(p1);
        const circular2: Circular = new Circular(p2);

        if (!point1.isConvexHull()) {
            debugger;
            // 不是闭包 不能使用该方法判断
            return false;
        }

        const p1Axes: Vector[] = point1.getAxes();
        const cAxex: Vector = circular2.getAxes(p1);

        const axes: Vector[] = p1Axes.concat(cAxex);
        let flag: boolean = true;

        // tslint:disable-next-line prefer-for-of
        for (let i: number = 0; i < axes.length; i = i + 1) {
            const v: Vector = axes[i];
            const pj1: number[] = point1.getProject(v);
            const pj2: number = circular2.getProject(v);
            const max1: number = Math.max(...pj1);
            const min1: number = Math.min(...pj1);
            const max2: number = pj2 + circular2.radius;
            const min2: number = pj2 - circular2.radius;

            if (!(max1 > min2 && max2 > min1)) {
                flag = false;
                break;
            }
        }

        return flag;
    },
};
