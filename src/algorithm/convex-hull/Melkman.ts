/**
 * @description Melkman算法
 * @time-complexity O(nlog(n))
 */

import Vector from '@/core/Vector';
import { IPoint, IPointList } from '@/lib/interface';

export default (l: IPointList): IPointList => {
    // 头尾两个队列
    const stackH: IPointList = [l[0], l[1]];
    const stackT: IPointList = [l[0], l[l.length - 1]];

    // 判断点在多边形内部
    const inner: Function = (a: IPoint): boolean => {
        const lastH: Vector = new Vector({
            x: stackH[stackH.length - 1].x - stackH[stackH.length - 2].x,
            y: stackH[stackH.length - 1].y - stackH[stackH.length - 2].y,
        });
        const nowH: Vector = new Vector({
            x: a.x - stackH[stackH.length - 1].x,
            y: a.y - stackH[stackH.length - 1].y,
        });

        const nowT: Vector = new Vector({
            x: stackT[stackT.length - 2].x - stackT[stackT.length - 1].x,
            y: stackT[stackT.length - 2].y - stackT[stackT.length - 1].y,
        });
        const lastT: Vector = new Vector({
            x: stackT[stackT.length - 1].x - a.x,
            y: stackT[stackT.length - 1].y - a.y,
        });

        return !(nowH.cross(lastH) >= 0 || nowT.cross(lastT) >= 0);
    };

    const judge: Function = (
        stack: IPointList,
        a: IPoint,
        dir: number = 1,
    ): boolean => {
        let last: Vector;
        let now: Vector;
        if (dir) {
            last = new Vector({
                x: stack[stack.length - 1].x - stack[stack.length - 2].x,
                y: stack[stack.length - 1].y - stack[stack.length - 2].y,
            });
            now = new Vector({
                x: a.x - stack[stack.length - 1].x,
                y: a.y - stack[stack.length - 1].y,
            });
        } else {
            now = new Vector({
                x: stack[stack.length - 2].x - stack[stack.length - 1].x,
                y: stack[stack.length - 2].y - stack[stack.length - 1].y,
            });
            last = new Vector({
                x: stack[stack.length - 1].x - a.x,
                y: stack[stack.length - 1].y - a.y,
            });
        }
        const result: number = last.cross(now) * dir;

        if (result === 0) {
            return last.dot(now) >= 0;
        } else {
            return result > 0;
        }
    };
    // tslint:disable-next-line prefer-for-of
    for (let i: number = 2; i < l.length - 1; i = i + 1) {
        // 不在闭合内 即有一个不是左拐了
        if (!inner(l[i])) {
            // 直到左拐为止
            while (stackH.length > 2 && !judge(stackH, l[i])) {
                stackH.pop();
            }
            stackH.push(l[i]);
            while (stackT.length > 2 && !judge(stackT, l[i], -1)) {
                stackT.pop();
            }
            stackT.push(l[i]);
        }
    }
    console.log(stackH);
    console.log(stackT);

    return stackH.concat(stackT);
};
