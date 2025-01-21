import Input from '../../../shared/components/Input'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../data/useAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const { register, handleSubmit, reset, formState } = useForm()
  const { errors } = formState

  const [login, { isLoading }] = useLoginMutation()

  async function onSubmit(data: any) {
    try {
      await login(data).unwrap()
      navigate('/dashboard', { replace: true })
    } catch (error) {
      toast.error('Provided email or password are incorrect')
    } finally {
      reset()
    }
  }

  return (
    <div className="login_feature">
      <form className="login_feature_container" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Login</h1>

        <div className="login_feature_container_inputs">
          <Input
            name="email"
            register={{
              ...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please provide a valid email address',
                },
              }),
            }}
            error={errors?.email?.message}
            variant="secondary"
            placeholder="Enter your email"
            label="Email"
            required={true}
          />

          <Input
            name="password"
            register={{
              ...register('password', {
                required: 'This field is required',
              }),
            }}
            error={errors?.password?.message}
            variant="secondary"
            placeholder="Enter your password"
            label="Password"
            type="password"
            required={true}
          />
        </div>

        <button type="submit" className="login_feature_container_btn" disabled={isLoading}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
