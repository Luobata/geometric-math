/**
 * @description 多边形 不包括ellipsis
 */
import Vector from '@/core/Vector';
import { IPoint, IPointList } from 'LIB/interface';

export default class Polygon {
    private list: IPointList;
    // 各个边向量
    private listVector: Vector[] = [];

    // list中点的顺序会导致点绘制的顺序，会影响是否是凸包的判断
    constructor(list: IPointList) {
        if (list.length < 3) {
            throw new Error('The IPoint num must > 3 to close a polygon');
        }
        this.list = list;

        this.vectorInit();
    }

    // 因为是顺时针绘制 判断每一步是不是构成了一个右拐/左拐
    public isConvexHull(): boolean {
        const dir: boolean = this.listVector[0].cross(this.listVector[1]) < 0;
        for (let i: number = 1; i < this.listVector.length - 1; i = i + 1) {
            if (this.listVector[i].cross(this.listVector[i + 1]) < 0 !== dir) {
                return false;
            }
        }

        return (
            this.listVector[this.listVector.length - 1].cross(
                this.listVector[0],
            ) <
                0 ===
            dir
        );
    }

    /**
     * 返回多边形的所有投影轴
     */
    public getAxes(): Vector[] {
        return this.listVector.map((v: Vector) => {
            return v.vertical();
        });
    }

    /**
     * 返回某条轴上的投影
     * @param axes 对应的投影轴
     */
    public getProject(axes: Vector): number[] {
        return this.list.map((v: IPoint) => {
            return new Vector(v).dot(axes);
        });
    }

    private vectorInit(): void {
        for (let i: number = 0; i < this.list.length - 1; i = i + 1) {
            this.listVector.push(
                new Vector(this.list[i + 1]).minus(new Vector(this.list[i])),
            );
        }

        // this.listVector.push(
        //     new Vector(this.list[this.list.length - 1]).minus(
        //         new Vector(this.list[0]),
        //     ),
        // );
        this.listVector.push(
            new Vector(this.list[0]).minus(
                new Vector(this.list[this.list.length - 1]),
            ),
        );
    }
}
