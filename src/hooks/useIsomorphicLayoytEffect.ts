import {useLayoutEffect, useEffect} from 'react'

import {isBrowser} from 'utils/is-browser'

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

export {useIsomorphicLayoutEffect}
