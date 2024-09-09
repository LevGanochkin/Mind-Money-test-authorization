import { FormControlLabel, Stack } from '@mui/material';
import { FormBody, GenerateButton, SubmitButton } from './styled';
import { CustomCheckBox } from '../../../shared/ui/checkbox';
import { CustomInput } from '../../../shared/ui/input';
import { useState } from 'react';
import { CheckBoxLabel } from './CheckBoxLabel';
import PasswordAdornment from './PasswordAdornment';
import { useForm } from 'react-hook-form';
import { schema } from '../lib/validationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import PasswordHelperText from './PasswordHelperText';
import { z } from 'zod';
import { generateRandomPassword } from '../lib/generateRandomPassword';

export type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const {
    setValue,
    setFocus,
    setError,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      phone: '',
      refCode: '',
    },
  });
  const password = watch('password');
  const email = watch('email');

  const handlePolicy = () => {
    setChecked(check => !check);
  };

  const handleGenerate = () => {
    const generatedPassword = generateRandomPassword();
    setValue('password', generatedPassword);
    setFocus('password');
  };

  const onSubmit = (data: FormData) => {
    const mockResponse = new Promise<FormData>(resolve => {
      setTimeout(() => {
        if (data.refCode && !data.refCode?.startsWith('promo')) {
          setError('refCode', { type: 'custom', message: 'There is no such promo code' });
        } else {
          resolve(data);
        }
      }, 500);
    });

    mockResponse
      .then(({ email, phone, password, refCode }) =>
        alert(
          `email: ${email} \nphone: ${phone} \npassword: ${password} \nreferral code: ${refCode}`,
        ),
      )
      .catch(error => alert(new Error(error.message)));
  };

  return (
    <FormBody onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={3}>
        <CustomInput
          fullWidth
          variant="filled"
          label="Email"
          placeholder="Email"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <CustomInput
          fullWidth
          variant="filled"
          label="Phone number"
          placeholder="Phone number"
          type="tel"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <CustomInput
          fullWidth
          variant="filled"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          slotProps={{
            input: {
              endAdornment:
                password !== '' ? (
                  <PasswordAdornment
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                  />
                ) : (
                  <GenerateButton onClick={handleGenerate}>Generate</GenerateButton>
                ),
            },
            formHelperText: { component: 'div' },
          }}
          {...register('password')}
          error={password === '' && !!errors.password}
          helperText={
            <PasswordHelperText
              fieldError={errors.password}
              passwordWatch={password}
              emailWatch={email}
            />
          }
        />
        <CustomInput
          fullWidth
          variant="filled"
          label="Referral code"
          placeholder="Referral code"
          type="text"
          {...register('refCode')}
          error={!!errors.refCode}
          helperText={errors.refCode?.message}
        />
        <FormControlLabel
          control={<CustomCheckBox value={checked} onClick={handlePolicy} />}
          label={<CheckBoxLabel />}
        />
      </Stack>
      <SubmitButton variant="contained" color="primary" fullWidth type="submit" disabled={!checked}>
        Sign up
      </SubmitButton>
    </FormBody>
  );
};

export { SignUpForm };
