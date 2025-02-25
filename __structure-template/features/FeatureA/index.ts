/** Export { default as ... } components first */
export { default as SomeComponent } from './SomeComponent.tsx';
export { default as AnotherComponent } from './AnotherComponent.tsx';

/** Export * from hooks/api/etc. second */
export * from './FeatureA.hooks';
export * from './FeatureA.api';
export * from './FeatureA.utils';
