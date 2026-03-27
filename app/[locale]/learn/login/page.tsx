import { LearnJoinSteps } from '../join-steps'
import { LoginForm } from './login-form'

export default function StudentLoginPage() {
  return (
    <div>
      <LearnJoinSteps variant="login" />
      <LoginForm />
    </div>
  )
}
