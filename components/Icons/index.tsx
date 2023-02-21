import { MouseEventHandler, FC } from "react";

export interface PropsIcon {
  className?: string;
  width?: number;
  onClick?: MouseEventHandler;
  fill?: string;
}
export const CloseIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}



export const LinkedinI: FC<PropsIcon> = (props) => {
  return (
    <svg width={24}
      height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
  )
}

export const TwitterIconI: FC<PropsIcon> = (props) => {
  return (
    <svg width={24}
      height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
  )
}

export const InstagramIcon2: FC<PropsIcon> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.9988 6.44238C10.4658 6.44238 8.99563 7.05135 7.91167 8.13531C6.82771 9.21927 6.21875 10.6894 6.21875 12.2224C6.21875 13.7553 6.82771 15.2255 7.91167 16.3095C8.99563 17.3934 10.4658 18.0024 11.9988 18.0024C13.5317 18.0024 15.0019 17.3934 16.0858 16.3095C17.1698 15.2255 17.7788 13.7553 17.7788 12.2224C17.7788 10.6894 17.1698 9.21927 16.0858 8.13531C15.0019 7.05135 13.5317 6.44238 11.9988 6.44238ZM11.9988 15.9761C11.0029 15.9761 10.0478 15.5805 9.34356 14.8763C8.63937 14.1721 8.24375 13.217 8.24375 12.2211C8.24375 11.2252 8.63937 10.2701 9.34356 9.56595C10.0478 8.86175 11.0029 8.46613 11.9988 8.46613C12.9946 8.46613 13.9497 8.86175 14.6539 9.56595C15.3581 10.2701 15.7538 11.2252 15.7538 12.2211C15.7538 13.217 15.3581 14.1721 14.6539 14.8763C13.9497 15.5805 12.9946 15.9761 11.9988 15.9761Z"
        fill="currentColor"
      />
      <path
        d="M18.0077 7.57684C18.7519 7.57684 19.3552 6.97354 19.3552 6.22934C19.3552 5.48513 18.7519 4.88184 18.0077 4.88184C17.2635 4.88184 16.6602 5.48513 16.6602 6.22934C16.6602 6.97354 17.2635 7.57684 18.0077 7.57684Z"
        fill="currentColor"
      />
      <path
        d="M22.6662 4.86004C22.3768 4.11276 21.9346 3.43414 21.3679 2.86761C20.8011 2.30108 20.1223 1.85913 19.3749 1.57004C18.5004 1.24174 17.5764 1.06422 16.6424 1.04504C15.4387 0.992539 15.0574 0.977539 12.0049 0.977539C8.95244 0.977539 8.56119 0.977539 7.36744 1.04504C6.43418 1.06323 5.51089 1.24079 4.63744 1.57004C3.88986 1.85879 3.2109 2.30063 2.64411 2.8672C2.07732 3.43377 1.63523 4.11257 1.34619 4.86004C1.01782 5.73456 0.84071 6.65859 0.822441 7.59254C0.768691 8.79504 0.752441 9.17629 0.752441 12.23C0.752441 15.2825 0.752441 15.6713 0.822441 16.8675C0.841191 17.8025 1.01744 18.725 1.34619 19.6013C1.63604 20.3485 2.07856 21.027 2.64549 21.5935C3.21241 22.16 3.89127 22.602 4.63869 22.8913C5.51048 23.2328 6.43416 23.423 7.36994 23.4538C8.57369 23.5063 8.95494 23.5225 12.0074 23.5225C15.0599 23.5225 15.4512 23.5225 16.6449 23.4538C17.5788 23.4348 18.5027 23.2577 19.3774 22.93C20.1246 22.6403 20.8032 22.1979 21.3699 21.6313C21.9366 21.0646 22.3789 20.386 22.6687 19.6388C22.9974 18.7638 23.1737 17.8413 23.1924 16.9063C23.2462 15.7038 23.2624 15.3225 23.2624 12.2688C23.2624 9.21504 23.2624 8.82754 23.1924 7.63129C23.1779 6.68413 22.9999 5.7466 22.6662 4.86004ZM21.1437 16.775C21.1356 17.4954 21.0041 18.2091 20.7549 18.885C20.5672 19.3711 20.2798 19.8125 19.9113 20.1809C19.5427 20.5492 19.1011 20.8364 18.6149 21.0238C17.9465 21.2718 17.2404 21.4033 16.5274 21.4125C15.3399 21.4675 15.0049 21.4813 11.9599 21.4813C8.91244 21.4813 8.60119 21.4813 7.39119 21.4125C6.6786 21.4038 5.97285 21.2723 5.30494 21.0238C4.81705 20.8375 4.37369 20.5509 4.00355 20.1825C3.63341 19.8141 3.34474 19.3721 3.15619 18.885C2.9105 18.2164 2.77908 17.5111 2.76744 16.7988C2.71369 15.6113 2.70119 15.2763 2.70119 12.2313C2.70119 9.18504 2.70119 8.87379 2.76744 7.66254C2.77552 6.94257 2.90701 6.22931 3.15619 5.55379C3.53744 4.56754 4.31869 3.79129 5.30494 3.41379C5.97318 3.16646 6.67872 3.03499 7.39119 3.02504C8.57994 2.97129 8.91369 2.95629 11.9599 2.95629C15.0062 2.95629 15.3187 2.95629 16.5274 3.02504C17.2405 3.03362 17.9466 3.16513 18.6149 3.41379C19.1011 3.60163 19.5426 3.88904 19.9112 4.25758C20.2797 4.62611 20.5671 5.06763 20.7549 5.55379C21.0006 6.22248 21.1321 6.92774 21.1437 7.64004C21.1974 8.82879 21.2112 9.16254 21.2112 12.2088C21.2112 15.2538 21.2112 15.5813 21.1574 16.7763H21.1437V16.775Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const YoutubeIconI: FC<PropsIcon> = (props) => {
  return (
    <svg
      width={25}
      height={19}
      viewBox="0 0 25 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.4776 3.03709C24.1901 1.9285 23.3429 1.05541 22.2673 0.759109C20.3177 0.220703 12.5 0.220703 12.5 0.220703C12.5 0.220703 4.68232 0.220703 2.73266 0.759109C1.65706 1.05545 0.80992 1.9285 0.522399 3.03709C0 5.04648 0 9.23889 0 9.23889C0 9.23889 0 13.4313 0.522399 15.4407C0.80992 16.5493 1.65706 17.386 2.73266 17.6823C4.68232 18.2207 12.5 18.2207 12.5 18.2207C12.5 18.2207 20.3177 18.2207 22.2673 17.6823C23.3429 17.386 24.1901 16.5493 24.4776 15.4407C25 13.4313 25 9.23889 25 9.23889C25 9.23889 25 5.04648 24.4776 3.03709ZM9.94316 13.0453V5.4325L16.4772 9.23899L9.94316 13.0453Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FacebookIcon2: FC<PropsIcon> = (props) => {
  return (
    <svg
      width={11}
      height={22}
      viewBox="0 0 11 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.14599 21.6284V11.8792H10.4038L10.8881 8.06212H7.14599V5.63077C7.14599 4.52929 7.44998 3.77514 9.01585 3.77514H11V0.371972C10.0346 0.267522 9.06422 0.217089 8.0933 0.220904C5.21369 0.220904 3.23661 1.99565 3.23661 5.2537V8.05498H0V11.8721H3.24368V21.6284H7.14599Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const WhatsappIconI: FC<PropsIcon> = (props) => {
  return (
    <svg height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
  )
}

export const WebSiteIcon: FC<PropsIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
};

export const PhoneMobile: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  )
}

export const EmailIconn: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

export const UserIcon: FC<PropsIcon> = (props) => {
  return (
    <svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.3074 11.5037C23.3087 9.58977 22.8256 7.70585 21.9021 6.02281C20.9785 4.33976 19.6438 2.91084 18.0188 1.86565C16.3939 0.820472 14.5302 0.192104 12.5968 0.0375494C10.6634 -0.117005 8.72153 0.207143 6.94726 0.980592C5.17299 1.75404 3.6225 2.95232 2.43642 4.46672C1.25034 5.98113 0.466221 7.76374 0.155176 9.65287C-0.15587 11.542 0.0160061 13.4779 0.655213 15.2848C1.29442 17.0918 2.38073 18.7128 3.8156 20.0006C3.84398 20.0338 3.87702 20.0629 3.91371 20.0869C6.04435 21.9631 8.80027 23 11.656 23C14.5118 23 17.2677 21.963 19.3983 20.0867C19.4349 20.0628 19.4677 20.0338 19.496 20.0007C20.6969 18.9252 21.6565 17.6135 22.3129 16.1501C22.9693 14.6867 23.3081 13.104 23.3074 11.5037V11.5037ZM0.936515 11.5037C0.935282 9.76481 1.36857 8.05248 2.19801 6.51827C3.02746 4.98405 4.22748 3.67528 5.69184 2.70782C7.15619 1.74035 8.83971 1.14404 10.5933 0.971679C12.347 0.799314 14.1166 1.05621 15.7456 1.71963C17.3747 2.38305 18.8128 3.43252 19.9327 4.77513C21.0525 6.11775 21.8197 7.71209 22.1661 9.41701C22.5126 11.1219 22.4277 12.8848 21.9189 14.5496C21.4101 16.2145 20.4932 17.7298 19.2493 18.9616C18.0924 17.05 16.2363 15.6493 14.0636 15.0482C15.0734 14.5182 15.8746 13.6702 16.3396 12.6392C16.8047 11.6081 16.907 10.4532 16.6302 9.35816C16.3534 8.26314 15.7134 7.29091 14.812 6.59614C13.9107 5.90136 12.7997 5.52395 11.6559 5.52395C10.5121 5.52395 9.40116 5.90136 8.49981 6.59614C7.59845 7.29091 6.95846 8.26314 6.68164 9.35816C6.40483 10.4532 6.5071 11.6081 6.97217 12.6392C7.43725 13.6702 8.23843 14.5182 9.24824 15.0482C7.07555 15.6493 5.21942 17.05 4.0625 18.9616C3.0706 17.9819 2.284 16.8191 1.74764 15.5394C1.21128 14.2598 0.935654 12.8884 0.936515 11.5037V11.5037ZM11.6559 14.7226C10.8263 14.7226 10.0153 14.4799 9.32555 14.0252C8.63576 13.5704 8.09813 12.924 7.78065 12.1678C7.46318 11.4115 7.38011 10.5794 7.54196 9.77653C7.70381 8.9737 8.1033 8.23626 8.68992 7.65745C9.27654 7.07864 10.0239 6.68447 10.8376 6.52478C11.6513 6.36509 12.4946 6.44705 13.2611 6.76029C14.0275 7.07354 14.6826 7.60401 15.1435 8.28461C15.6044 8.96522 15.8505 9.76539 15.8505 10.584C15.8492 11.6812 15.4069 12.7332 14.6205 13.5091C13.8342 14.285 12.768 14.7214 11.6559 14.7226ZM4.76579 19.5991C5.45748 18.3976 6.4595 17.3985 7.66982 16.7035C8.88013 16.0084 10.2555 15.6422 11.6559 15.6422C13.0563 15.6422 14.4317 16.0084 15.642 16.7035C16.8523 17.3985 17.8543 18.3976 18.546 19.5991C16.6175 21.2015 14.1772 22.0803 11.6559 22.0803C9.13461 22.0803 6.69434 21.2015 4.76579 19.5991V19.5991Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const OptionIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#919EAB" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>


  )
}
export const EditarIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
    </svg>
  )
}
export const FiltrarIcon: FC<PropsIcon> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7ZM11 18H13C13.55 18 14 17.55 14 17C14 16.45 13.55 16 13 16H11C10.45 16 10 16.45 10 17C10 17.55 10.45 18 11 18ZM17 13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13Z" fill="#919EAB" />
    </svg>

  )
}
export const SearchIcon: FC<PropsIcon> = (props) => {
  return (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.0146 12.9L19.7361 16.29C19.9433 16.4778 20.0599 16.7334 20.0599 17C20.0599 17.2666 19.9433 17.5222 19.7361 17.71C19.5306 17.8993 19.2508 18.0058 18.959 18.0058C18.6671 18.0058 18.3874 17.8993 18.1819 17.71L14.4713 14.31C12.9416 15.407 11.0526 16.0022 9.10799 16C4.27193 16 0.35154 12.4183 0.35154 8C0.35154 3.58172 4.27193 0 9.10799 0C13.944 0 17.8644 3.58172 17.8644 8C17.8669 9.77666 17.2153 11.5025 16.0146 12.9ZM9.10799 2C5.48095 2 2.54065 4.68629 2.54065 8C2.54065 11.3137 5.48095 14 9.10799 14C12.735 14 15.6753 11.3137 15.6753 8C15.6753 4.68629 12.735 2 9.10799 2Z" fill="#919EAB" />
    </svg>

  )
}
export const AddUserIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
  )
}
export const BombillaIcon: FC<PropsIcon> = (props) => {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  )
}
export const AyudaIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>


  )
}
export const PermisosIcon: FC<PropsIcon> = (props) => {
  return (
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4766 24.3984H7.72656C5.44839 24.3984 3.60156 22.5516 3.60156 20.2734V6.52344C3.60156 4.24526 5.44839 2.39844 7.72656 2.39844H17.3516C19.6297 2.39844 21.4766 4.24526 21.4766 6.52344V9.96094M16.6641 16.8359V15.4609C16.6641 14.3219 17.5875 13.3984 18.7266 13.3984C19.8657 13.3984 20.7891 14.3219 20.7891 15.4609V17.5234M16.6641 7.89844H7.72656M12.5391 12.0234H7.72656M10.4766 16.1484H7.72656M15.9766 24.3984H21.4766C22.236 24.3984 22.8516 23.7828 22.8516 23.0234V18.8984C22.8516 18.139 22.236 17.5234 21.4766 17.5234H15.9766C15.2172 17.5234 14.6016 18.139 14.6016 18.8984V23.0234C14.6016 23.7828 15.2172 24.3984 15.9766 24.3984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
export const Secciones2Icon: FC<PropsIcon> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.332 2.75C19.3446 2.75 20.1654 3.57081 20.1654 4.58333V13.75C20.1654 14.7625 19.3446 15.5833 18.332 15.5833H3.66536C2.65284 15.5833 1.83203 14.7625 1.83203 13.75V4.58333C1.83203 3.57081 2.65284 2.75 3.66536 2.75H18.332ZM10.5404 5.5H5.95703C5.19764 5.5 4.58203 6.11561 4.58203 6.875V8.70833C4.58203 9.46772 5.19764 10.0833 5.95703 10.0833H10.5404C11.2998 10.0833 11.9154 9.46772 11.9154 8.70833V6.875C11.9154 6.11561 11.2998 5.5 10.5404 5.5Z" fill="currentColor" />
      <path opacity="0.48" fillRule="evenodd" clipRule="evenodd" d="M11.0013 14.668C11.5076 14.668 11.918 15.0784 11.918 15.5846V18.3346H14.668C15.1742 18.3346 15.5846 18.745 15.5846 19.2513C15.5846 19.7576 15.1742 20.168 14.668 20.168H7.33464C6.82837 20.168 6.41797 19.7576 6.41797 19.2513C6.41797 18.745 6.82837 18.3346 7.33464 18.3346H10.0846V15.5846C10.0846 15.0784 10.495 14.668 11.0013 14.668Z" fill="currentColor" />
    </svg>

  )
}
export const PreguntasFrecuentes: FC<PropsIcon> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.10369 2.55664C3.77195 2.55664 0.457031 5.49601 0.457031 8.70024C0.457031 11.9045 3.31909 13.7611 3.31909 13.7611L2.85394 15.5242C2.79245 15.7566 3.0415 15.9485 3.25057 15.8299L5.34134 14.6453C6.26593 14.9396 8.228 15.0336 8.41906 15.0424C8.28202 14.5671 8.21438 14.0989 8.21438 13.6618C8.21438 11.1889 10.3675 7.70581 15.1539 7.70581C15.2628 7.70581 15.3717 7.70844 15.4807 7.71283C14.8438 4.66453 11.6786 2.55664 8.10369 2.55664Z" fill="currentColor" />
      <path opacity="0.48" d="M21.5411 13.274C21.5411 10.4673 18.2482 8.41211 15.1542 8.41211C10.7785 8.41211 8.92188 11.5724 8.92188 13.661C8.92188 15.7539 10.7781 18.9099 15.1542 18.9099C16.1223 18.9099 16.974 18.7711 17.7145 18.5251L19.3603 19.5696C19.4903 19.6522 19.6546 19.5358 19.6199 19.3855L19.2466 17.7648C20.8015 16.6816 21.5411 14.9743 21.5411 13.274Z" fill="currentColor" />
    </svg>

  )
}
export const CampañasIcon: FC<PropsIcon> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.8125 2.83333H15.6666V1.91666C15.6666 1.41067 15.2569 1 14.75 1C14.2431 1 13.8333 1.41067 13.8333 1.91666V2.83333H6.49999V1.91666C6.49999 1.41067 6.09024 1 5.58332 1C5.07641 1 4.66666 1.41067 4.66666 1.91666V2.83333H3.52083C2.13025 2.83333 1 3.96358 1 5.35416V15.6666C1 17.1828 2.23383 18.4166 3.74999 18.4166H8.33332C8.84023 18.4166 9.24998 18.006 9.24998 17.5C9.24998 16.994 8.84023 16.5833 8.33332 16.5833H3.74999C3.244 16.5833 2.83333 16.1717 2.83333 15.6666V8.33332H17.5C17.5 8.83932 17.9097 9.24998 18.4166 9.24998C18.9235 9.24998 19.3333 8.83932 19.3333 8.33332V5.35416C19.3333 3.96358 18.2031 2.83333 16.8125 2.83333Z" fill="currentColor" />
      <path opacity="0.48" d="M17.0403 11.084C13.755 11.084 11.082 13.757 11.082 17.0423C11.082 20.3276 13.755 23.0006 17.0403 23.0006C20.3257 23.0006 22.9986 20.3276 22.9986 17.0423C22.9986 13.757 20.3257 11.084 17.0403 11.084ZM19.7958 16.0386L16.8167 19.4761C16.6498 19.6686 16.4106 19.7822 16.1567 19.7923C16.1457 19.7923 16.1347 19.7923 16.1237 19.7923C15.8808 19.7923 15.6479 19.6961 15.4756 19.5237L13.8714 17.9196C13.513 17.5611 13.513 16.9818 13.8714 16.6234C14.2299 16.265 14.8092 16.265 15.1676 16.6234L16.076 17.5318L18.4098 14.8386C18.7417 14.4555 19.321 14.4161 19.7032 14.7461C20.0855 15.077 20.1267 15.6563 19.7958 16.0386Z" fill="currentColor" />
    </svg>

  )
}
export const InicioIcon: FC<PropsIcon> = (props) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14.0098" width="4" height="7" fill="currentColor" />
      <path d="M20.4201 10.1895L12.7101 2.30947C12.5223 2.12016 12.2668 2.01367 12.0001 2.01367C11.7335 2.01367 11.4779 2.12016 11.2901 2.30947L3.58012 10.1995C3.20327 10.5794 2.99437 11.0944 3.00012 11.6295V20.0095C2.99851 21.0725 3.82872 21.951 4.89012 22.0095H8.00012V13.0095C8.00012 12.4572 8.44783 12.0095 9.00012 12.0095H15.0001C15.5524 12.0095 16.0001 12.4572 16.0001 13.0095V22.0095H19.1101C20.1715 21.951 21.0017 21.0725 21.0001 20.0095V11.6295C21.0009 11.0924 20.7929 10.5761 20.4201 10.1895Z" fill="currentColor" />
    </svg>


  )
}
export const MarcasEmIcon: FC<PropsIcon> = (props) => {
  return (
    <svg width="21" height="21" viewBox="0 0 16 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.57867 4.63154V7.14746C4.57867 7.45903 4.83088 7.71123 5.14245 7.71123C5.42536 7.71123 5.65982 7.5028 5.70011 7.23082L5.70623 7.14746V4.63154H10.8929V7.14746C10.8929 7.45903 11.1454 7.71123 11.4566 7.71123C11.7399 7.71123 11.9741 7.5028 12.0143 7.23082L12.0204 7.14746V4.63154H13.7185C14.3745 4.63154 14.9345 5.11184 15.0459 5.74695L15.0621 5.87594L15.9217 16.7082C15.9886 17.5775 15.6875 18.4412 15.0964 19.0793C14.5506 19.6684 13.7945 20.026 12.997 20.0775L12.7969 20.084H3.80221C2.93212 20.084 2.094 19.7175 1.50277 19.0794C0.957063 18.4903 0.658574 17.709 0.668194 16.9098L0.677053 16.7097L1.53699 5.87444C1.587 5.22154 2.1091 4.70043 2.75079 4.63784L2.88061 4.63154H4.57867ZM8.33533 8.27152C8.12755 8.26852 7.95621 8.4344 7.95317 8.64279V9.33541C6.58615 9.43262 5.65658 10.2771 5.65658 11.4011C5.65658 12.7803 6.82918 13.1631 7.95317 13.4668V15.8971C7.36018 15.8175 6.80123 15.5715 6.34312 15.1863C6.25685 15.1176 6.1499 15.0793 6.03933 15.0769C5.75925 15.0964 5.54357 15.3309 5.54715 15.6116C5.54659 15.7343 5.59459 15.8522 5.68085 15.9397C6.30847 16.5047 7.11532 16.8297 7.95922 16.8571L7.95982 17.5382C7.96954 17.7459 8.14635 17.9063 8.35413 17.896C8.55889 17.896 8.72475 17.7302 8.72475 17.5254V16.8449C10.3834 16.7356 11.0517 15.727 11.0517 14.6577C11.0517 13.2238 9.84879 12.7864 8.72479 12.4826V10.344C9.18228 10.4211 9.61366 10.6089 9.98245 10.8908C10.056 10.9412 10.1422 10.9685 10.2316 10.9698C10.5177 10.9698 10.751 10.7395 10.7541 10.4533C10.7547 10.3306 10.7067 10.2127 10.6204 10.1252C10.0876 9.66896 9.41924 9.39982 8.71872 9.35972V8.64279C8.71872 8.43803 8.55285 8.27217 8.3481 8.27217C8.34385 8.27153 8.33958 8.27152 8.33533 8.27152ZM8.72479 13.6977C9.41134 13.8922 9.94598 14.1534 9.93991 14.7913C9.93991 15.2531 9.62398 15.7999 8.72479 15.9093V13.6977ZM7.95926 10.3015V12.2882C7.29701 12.0938 6.78059 11.8933 6.78059 11.3282C6.78059 10.7632 7.24842 10.3561 7.95926 10.3015ZM8.29956 0.833984C10.3513 0.833984 12.0205 2.50347 12.0205 4.55521V4.6315H10.8929V4.55521C10.8929 3.12511 9.7297 1.9615 8.2996 1.9615C6.8695 1.9615 5.70627 3.12511 5.70627 4.55521V4.6315H4.57871V4.55521C4.57871 2.50347 6.24782 0.833984 8.29956 0.833984Z" fill="currentColor" />
    </svg>
  )
}
export const MetricasSociales: FC<PropsIcon> = (props) => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg {...props}s">
      <path opacity="0.48" d="M18.6372 1.83398C19.5653 1.83398 20.3177 2.58639 20.3177 3.51454C20.3177 4.44269 19.5653 5.1951 18.6372 5.1951C18.3476 5.1951 18.0752 5.12188 17.8374 4.99296L15.0645 8.18261C15.188 8.41648 15.2578 8.68299 15.2578 8.96582C15.2578 9.89396 14.5054 10.6464 13.5773 10.6464C12.677 10.6464 11.9421 9.93851 11.8987 9.04902L9.87896 8.35373C9.57072 8.72753 9.10405 8.96582 8.58173 8.96582C8.28186 8.96582 8.00034 8.88728 7.75661 8.74965L5.12064 10.9614C5.17029 11.12 5.19705 11.2888 5.19705 11.4638C5.19705 12.392 4.44464 13.1444 3.51649 13.1444C2.58835 13.1444 1.83594 12.392 1.83594 11.4638C1.83594 10.5357 2.58835 9.78329 3.51649 9.78329C3.81982 9.78329 4.10438 9.86366 4.35004 10.0043L6.98052 7.79703C6.92899 7.63567 6.90117 7.46372 6.90117 7.28526C6.90117 6.35712 7.65358 5.60471 8.58173 5.60471C9.47619 5.60471 10.2074 6.30349 10.2593 7.18493L12.2907 7.88458C12.599 7.51813 13.0609 7.28526 13.5773 7.28526C13.7726 7.28526 13.9601 7.31857 14.1344 7.37982L17.0397 4.03783C16.9858 3.87314 16.9566 3.69725 16.9566 3.51454C16.9566 2.58639 17.709 1.83398 18.6372 1.83398Z" fill="currentColor" />
      <path d="M19.4779 9.72461C19.9419 9.72461 20.3181 10.1008 20.3181 10.5649V20.4228C20.3181 20.6759 20.1129 20.8811 19.8598 20.8811H17.4154C17.1622 20.8811 16.957 20.6759 16.957 20.4228V10.5649C16.957 10.1008 17.3332 9.72461 17.7973 9.72461H19.4779ZM14.4362 15.6146C14.9003 15.6146 15.2765 15.9909 15.2765 16.4549V20.4228C15.2765 20.6759 15.0713 20.8811 14.8181 20.8811H12.3737C12.1206 20.8811 11.9154 20.6759 11.9154 20.4228V16.4549C11.9154 15.9909 12.2916 15.6146 12.7556 15.6146H14.4362ZM9.39453 13.9275C9.8586 13.9275 10.2348 14.3037 10.2348 14.7678V20.4228C10.2348 20.6759 10.0296 20.8811 9.77648 20.8811H7.33203C7.0789 20.8811 6.8737 20.6759 6.8737 20.4228V14.7678C6.8737 14.3037 7.2499 13.9275 7.71398 13.9275H9.39453ZM4.35286 18.2482C4.81694 18.2482 5.19314 18.6244 5.19314 19.0885V20.4228C5.19314 20.6759 4.98794 20.8811 4.73481 20.8811H2.29036C2.03723 20.8811 1.83203 20.6759 1.83203 20.4228V19.0885C1.83203 18.6244 2.20824 18.2482 2.67231 18.2482H4.35286Z" fill="currentColor" />
    </svg>

  )
}
export const BusinessIcon: FC<PropsIcon> = (props) => {
  return (
    <svg
      width="25"
      height="21"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.512 11.4546C23.1866 11.4546 22.9697 11.6728 22.9697 12V19.0909C22.9697 19.4182 22.7528 19.6364 22.4274 19.6364H2.90367C2.57826 19.6364 2.36135 19.4182 2.36135 19.0909V12C2.36135 11.6727 2.1444 11.4546 1.81904 11.4546C1.49369 11.4546 1.27673 11.6728 1.27673 12V19.0909C1.27673 20.0182 1.98175 20.7273 2.90371 20.7273H22.4274C23.3494 20.7273 24.0544 20.0182 24.0544 19.0909V12C24.0544 11.6727 23.8374 11.4546 23.512 11.4546Z"
        fill="currentColor"
      />
      <path
        d="M22.9697 3.81823H2.36134C1.43938 3.81823 0.734375 4.52731 0.734375 5.45459V8.94551C0.734375 9.70911 1.27668 10.3637 1.98174 10.5273L10.4963 12.4364V14.1818C10.4963 14.5091 10.7132 14.7273 11.0386 14.7273H14.2925C14.6179 14.7273 14.8348 14.5091 14.8348 14.1818V12.4364L23.3493 10.5273C24.0544 10.3637 24.5967 9.70911 24.5967 8.94547V5.45454C24.5967 4.52731 23.8917 3.81823 22.9697 3.81823ZM13.7502 13.6364H11.5809V11.4546H13.7502V13.6364ZM23.512 8.94547C23.512 9.21818 23.3493 9.43639 23.0782 9.4909L14.8348 11.3455V10.9091C14.8348 10.5818 14.6178 10.3637 14.2925 10.3637H11.0386C10.7132 10.3637 10.4963 10.5819 10.4963 10.9091V11.3455L2.2529 9.49095C1.98174 9.43639 1.81904 9.21823 1.81904 8.94551V5.45459C1.81904 5.12731 2.03598 4.90915 2.36134 4.90915H22.9697C23.2951 4.90915 23.512 5.12736 23.512 5.45459V8.94547Z"
        fill="currentColor"
      />
      <path
        d="M15.3772 0H9.95393C9.03196 0 8.32695 0.709079 8.32695 1.63636V2.1818C8.32695 2.50908 8.5439 2.72723 8.86926 2.72723C9.19461 2.72723 9.41157 2.50903 9.41157 2.1818V1.63636C9.41157 1.30908 9.62852 1.09092 9.95388 1.09092H15.3771C15.7025 1.09092 15.9195 1.30913 15.9195 1.63636V2.1818C15.9195 2.50908 16.1364 2.72723 16.4618 2.72723C16.7872 2.72723 17.0041 2.50903 17.0041 2.1818V1.63636C17.0042 0.709079 16.2992 0 15.3772 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const ChatIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>

  );
};
export const CategoriasIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>


  )
}
export const SubCategoriaIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
    </svg>


  )
}
export const CaracteristicasIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>

  )
}
export const PostIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>

  )
}
export const SeccionesIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
    </svg>

  )
}
export const ArrowDownIcon: FC<PropsIcon> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>

  )
}