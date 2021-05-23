import { Errors } from './Errors';


export interface SubmitResult {
  success: boolean;
  errors?: Errors;
}
