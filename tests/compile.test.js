import test from 'ava';
import { local } from '../src/compile.mjs';

test('local', t => {
    t.truthy(local());
}); 
