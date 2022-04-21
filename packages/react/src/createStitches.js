import React from 'react'
import { createStitches as createStitchesCore } from '../../core/src/createStitches.js'
import { createStyledFunction } from './features/styled.js'

// Always use a deferred injector with React 18+ (in browser)
const supportsInsertionEffects = typeof window !== 'undefined' && typeof React.useInsertionEffect === 'function'

// prettier-ignore
const useGlobalCss = supportsInsertionEffects
	? (css) => { React.useInsertionEffect(css) }
	: (css) => { React.useLayoutEffect(css, []) }

export const createStitches = (init) => {
	const instance = createStitchesCore(init, /* alwaysDeferred */ supportsInsertionEffects)

	instance.styled = createStyledFunction(instance, supportsInsertionEffects)
	instance.useGlobalCss = useGlobalCss

	return instance
}
