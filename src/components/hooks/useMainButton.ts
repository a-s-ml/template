import { useEffect } from 'react';

type FunctionProps = () => void;

export const useMainButton = (state: boolean, text: string, onSubmit: FunctionProps) => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    if (state) {
      tg.MainButton.setParams({
        text: text,
      })
      tg.MainButton.show()
      tg.onEvent('mainButtonClicked', onSubmit)
    } else {
      tg.MainButton.hide();
    }
    return () => {
      tg.MainButton.hide();
      tg.offEvent('mainButtonClicked', onSubmit);
    };
  }, [state, onSubmit]);
};
