/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetstoreCreateFormInputValues = {
    Name?: string;
    Age?: number;
    About?: string;
    Breed?: string;
    Colour?: string;
    Image?: string;
};
export declare type PetstoreCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    About?: ValidationFunction<string>;
    Breed?: ValidationFunction<string>;
    Colour?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetstoreCreateFormOverridesProps = {
    PetstoreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    About?: PrimitiveOverrideProps<TextFieldProps>;
    Breed?: PrimitiveOverrideProps<TextFieldProps>;
    Colour?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetstoreCreateFormProps = React.PropsWithChildren<{
    overrides?: PetstoreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PetstoreCreateFormInputValues) => PetstoreCreateFormInputValues;
    onSuccess?: (fields: PetstoreCreateFormInputValues) => void;
    onError?: (fields: PetstoreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PetstoreCreateFormInputValues) => PetstoreCreateFormInputValues;
    onValidate?: PetstoreCreateFormValidationValues;
} & React.CSSProperties>;
export default function PetstoreCreateForm(props: PetstoreCreateFormProps): React.ReactElement;
