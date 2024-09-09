import { styled, Checkbox, CheckboxProps, SvgIcon } from '@mui/material';

const icon = (
  <SvgIcon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H16C20.1421 0.5 23.5 3.85786 23.5 8V16C23.5 20.1421 20.1421 23.5 16 23.5H8C3.85786 23.5 0.5 20.1421 0.5 16V8Z"
        fill="#F4F4F4"
      />
      <path
        d="M0.5 8C0.5 3.85786 3.85786 0.5 8 0.5H16C20.1421 0.5 23.5 3.85786 23.5 8V16C23.5 20.1421 20.1421 23.5 16 23.5H8C3.85786 23.5 0.5 20.1421 0.5 16V8Z"
        stroke="#DCDEE0"
      />
    </svg>
  </SvgIcon>
);

const checkedIcon = (
  <SvgIcon>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_0_4502)">
        <path
          d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
          fill="#526ED3"
        />
        <path
          d="M6 12L10.2426 16.2426L18.727 7.75732"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_4502">
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H16C20.4183 0 24 3.58172 24 8V16C24 20.4183 20.4183 24 16 24H8C3.58172 24 0 20.4183 0 16V8Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  </SvgIcon>
);

export const CustomCheckBox = styled((props: CheckboxProps) => (
  <Checkbox icon={icon} checkedIcon={checkedIcon} {...props} />
))(({ theme }) => ({}));
