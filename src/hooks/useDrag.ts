import { useEffect, useState, useRef } from "react";

const useDrag = () => {
  const elemRef = useRef<any>(null);
  const dragProps = useRef<any>();

  const [ref, setRef] = useState<any>(null);

  useEffect(() => {
    if (ref) {
      dragProps.current = ref;
      elemRef.current = ref;
    }
  }, [ref]);

  const initialiseDrag = (event: any) => {
    const { target, clientX, clientY } = event;
    const { offsetTop, offsetLeft } = target;
    const { left, top } = elemRef.current.getBoundingClientRect();

    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY,
    };

    window.addEventListener("mousemove", startDragging, false);
    window.addEventListener("mouseup", stopDragging, false);
  };

  const startDragging = ({ clientX, clientY }: any) => {
    // elemRef.current.style.transform = `translate(${
    //   dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX
    // }px, ${
    //   dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY
    // }px)`;
    elemRef.current.style.left = `${
      dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX
    }px`;

    elemRef.current.style.top = `${
      dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY
    }px`;
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", startDragging, false);
    window.removeEventListener("mouseup", stopDragging, false);
  };

  return { setRef, initialiseDrag };
};

export default useDrag;
