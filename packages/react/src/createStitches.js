import React from 'react'
import { createStitches as createStitchesCore } from '../../core/src/createStitches.js'
import { createStyledFunction } from './features/styled.js'

// Always use a deferred injector with React 18+ (in browser)
const alwaysDeferred = typeof window !== 'undefined' && typeof React.useInsertionEffect === 'function'

export const createStitches = (init) => {
	const instance = createStitchesCore(init, alwaysDeferred)

	instance.styled = createStyledFunction(instance, /* supportsInsertionEffects */ alwaysDeferred)

	return instance
}
