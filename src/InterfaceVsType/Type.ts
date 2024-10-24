/*
* Extending Types is not naturally supported in type but can be achieved via intersection operator
* */

export type Point2D = {
  x: number,
  y: number
}

export type Point3D = Point2D & {
  z: number
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

// Aliasing a Primitive Type
type NewString = string
type InputType = string | number  //Unions are only supported by Type Aliases
