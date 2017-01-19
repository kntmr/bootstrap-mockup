function submitWithLoading(timeout, callback) {
  if (timeout != 0) {
    $('#btn-loader').click();
    setTimeout(function() {
      submitWithLoading(0, callback);
    }, timeout);
  } else {
    $('#btn-loader').click();
    callback();
  }
}
