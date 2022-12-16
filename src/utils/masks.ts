export const phoneMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d)/, '($1')
    .replace(/^\((\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3');
};

export const cepMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

export const dateMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
};

export const currencyMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d)/, 'R$ $1')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};

export const cpfMask = (value: string | number): string => {
  return String(value)
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};
