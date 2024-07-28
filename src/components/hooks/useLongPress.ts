import { useState, useRef } from 'react';

export default function useLongPress() {
  
  const [action, setAction] = useState('');

  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const isLongPress = useRef(false);

  function startPressTimer() {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      setAction('longpress');
    }, 500)
  }

  function handleOnClick(e: any) {
    e.preventDefault()
    // console.log('handleOnClick');
    if ( isLongPress.current ) {
      console.log('Is long press - not continuing.');
      return;
    }
    setAction('click')
  }

  function handleOnMouseDown() {
    // console.log('handleOnMouseDown');
    startPressTimer();
  }

  function handleOnMouseUp() {
    // console.log('handleOnMouseUp');
    clearTimeout(timerRef.current);
  }

  function handleOnTouchStart() {
    // console.log('handleOnTouchStart');
    startPressTimer();
  }

  function handleOnTouchEnd() {
    if ( action === 'longpress' ) return;
    // console.log('handleOnTouchEnd');
    clearTimeout(timerRef.current);
  }

  return {
    action,
    handlers: {
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onMouseUp: handleOnMouseUp,
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd
    }
  }
}

// const { action, handlers } = useLongPress();
// const { action: otherAction, handlers: otherHandlers } = useLongPress();

//         <Button {...handlers}>
//           Click or Press Me
//         </Button>
//         <Button data-color="gray" {...otherHandlers}>
//           Reset
//         </Button>

// <p className={styles.clickAction}>
// {!action && (
//   <>
//     <strong>Nothing</strong>
//     <img width="356" src="/images/fry-not-sure.jpg" />
//   </>
// )}

// {action === 'click' && (
//   <>
//     <strong>Click</strong>
//     <img width="356" src="/images/fry-celebrating.gif" />
//   </>
// )}

// {action === 'longpress' && (
//   <>
//     <strong>Long Press</strong>
//     <img width="356" src="/images/fry-dancing.gif" />
//   </>
// )}
// </p>