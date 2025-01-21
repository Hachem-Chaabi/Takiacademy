import { HTMLAttributes, useState } from 'react'
import eyeOn from './eyeOn.svg'
import eyeOff from './eyeOff.svg'

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  name: string
  register: any
  error: any
  label?: string
  icon?: string
  type?: 'email' | 'text' | 'number' | 'password'
  variant?: 'primary' | 'info' | 'success' | 'danger' | 'warning' | 'dark' | 'secondary' | 'light'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rounded?: boolean
  required?: boolean
  placeholder?: string
}

const Input: React.FC<IInputProps> = ({
  register,
  error,
  name,
  label,
  icon,
  variant,
  size,
  rounded,
  type,
  required,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true)

  return (
    <div className="input-form">
      <label htmlFor={name} className="label">
        {label}
        {required && <span className="red-star"> *</span>}
      </label>

      <div
        className={[
          'input-container',
          `input-container-${variant}`,
          `${rounded ? 'input-rounded' : ''}`,
        ].join(' ')}
      >
        {icon && <img src={icon} alt="icon" className="icon" />}
        <input
          id={name}
          name={name}
          type={
            type === 'password'
              ? showPassword
                ? 'password'
                : 'text'
              : type === 'text'
                ? 'text'
                : type === 'email'
                  ? 'email'
                  : 'number'
          }
          className={['input', `input-${size}`, `input-${variant}`].join(' ')}
          {...register}
          autoComplete="new-password"
          {...props}
        />
        {type === 'password' && (
          <img
            src={showPassword ? eyeOn : eyeOff}
            alt="eye-icon"
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>

      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

type InputDefaultProps = Pick<
  IInputProps,
  'label' | 'icon' | 'variant' | 'size' | 'rounded' | 'type' | 'required'
>

Input.defaultProps = {
  label: '',
  icon: '',
  variant: 'primary',
  size: 'md',
  rounded: true,
  required: false,
  type: 'text',
} as InputDefaultProps

export default Input
