import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        return resolve({
          log: `✅ Fulfilled promise in ${delay}ms`,
          toastMessage: `Fulfilled promise in ${delay} ms`,
        });
      } else {
        return reject({
          log: `❌ Rejected promise in ${delay}ms`,
          toastMessage: `Rejected promise in ${delay}ms`,
        });
      }
    }, delay);
  });
};

const judgePromiseResult = data => {
  return data.includes('✅');
};

const notify = (log, toastMessage) => {
  console.log(log);
  judgePromiseResult(log)
    ? iziToast.success(
      {
        message: toastMessage,
        position: 'topRight',
      })
    : iziToast.error(
      {
        message: toastMessage,
        position: 'topRight',
      });
};

form.addEventListener(
  'submit',
  function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const delayValue = formData.get('delay');
    const stateValue = formData.get('state');

    createPromise(delayValue, stateValue)
      .then(r => {
        notify(r.log, r.toastMessage);
      })
      .catch(err => {
        notify(err.log, err.toastMessage);
      });
    form.reset();
  },
  false,
);