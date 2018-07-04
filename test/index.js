/* eslint-disable */
import geometric from '../src/';

window.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = 500;
    const height = 500;
    const pixelRatio = window.devicePixelRatio;

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    canvas.style.margin = '200px 0 0 200px';

    document.body.appendChild(canvas);

    // const g1 = [{ x: 10, y: 10 }, { x: 200, y: 10 }, { x: 150, y: 150 }];
    const g1 = [
        { x: 50, y: 10 },
        { x: 200, y: 10 },
        { x: 150, y: 110 },
        { x: 125, y: 160 },
    ];
    // const g1 = [{ x: 150, y: 150 }, { x: 200, y: 10 }, { x: 10, y: 10 }];
    const g2 = [{ x: 300, y: 100 }, { x: 200, y: 50 }, { x: 500, y: 150 }];
    const k = 4;
    const g3 = [];
    for (let i = 1; i < k; i++) {
        for (let j = 1; j < k; j++) {
            g3.push({
                x: 10 * i,
                y: 10 * j,
            });
        }
    }
    console.log(g3);
    const c1 = {
        center: {
            x: 200,
            y: 200,
        },
        radius: 100,
    };
    const c2 = {
        center: {
            x: 10,
            y: 200,
        },
        radius: 80,
    };

    const renderIPoint = (p, color = 'black') => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.moveTo(p[0].x * pixelRatio, p[0].y * pixelRatio);
        for (let i = 1; i < p.length; i++) {
            const item = p[i];
            ctx.lineTo(item.x * pixelRatio, item.y * pixelRatio);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    };

    const renderCirculr = (r, color = 'black') => {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.ellipse(
            r.center.x * pixelRatio,
            r.center.y * pixelRatio,
            r.radius * pixelRatio,
            r.radius * pixelRatio,
            0,
            0,
            2 * Math.PI,
        );
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    };

    const render = () => {
        renderIPoint(g1);
        renderIPoint(g2, 'red');
        renderCirculr(c1);
        renderCirculr(c2);
    };

    render();
    const a = geometric.polygon.intersection(g1, g2);
    const b = geometric.polygon.intersectionWithCircular(g1, c1);
    const c = geometric.polygon.intersectionWithCircular(g2, c1);
    const d = geometric.circluar.intersection(c1, c2);
    const f = geometric.point.findConvexHull(g3);
    console.log(`a： ${a}`);
    console.log(`b： ${b}`);
    console.log(`c： ${c}`);
    console.log(`d： ${d}`);
    console.log(`f： ${f}`);
};
