'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()

  // Redirect hvis allerede logget ind
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) router.push('/')
    })
  }, [router])

  const loginWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
    if (error) console.error('Login fejl:', error.message)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={loginWithFacebook}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Login med Facebook
      </button>
    </div>
  )
}
