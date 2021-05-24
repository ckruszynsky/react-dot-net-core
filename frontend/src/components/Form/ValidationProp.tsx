import { Validation } from './Validation';

export interface ValidationProp {
  [key: string]: Validation | Validation[];
}
