import { tv } from 'tailwind-variants';

const bollVariants = tv({
  base: 'text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors shadow-md',
  variants: {
    as: {
      button:
        'bg-blue-500 hover:bg-blue-700 active:bg-blue-900 focus-within:outline-offset-1',
      span: 'bg-gray-500',
    },
    isActive: {
      true: '',
    },
  },
  compoundVariants: [
    {
      as: ['button', 'span'],
      isActive: true,
      class: 'bg-green-500',
    },
    {
      as: ['button'],
      isActive: true,
      class: 'hover:bg-green-700 active:bg-green-900',
    },
  ],
  defaultVariants: {
    as: 'button',
    isActive: false,
  },
});

type BollProps = {
  number: number;
  sortedNumbers: number[];
  updateNumber?: (number: number) => void;
};

export const Boll = ({ number, sortedNumbers, updateNumber }: BollProps) => {
  const Component = updateNumber ? 'button' : 'span';

  const isActive = sortedNumbers.includes(number);
  return (
    <Component
      className={bollVariants({ as: Component, isActive })}
      {...(Component === 'button' && updateNumber
        ? { type: 'button', onClick: () => updateNumber(number) }
        : {})}
    >
      {number}
    </Component>
  );
};
