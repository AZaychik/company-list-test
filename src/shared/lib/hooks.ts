import { RefObject, useEffect, useMemo, useState } from "react";
import { AppDispatch, RootState } from "@app/store";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";

/** Typed `useDispatch` hook. */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/** Обертка, чтобы каждый раз не вызывать dispatch c нужным action.  */
export const useActionCreators = <Actions extends ActionCreatorsMapObject>(actions: Actions) => {
  const dispatch = useAppDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

/**
 * Intersection observer hook https://usehooks-ts.com/react-hook/use-intersection-observer.
 * @param elementRef Element ref.
 * @param options Options.
 */
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = {}
): IntersectionObserverEntry | undefined {
  const { threshold = 0, root = null, rootMargin = "0%" } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin]);

  return entry;
}
