import { tv } from 'tailwind-variants';

export const tableContainerStyles = tv({
  base: 'w-full max-w-[96.1rem] table-fixed rounded-[0.8rem]',
});

export const tableHeaderStyles = tv({
  base: 'bg-blue-primary h-[4.7rem] w-full rounded-t-[0.8rem]',
});

export const tableCellStyles = tv({
  base: 'text-md pr-xxs overflow-hidden text-start font-medium text-ellipsis whitespace-nowrap',
});
