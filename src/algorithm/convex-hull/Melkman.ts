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

    const judge: Function = (a: IPoint): boolean => {
        const lastH: Vector = new Vector({
            x: stackH[stackH.length - 1].x - stackH[stackH.length - 2].x,
            y: stackH[stackH.length - 1].y - stackH[stackH.length - 2].y,
        });
        const nowH: Vector = new Vector({
            x: a.x - stackH[stackH.length - 1].x,
            y: a.y - stackH[stackH.length - 1].y,
        });

        const lastT: Vector = new Vector({
            x: stackT[stackT.length - 1].x - stackT[stackT.length - 2].x,
            y: stackT[stackT.length - 1].y - stackT[stackT.length - 2].y,
        });
        const nowT: Vector = new Vector({
            x: a.x - stackT[stackT.length - 1].x,
            y: a.y - stackT[stackT.length - 1].y,
        });

        return nowH.cross(lastH) * nowT.cross(lastH) >= 0;
    };
    // tslint:disable-next-line prefer-for-of
    for (let i: number = 2; i < l.length - 1; i = i + 1) {
        if (judge(l[i])) {
            // stackH.push(l[i]);
        }
    }

    return [...stackH, l[l.length - 1]];
};
