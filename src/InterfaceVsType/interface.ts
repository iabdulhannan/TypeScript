export interface Point2D {
  x: number;
  y: number;
}

export interface Point3D extends Point2D {
  z: number;
}

export const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

export class Example implements Point3D {
  x = 0;
  y = 0;
  z = 0;
}


/*
* Declaration Merging
* */

// Express Base
export interface Request {
  body: any;
}

// Express JSON
export interface Request {
  json: any;
}

function handleRequest(req: Request) {
  req.body;
  req.json;
}
