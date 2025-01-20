const D = {
  to_20: [
    'سفر',
    'یەک',
    'دوو',
    'سێ',
    'چوار',
    'پێنج',
    'شەش',
    'حەوت',
    'هەشت',
    'نۆ',
    'دە',
    'یازدە',
    'دوازدە',
    'سێزدە',
    'چاردە',
    'پازدە',
    'شازدە',
    'حەڤدە',
    'هەژدە',
    'نۆزدە',
  ],
  to_100: ['بیست', 'سی', 'چل', 'پەنجا', 'شەست', 'حەفتا', 'هەشتا', 'نەوەد'],
  1e2: ' سەد',
  1e3: ' هەزار',
  1e6: ' ملیۆن',
  1e9: ' ملیارد',
  1e12: ' تریلیۆن',
  neg: 'مەنفی ',
  and: ' و ',
};
function num_to_str(n, l = 0) {
  const i = parseInt;
  let R = '';

  if (n == 0) return l == 0 ? D.to_20[0] : '';
  if (n < 0) return D.neg + num_to_str(-n, l);
  if (l > 0) {
    R += D.and;
    l--;
  }
  if (n < 20) R += D.to_20[n];
  else if (n < 1e2) R += D.to_100[i(n / 10) - 2] + num_to_str(n % 10, l + 1);
  else if (n < 1e3 && i(n / 1e2) == 1) R += D[1e2] + num_to_str(n % 1e2, l + 1);
  else if (n < 1e3)
    R += num_to_str(i(n / 1e2), l) + D[1e2] + num_to_str(n % 1e2, l + 1);
  else if (n < 1e15) {
    for (let j = 1e3; j < 1e15; j *= 1e3) {
      if (n < j * 1e3 && i(n / j) == 1) {
        R += D[j] + num_to_str(n % j, l + 1);
        break;
      } else if (n < j * 1e3) {
        R += num_to_str(i(n / j), l) + D[j] + num_to_str(n % j, l + 1);
        break;
      }
    }
  }
  return R;
}
