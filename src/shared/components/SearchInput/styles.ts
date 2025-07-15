import { tv } from 'tailwind-variants';

export const searchInputContainer = tv({
  base: 'border-gray10 px-xs flex h-[4.8rem] w-full cursor-pointer items-center rounded-[0.8rem] border bg-white focus-within:border-black sm:max-w-[29rem]',
  variants: {
    hasValue: {
      true: 'border-black',
    },
  },
  defaultVariants: {
    hasValue: false,
  },
});

export const searchInput = tv({
  base: 'placeholder:text-gray20 placeholder:text-md text-md w-full font-normal text-black outline-none',
});
