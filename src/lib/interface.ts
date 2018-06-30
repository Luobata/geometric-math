/**
 * @description global interface & type;
 */

// tslint:disable interface-name

// 点
export interface Point {
    x: number;
    y: number;
}

// 点集合
export type PointList = Point[];

// 圆
export interface Round {
    center: Point; // 圆心
    radius: number; // 半径
}

export interface Ellipse {
    circle: Point; // 圆心
    radiusX: number; // 半径X
    radiusY: number; // 半径Y
}
