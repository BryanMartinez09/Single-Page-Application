import { useForm } from 'react-hook-form'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'

type FormData = { email: string; password: string; terms: boolean }

export default function Auth() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>()
  const [user, setUser] = useLocalStorage<{email:string} | null>('km:user', null)
  const navigate = useNavigate()

  const onSubmit = (data: FormData) => {
    // demo: guardar en localStorage y redirigir
    setUser({ email: data.email })
    navigate('/')
  }

  return (
    <div className="max-w-lg mx-auto card-surface p-6">
      <h1 className="text-2xl font-semibold">Iniciar sesión</h1>
      <p className="text-white/70 text-sm mb-4">Formulario validado con <code>react-hook-form</code>.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Correo</label>
          <input
            type="email"
            className="w-full rounded-xl bg-surface border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            {...register('email', { required: 'El correo es requerido', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo inválido' } })}
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Contraseña</label>
          <input
            type="password"
            className="w-full rounded-xl bg-surface border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
            {...register('password', { required: 'La contraseña es requerida', minLength: { value: 6, message: 'Mínimo 6 caracteres' } })}
          />
          {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" {...register('terms', { required: 'Debes aceptar los términos' })} />
          <span>Acepto los términos y condiciones</span>
        </label>
        {errors.terms && <p className="text-red-400 text-sm">{errors.terms.message}</p>}

        <button disabled={isSubmitting} className="btn btn-primary w-full">{isSubmitting ? 'Enviando...' : 'Entrar'}</button>
      </form>

      {user && <p className="mt-4 text-white/60 text-sm">Sesión: {user.email}</p>}
    </div>
  )
}
