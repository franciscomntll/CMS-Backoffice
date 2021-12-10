// @ts-ignore
import {
  FC,
  forwardRef,
  MutableRefObject,
  Ref,
  useEffect,
  useRef,
} from "react";


interface propsCheckBox {
  ref: HTMLInputElement;
  indeterminate: boolean;
  name: string;
}

const useCombinedRefs = (
  ...refs: Array<Ref<HTMLInputElement> | MutableRefObject<null>>
): MutableRefObject<HTMLInputElement | null> => {
    
  const targetRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    refs.forEach((ref: Ref<HTMLInputElement> | MutableRefObject<null>) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        //@ts-ignore
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export const IndeterminateCheckbox: FC<any> = forwardRef<
  HTMLInputElement,
  propsCheckBox
>(({ indeterminate, ...rest }, ref: React.Ref<HTMLInputElement>) => {
  const defaultRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, defaultRef);

  useEffect(() => {
    if (combinedRef?.current) {
      combinedRef.current.indeterminate = indeterminate ?? false;
    }
  }, [combinedRef, indeterminate]);

  return (
    <>
      <label className="inline-flex items-center text-sm w-max h-max">
        <input
          className="text-blue-500 w-5 h-5 mr-2 focus:ring-blue-400 focus:ring-opacity-25 rounded-md border border-gray-400 transition "
          type="checkbox"
          {...rest}
          ref={combinedRef}
        />
      </label>
    </>
  );
});
