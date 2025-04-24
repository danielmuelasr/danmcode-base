import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './app/layouts/auth.layout'
import AppLayout from './app/layouts/app.layout'
import { LoginPage } from './app/pages/login'
import { SignupPage } from './app/pages/signup'
import { DashboardPage } from './app/pages/dashboard'
import { RememberPassword } from './app/pages/remember.password'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/remember-password" element={<RememberPassword />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
