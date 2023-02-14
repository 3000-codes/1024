import { forwardRef, useMemo, useCallback, useEffect, Component, ReactNode, ComponentType } from "react";
interface InnerProps {
  model?: unknown;
  name?: string;
  value?: unknown;
  onChange?: (e: unknown) => void;
  [key: string]: unknown;
}
interface withModel {
  (component: ComponentType): Component;
}
const withModel = (Component: ComponentType) => forwardRef<
  unknown,
  InnerProps
>(({
  model = [],
  name,
  value,
  onChange,
  ...other
}, outerRef) => {
  const [modelValue, setModelValue] = useMemo(() => model, [model])

  const handleChange = useCallback((e: Event) => {
    if (setModelValue) {
      setModelValue((e.target as HTMLInputElement).value)
    }

    onChange?.(e)
  }, [onChange])

  return (
    Component ? <Component
      {...other}
      ref={outerRef}
      name={name}
      value={modelValue !== undefined ? modelValue : value}
      onChange={handleChange}
    /> : null
  )
})


export default withModel;