'use client'

import { useUser } from '@/lib/useUser'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function Navbar() {
  const user = useUser()

  return (
    <nav className="bg-red-700 text-white px-6 py-4 flex justify-between items-center">
      <Link className="font-bold text-lg" href="/">
        SimRace Market
      </Link>

      <div className="space-x-4 flex items-center">
        <Link href="/">Forside</Link>
        <Link href="/opret" className="bg-white text-red-700 px-3 py-1 rounded">
          Opret annonce
        </Link>

        {user ? (
          <button
            onClick={() => supabase.auth.signOut()}
            className="underline"
          >
            Log ud
          </button>
        ) : (
          <Link href="/login" className="underline">
            Log ind
          </Link>
        )}
      </div>
    </nav>
  )
}
