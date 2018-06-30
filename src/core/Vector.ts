/**
 * @description Vector
 */
import { Point } from '@/lib/interface';

/**
 * default class Vector
 */
export default class Vector {
    public vector: Point;

    constructor(vector: Point) {
        this.vector = vector;
    }

    // 向量加
    public add(vec: Vector): Vector {
        return new Vector({
            x: this.vector.x + vec.vector.x,
            y: this.vector.y + vec.vector.y,
        });
    }

    // 向量减
    public minus(vec: Vector): Vector {
        return new Vector({
            x: this.vector.x - vec.vector.x,
            y: this.vector.y - vec.vector.y,
        });
    }

    // 向量点积
    public dot(vec: Vector): number {
        return this.vector.x * vec.vector.x + this.vector.y * vec.vector.y;
    }

    // 向量叉积
    public cross(vec: Vector): number {
        return this.vector.x * vec.vector.y - this.vector.y * vec.vector.x;
    }

    // 向量模
    public mod(): number {
        return Math.sqrt(
            Math.pow(this.vector.x, 2) + Math.pow(this.vector.y, 2),
        );
    }

    // 向量之间夹角
    public ankle(vec: Vector): number {
        const result: number =
            (Math.acos(this.dot(vec) / (this.mod() * vec.mod())) * 180) /
            Math.PI;

        return result > 180 ? result - 180 : result;
    }

    // 转化为法向量
    public normaliz(): Vector {
        const x: number = Math.sqrt(
            1 / (Math.pow(this.vector.y, 2) / Math.pow(this.vector.x, 2) + 1),
        );

        return {
            x,
            y: (this.vector.y / this.vector.x) * x,
        };
    }
}
