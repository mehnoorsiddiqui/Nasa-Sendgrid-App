/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

export interface LunarJ2000Position {
  x: number;
  y: number;
  z: number;
}

export const lunarJ2000PositionSchema: Schema<LunarJ2000Position> = object({
  x: ['x', number()],
  y: ['y', number()],
  z: ['z', number()],
});
