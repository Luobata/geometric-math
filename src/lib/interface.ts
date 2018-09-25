/**
 * @description global interface & type;
 */

import { isArray } from 'util';

// tslint:disable interface-name

// 点
export interface IPoint {
    x: number;
    y: number;
}

// 点集合
export type IPointList = IPoint[];

// 圆
export interface Round {
    center: IPoint; // 圆心
    radius: number; // 半径
}

export interface Ellipse {
    circle: IPoint; // 圆心
    radiusX: number; // 半径X
    radiusY: number; // 半径Y
}

export function isIPoint(v: any): v is IPoint {
    return v.x !== undefined && v.y !== undefined;
}
