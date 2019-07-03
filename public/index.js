console.log('navigator.serviceWorker', navigator.serviceWorker);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(
      function(registration) {
        // Успешная регистрация
        console.log('ServiceWorker registration successful');
      },
      function(err) {
        // При регистрации произошла ошибка
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}
