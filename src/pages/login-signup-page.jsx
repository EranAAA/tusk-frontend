import svg1 from '../assets/svg/svg1.svg'
import svg2 from '../assets/svg/svg2.svg'
import logoDark from '../assets/imgs/logo-horizontal-dark.png'

import { LoginSignup } from '../cmps/login-signup/login-signup'

export const LoginSignupPage = ({ type }) => {
   return (
      <main className="login-signup-page">
         <div className="logo-container">
            <img className="logo" src={logoDark} alt="tusk" />
         </div>
         <LoginSignup type={type} />
         <div className="background">
            <object className="svg svg1" data={svg1} alt="" />
            <object className="svg svg2" data={svg2} alt="" />
         </div>
      </main>
   )
}
