

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);  // Передаємо лише затримку
      } else {
        reject(delay);    // Передаємо лише затримку
      }
    }, delay);
  });
};

const notify = (delay, state) => {
  const log = state === 'fulfilled' 
    ? `✅ Виконана обіцянка за ${delay}ms`
    : `❌ Відхилена обіцянка за ${delay}ms`;

  const toastMessage = state === 'fulfilled' 
    ? `Виконана обіцянка за ${delay} ms`
    : `Відхилена обіцянка за ${delay}ms`;

  console.log(log);
  
  state === 'fulfilled' 
    ? iziToast.success({ message: toastMessage, position: 'topRight' })
    : iziToast.error({ message: toastMessage, position: 'topRight' });
};

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const delayValue = Number(formData.get('delay'));
  const stateValue = formData.get('state');

  if (isNaN(delayValue) || delayValue < 0) {
    iziToast.error({ message: 'Будь ласка, введіть дійсну затримку', position: 'topRight' });
    return;
  }
  if (!['fulfilled', 'rejected'].includes(stateValue)) {
    iziToast.error({ message: 'Стан повинен бути або "fulfilled", або "rejected"', position: 'topRight' });
    return;
  }

  createPromise(delayValue, stateValue)
    .then(() => {
      notify(delayValue, stateValue);
    })
    .catch(() => {
      notify(delayValue, stateValue);
    });

  form.reset();
}, false);
