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

    const xAxis =
      dragProps.current.dragStartLeft +
      clientX -
      (dragProps.current.dragStartX - 50);
    const yAxis =
      dragProps.current.dragStartTop +
      clientY -
      (dragProps.current.dragStartY + 20);

    elemRef.current.style.left = `${xAxis}px`;

    if (yAxis <= 0) elemRef.current.style.top = "0px";
    else elemRef.current.style.top = `${yAxis}px`;
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", startDragging, false);
    window.removeEventListener("mouseup", stopDragging, false);
  };

  return { setRef, initialiseDrag };
};

export default useDrag;
