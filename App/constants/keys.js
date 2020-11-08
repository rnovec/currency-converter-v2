module.exports = {
  ADMOB_ID:
    process.env.NODE_ENV === 'development'
      ? 'ca-app-pub-3940256099942544/6300978111'
      : process.env.ADMOB_ID
}
