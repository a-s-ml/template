import { useEffect } from 'react';

type FunctionProps = () => void;

export const useBackButton = (state: boolean, onSubmit: FunctionProps) => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    if (state) {
      tg.BackButton.show()
      tg.onEvent('backButtonClicked', (tg.MainButton.hide(), onSubmit))
    } else { tg.BackButton.hide() }
    return () => {
      tg.BackButton.hide()
      tg.offEvent('backButtonClicked', (tg.MainButton.hide(), onSubmit))
    }
  }, [state]);
};
