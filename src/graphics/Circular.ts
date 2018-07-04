/**
 * @description 圆形/椭圆形
 */

import Vector from '@/core/Vector';
import { IPoint, IPointList, Round } from '@/lib/interface';

export default class Circular {
    public center: IPoint;
    public radius: number;
    public radiusX: number;
    public radiusY: number;

    constructor(round: Round) {
        this.center = round.center;
        this.radiusX = this.radiusY = round.radius;
        this.radius = round.radius;
    }

    public getAxes(IPointList: IPointList): Vector {
        let length!: number;
        let p: IPoint;
        for (const i of IPointList) {
            const tL: number = new Vector({
                x: i.x - this.center.x,
                y: i.y - this.center.y,
            }).mod(false);
            if (!length || tL < length) {
                length = tL;
                p = i;
            }
        }

        return new Vector({
            x: p.x - this.center.x,
            y: p.y - this.center.y,
        }).normaliz();
    }

    public getProject(axes: Vector): number {
        return new Vector({
            x: this.center.x,
            y: this.center.y,
        }).dot(axes);
    }
}
