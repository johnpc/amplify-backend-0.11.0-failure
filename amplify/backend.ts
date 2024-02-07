import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { exampleFunction } from './function/resource';

defineBackend({
  auth,
  data,
  exampleFunction,
});
