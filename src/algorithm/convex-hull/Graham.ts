/**
 * @description Graham扫描法求点集的凸包
 * @time-complexity O(nlog(n))
 */

import Vector from '@/core/Vector';
import { IPoint, IPointList } from '@/lib/interface';

export default (l: IPointList): IPointList => {
    // 维护一个栈
    const stack: IPointList = [l[0], l[1]];

    const judge: Function = (a: IPoint): boolean => {
        const last: Vector = new Vector({
            x: stack[stack.length - 1].x - stack[stack.length - 2].x,
            y: stack[stack.length - 1].y - stack[stack.length - 2].y,
        });
        const now: Vector = new Vector({
            x: a.x - stack[stack.length - 1].x,
            y: a.y - stack[stack.length - 1].y,
        });

        return last.cross(now) >= 0;
    };

    // tslint:disable-next-line prefer-for-of
    for (let i: number = 2; i < l.length; i = i + 1) {
        while (stack.length > 2 && !judge(l[i])) {
            stack.pop();
        }
        stack.push(l[i]);
    }

    return stack;
};
