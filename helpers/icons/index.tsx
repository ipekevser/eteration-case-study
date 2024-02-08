import React from 'react';
import { IconPropsInterface } from './interface';

const useIcons = () => {
  const SearchBarIcon = ({ width = '16', height = '17' }: IconPropsInterface) => (
    <svg width={width} height={height} viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.594 13.0082C9.54344 13.6379 8.314 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.82761 13.2996 10.4916 12.1526 11.7383L16.2071 15.7929C16.5976 16.1834 16.5976 16.8166 16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071L10.594 13.0082Z'
        fill='black'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.594 13.0082C9.54344 13.6379 8.314 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.82761 13.2996 10.4916 12.1526 11.7383L16.2071 15.7929C16.5976 16.1834 16.5976 16.8166 16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071L10.594 13.0082Z'
        fill='#2A59FE'
        fillOpacity='0.3'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM10.594 13.0082C9.54344 13.6379 8.314 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 8.82761 13.2996 10.4916 12.1526 11.7383L16.2071 15.7929C16.5976 16.1834 16.5976 16.8166 16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071L10.594 13.0082Z'
        fill='white'
        fillOpacity='0.5'
      />
    </svg>
  );

  const ProfileIcon = ({ width = '24', height = '24' }: IconPropsInterface) => (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7ZM16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM7 19C7 16.2386 9.23858 14 12 14C14.7614 14 17 16.2386 17 19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19C19 15.134 15.866 12 12 12C8.13401 12 5 15.134 5 19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19Z'
        fill='white'
      />
    </svg>
  );

  const PortfeilIcon = ({ width = '24', height = '24' }: IconPropsInterface) => (
    <svg width={width} height={height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9 6C9 5.44772 9.44772 5 10 5H14C14.5523 5 15 5.44772 15 6H9ZM7 6C7 4.34315 8.34315 3 10 3H14C15.6569 3 17 4.34315 17 6H19C20.6569 6 22 7.34315 22 9V11V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V11V9C2 7.34315 3.34315 6 5 6H7ZM16 8H19C19.5523 8 20 8.44772 20 9V10H4V9C4 8.44772 4.44772 8 5 8H8H16ZM20 18V12H4V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18Z'
        fill='white'
      />
    </svg>
  );

  return {
    SearchBarIcon,
    ProfileIcon,
    PortfeilIcon,
  };
};

export default useIcons;
