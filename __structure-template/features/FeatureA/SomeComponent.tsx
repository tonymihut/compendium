import { getSomething } from './FeatureA.api';
import { useThisHook } from './FeatureA.hooks';

/** Use default export, since it's a component*/
export default function SomeComponent() {
  getSomething();
  useThisHook();
}
