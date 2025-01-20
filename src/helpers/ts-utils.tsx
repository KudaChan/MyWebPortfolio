import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react'

/**
 * Allows using a TS v4 labeled tuple even with older typescript versions
 */
export type NamedArrayTuple<T extends (...args: number[]) => number> = Parameters<T>

/**
 * Utility type to declare the type of a `forwardRef` component so that the type is not "evaluated" in the declaration
 * file.
 */
export type ForwardRefComponent<P, T> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>