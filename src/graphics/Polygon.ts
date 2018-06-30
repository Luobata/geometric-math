/**
 * @description 多边形 不包括ellipsis
 */
import Vector from '@/core/Vector';
import { Point, PointList } from 'LIB/interface';

export default class Polygon {
    private list: PointList;
    // 各个边向量
    private listVector: Vector[] = [];

    constructor(list: PointList) {
        this.list = list;

        this.vectorInit();
    }

    public isConvexHull(): boolean {
        return true;
    }

    /**
     * 返回多边形的所有投影轴
     */
    public getAxes(): Vector[] {
        return this.listVector.map((v: Vector) => {
            return v.normaliz();
        });
    }

    /**
     * 返回某条轴上的投影
     * @param axes 对应的投影轴
     */
    public getProject(axes: Vector) {
        // TODO
    }

    private vectorInit(): void {
        for (let i: number = 0; i < this.list.length - 1; i = i + 1) {
            this.listVector.push(
                new Vector(this.list[i + 1]).minus(new Vector(this.list[i])),
            );
        }

        this.listVector.push(
            new Vector(this.list[this.list.length - 1]).minus(
                new Vector(this.list[0]),
            ),
        );
    }
}
