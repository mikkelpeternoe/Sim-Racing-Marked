'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/lib/useUser'

export default function LoginPage() {
  const router = useRouter()
  const params = useSearchParams()
  const user = useUser()

  const redirect = params.get('redirect') || '/'

  useEffect(() => {
    if (user) {
      router.push(redirect)
    }
  }, [user, redirect, router])

  const loginWithFacebook = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
    if (error) console.error('Login failed:', error.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="p-8 bg-neutral-800 rounded shadow max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          onClick={loginWithFacebook}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Log ind med Facebook
        </button>
      </div>
    </div>
  )
}
