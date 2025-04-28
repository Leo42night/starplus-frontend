import { Routes, Route } from 'react-router-dom'
import SignInForm from './_auth/forms/SignInForm'
import { About, Blog, Contact, Home, Portfolio, Service, Single, Team } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignInForm />} />
        </Route>

        {/* Root Route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service" element={<Service />} />
          <Route path="/single" element={<Single />} /> 
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </>
  )
}

export default App