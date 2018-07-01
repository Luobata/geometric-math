/**
 * @description circular 相关算法入口
 */
import Vector from '@/core/Vector';
import { Round } from '@/lib/interface';

export default {
    // 判断两个圆是否相交
    intersection(r1: Round, r2: Round): boolean {
        return (
            new Vector({
                x: r2.center.x - r1.center.x,
                y: r2.center.y - r1.center.y,
            }).mod() <
            r1.radius + r2.radius
        );
    },
};
