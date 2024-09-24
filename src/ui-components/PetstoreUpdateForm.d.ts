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
export declare type PetstoreUpdateFormInputValues = {
    Name?: string;
    Age?: number;
    About?: string;
    Breed?: string;
    Colour?: string;
    Image?: string;
};
export declare type PetstoreUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Age?: ValidationFunction<number>;
    About?: ValidationFunction<string>;
    Breed?: ValidationFunction<string>;
    Colour?: ValidationFunction<string>;
    Image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetstoreUpdateFormOverridesProps = {
    PetstoreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Age?: PrimitiveOverrideProps<TextFieldProps>;
    About?: PrimitiveOverrideProps<TextFieldProps>;
    Breed?: PrimitiveOverrideProps<TextFieldProps>;
    Colour?: PrimitiveOverrideProps<TextFieldProps>;
    Image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetstoreUpdateFormProps = React.PropsWithChildren<{
    overrides?: PetstoreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    petstore?: any;
    onSubmit?: (fields: PetstoreUpdateFormInputValues) => PetstoreUpdateFormInputValues;
    onSuccess?: (fields: PetstoreUpdateFormInputValues) => void;
    onError?: (fields: PetstoreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PetstoreUpdateFormInputValues) => PetstoreUpdateFormInputValues;
    onValidate?: PetstoreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PetstoreUpdateForm(props: PetstoreUpdateFormProps): React.ReactElement;
