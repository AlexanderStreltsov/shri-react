import { type FC } from 'react';

export const CloseIcon: FC<{ size: number }> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7074 18.2924C19.8004 18.3854 19.8741 18.4957 19.9243 18.6171C19.9746 18.7384 20.0005 18.8686 20.0005 18.9999C20.0005 19.1313 19.9746 19.2614 19.9243 19.3828C19.8741 19.5042 19.8004 19.6145 19.7074 19.7074C19.6145 19.8004 19.5042 19.8741 19.3828 19.9243C19.2614 19.9746 19.1313 20.0005 18.9999 20.0005C18.8686 20.0005 18.7384 19.9746 18.6171 19.9243C18.4957 19.8741 18.3854 19.8004 18.2924 19.7074L9.99995 11.4137L1.70745 19.7074C1.5198 19.8951 1.26531 20.0005 0.999946 20.0005C0.734582 20.0005 0.480086 19.8951 0.292446 19.7074C0.104805 19.5198 -0.000610346 19.2653 -0.000610352 18.9999C-0.000610357 18.7346 0.104805 18.4801 0.292446 18.2924L8.5862 9.99995L0.292446 1.70745C0.104805 1.5198 -0.000610352 1.26531 -0.000610352 0.999946C-0.000610352 0.734582 0.104805 0.480086 0.292446 0.292446C0.480086 0.104805 0.734582 -0.000610352 0.999946 -0.000610352C1.26531 -0.000610352 1.5198 0.104805 1.70745 0.292446L9.99995 8.5862L18.2924 0.292446C18.4801 0.104805 18.7346 -0.000610357 18.9999 -0.000610352C19.2653 -0.000610346 19.5198 0.104805 19.7074 0.292446C19.8951 0.480086 20.0005 0.734582 20.0005 0.999946C20.0005 1.26531 19.8951 1.5198 19.7074 1.70745L11.4137 9.99995L19.7074 18.2924Z"
        fill="currentColor"
      />
    </svg>
  );
};
