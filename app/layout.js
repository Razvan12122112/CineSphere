import 'styles/globals.css'


export const metadata = {
title: "CineSphere",
description: "Browse, discover, and curate your cinematic experience"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='dark-blue' />
        </div>

          <main>
            
             {children}
          </main>

      </body>
    </html>
  )
}

export default RootLayout
