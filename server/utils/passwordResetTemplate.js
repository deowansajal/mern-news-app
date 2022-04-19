const passwordResetTemplate = resetToken => {
    // Create reset url
    const url = `${process.env.CLIENT_URL}/auth/resetPassword/${resetToken}`

    return `
         <div>
         <br>
         
              <h3> You are receiving this email because you  has requested the reset of a password... </h3>
              <br>
              
              <button style="border:none; padding: 1rem; background: #0069D9; color: #fff; text-transform: uppercase;">
                    <a style="color: #fff; text-decoration: none" href="${url}">Reset Password</a>
              </button>
         </div>   
   `
}

module.exports = passwordResetTemplate
