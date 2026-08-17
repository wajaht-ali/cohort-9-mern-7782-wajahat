import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/layout/AuthLayout'
import Login from './features/auth/Login'
import Signup from './features/auth/Signup'
import AuthPlaceholder from './pages/AuthPlaceholder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="forgot-password"
            element={
              <AuthPlaceholder
                title="Reset your password"
                description="Password recovery is ready to be connected to your account service."
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App