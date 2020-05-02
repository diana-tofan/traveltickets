const doc = document.body;
const docWidth = window.innerWidth;
const docHeight = window.innerHeight;
const aspectRatio = docHeight / docWidth;

const app = new PIXI.Application({width: docWidth, height: docHeight, backgroundColor: 0xffffff, antialias: true, autodensity: true, resolution: 2});

const { view, renderer } = app;

doc.style.margin = 0;
view.style.position = 'absolute';

doc.appendChild(view);

const radius = 60;

circle = new PIXI.Graphics();
circle.filters = [new PIXI.filters.BlurFilter(radius / 1.5, radius / 6, 1)];
circle.beginFill(0xff7f50);
circle.drawCircle(radius, radius, radius);
circle.endFill();
app.stage.addChild(circle);

renderer.render(app.stage); //
