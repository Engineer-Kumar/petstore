import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPetstore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Petstore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Age: number;
  readonly About: string;
  readonly Breed: string;
  readonly Colour: string;
  readonly Image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPetstore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Petstore, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Age: number;
  readonly About: string;
  readonly Breed: string;
  readonly Colour: string;
  readonly Image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Petstore = LazyLoading extends LazyLoadingDisabled ? EagerPetstore : LazyPetstore

export declare const Petstore: (new (init: ModelInit<Petstore>) => Petstore) & {
  copyOf(source: Petstore, mutator: (draft: MutableModel<Petstore>) => MutableModel<Petstore> | void): Petstore;
}