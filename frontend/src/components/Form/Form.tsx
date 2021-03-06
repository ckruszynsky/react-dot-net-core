import { FC, createContext, FormEvent } from 'react';
import { PrimaryButton, gray5, gray6 } from '../../assets/styles';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Values } from './Values';
import { Errors } from './Errors';
import { Touched } from './Touched';
import { SubmitResult } from './SubmitResult';
import { Validation } from './Validation';
import { ValidationProp } from './ValidationProp';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearValues, selectErrors, selectSubmitError, selectSubmitted, selectSubmitting, selectTouched, selectValues, setErrors, setSubmitError, setSubmitted, setSubmitting, setTouched, setValues } from './formslice';

interface Props {
  submitCaption?: string;
  validationRules?: ValidationProp;
  onSubmit: (values: Values) => Promise<SubmitResult> | void;
  submitResult?: SubmitResult;
  successMessage?: string;
  failureMessage?: string;
}

interface FormContextProps {
  values: Values;
  setValue?: (fieldName: string, value: any) => void;
  errors: Errors;
  validate?: (fieldName: string) => void;
  touched: Touched;
  setTouched?: (fieldName: string) => void;
}

export const FormContext = createContext<FormContextProps>({
  values: {},
  errors: {},
  touched: {},
});

export const Form: FC<Props> = ({
  submitCaption,
  children,
  validationRules,
  onSubmit,
  submitResult,
  successMessage = 'Success !',
  failureMessage = 'Something went wrong',
}) => {
  const values = useAppSelector(selectValues);
  const errors = useAppSelector(selectErrors);
  const touched = useAppSelector(selectTouched);
  const submitting = useAppSelector(selectSubmitting);
  const submitted = useAppSelector(selectSubmitted);
  const submitError = useAppSelector(selectSubmitError);
  const dispatch = useAppDispatch();
  
  const validate = (fieldName: string): string[] => {
    if (!validationRules) {
      return [];
    }
    if (!validationRules[fieldName]) {
      return [];
    }
    const rules = Array.isArray(validationRules[fieldName])
      ? (validationRules[fieldName] as Validation[])
      : ([validationRules[fieldName]] as Validation[]);

    const fieldErrors: string[] = [];

    rules.forEach((rule) => {
      const error = rule.validator(values[fieldName], rule.arg);
      if (error) {
        fieldErrors.push(error);
      }
    });

    const newErrors = { ...errors, [fieldName]: fieldErrors };
    dispatch(setErrors(newErrors));    
    return fieldErrors;
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    let haveError: boolean = false;
    if (validationRules) {
      Object.keys(validationRules).forEach((fieldName) => {
        newErrors[fieldName] = validate(fieldName);
        if (newErrors[fieldName].length > 0) {
          haveError = true;
        }
      });
    }
    dispatch(setErrors(newErrors));
    return !haveError;
  };

  const disabled = submitResult ? submitResult.success : submitting || (submitted && !submitError);

  const showError = submitResult ? !submitResult.success : submitted && submitError;

  const showSuccess = submitResult ? submitResult.success : submitted && !submitError;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setSubmitting(true))
      dispatch(setSubmitError(false));

      const result = await onSubmit(values);

      //the result may be pass through as prop
      if (result === undefined) {
        return;
      }

      dispatch(setErrors(result.errors || {}));
      dispatch(setSubmitError(!result.success));
      dispatch(setSubmitting(false));
      dispatch(setSubmitted(false));
      dispatch(clearValues());
    }
  };

  return (
    <FormContext.Provider
      value={{
        values,
        setValue: (fieldName: string, value: any) => {                   
          dispatch(setValues({ fieldName, value}));
        },
        errors,
        validate,
        touched,
        setTouched: (fieldName: string) => {     
          dispatch(setTouched({...touched, [fieldName]: true}));
        },
      }}
    >
      <form noValidate={true} onSubmit={handleSubmit}>
        <fieldset
          css={css`
            margin: 10px auto 0 auto;                        
            background-color: ${gray6};
            border-radius: 4px;
            border: 1px solid ${gray5};
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
          `}
          disabled={disabled}
        >
          {children}
          <div
            css={css`
              margin: 30px 0px 0px 0px;
              padding: 20px 0px 0px 0px;
              border-top: 1px solid ${gray5};
            `}
          >
            <PrimaryButton type="submit">{submitCaption}</PrimaryButton>
          </div>
          {showError && (
            <p
              css={css`
                color: red;
              `}
            >
              {failureMessage}
            </p>
          )}
          {showSuccess && (
            <p
              css={css`
                color: green;
              `}
            >
              {successMessage}
            </p>
          )}
        </fieldset>
      </form>
    </FormContext.Provider>
  );
};
