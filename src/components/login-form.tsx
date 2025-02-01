'use client';

import { useState } from 'react';
import { Form } from 'radix-ui';
import { Eye, EyeOff } from 'lucide-react';
import { ButtonSubmit } from '@/components/button-submit';

const texts = {
  username: 'Tên đăng nhập/Email',
  usernamePlaceholder: 'Tên đăng nhập hoặc email',
  usernameRequired: 'Vui lòng điền tên đăng nhập hoặc email',
  password: 'Mật khẩu',
  passwordPlaceholder: 'Mật khẩu',
  passwordRequired: 'Vui lòng điền mật khẩu',
  remember: 'Ghi nhớ cho lần đăng nhập lần sau',
  login: 'Đăng nhập',
  loggingIn: 'Đang đăng nhập...',
};

const { Root, Field, Label, Control, Message, Submit } = Form;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Login form submitted');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setIsLoading(false);
  };

  return (
    <Root onSubmit={handleSubmit} className="w-full space-y-2 mb-6 text-sm">
      <Field name="username">
        <div className="space-y-1">
          <Label className="opacity-80">
            <span className="text-red-500 mr-1">*</span>
            {texts.username}
          </Label>
          <Control asChild>
            <input
              className="mt-2 w-full px-3 leading-7.5 border border-gray-300 rounded-md focus:outline-red-500 hover:border-red-500"
              type="text"
              placeholder={texts.usernamePlaceholder}
              required
            />
          </Control>
          {/* prettier-ignore */}
          <div className="min-h-5"> {/* Placeholder */}
            <Message className="text-red-500 pl-1" match="valueMissing">
              {texts.usernameRequired}
            </Message>
          </div>
        </div>
      </Field>

      <Field name="password">
        <div className="space-y-1">
          <Label className="opacity-80">
            <span className="text-red-500 mr-1">*</span>
            {texts.password}
          </Label>
          <div className="relative">
            <Control asChild>
              <input
                className="mt-2 w-full px-3 leading-7.5 border border-gray-300 rounded-md focus:outline-red-500 hover:border-red-500 pr-10"
                type={showPassword ? 'text' : 'password'}
                placeholder={texts.passwordPlaceholder}
                required
              />
            </Control>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="h-full absolute right-3 top-1/10 -translate-y-1/22 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {/* prettier-ignore */}
          <div className="min-h-5"> {/* Placeholder */}
            <Message className="text-red-500 pl-1" match="valueMissing">
              {texts.passwordRequired}
            </Message>
          </div>
        </div>
      </Field>

      <Submit asChild>
        <ButtonSubmit isLoading={isLoading} loadingChildren={texts.loggingIn}>
          {texts.login}
        </ButtonSubmit>
      </Submit>
    </Root>
  );
}
