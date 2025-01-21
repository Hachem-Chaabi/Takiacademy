import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import supabase, { supabaseUrl } from '../../shared/store/services/supabase'

// ${!isNaN(searchInput) ? `,id.eq.${searchInput}` : ''}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  // tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async (params: any) => {
        const { email, password } = params

        const { data: data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw new Error(error.message)

        return { data: data }
      },
    }),
    signup: builder.mutation({
      queryFn: async (params: any) => {
        const { email, password, fullName } = params

        const { data: data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              fullName,
              avatar: '',
            },
          },
        })

        if (error) throw new Error(error.message)

        return { data: data }
      },
    }),
    logout: builder.mutation({
      queryFn: async () => {
        const { error } = await supabase.auth.signOut()
        if (error) throw new Error(error.message)

        return { data: null }
      },
    }),
    getCurrentUser: builder.query({
      query: async () => {
        const { data: session } = await supabase.auth.getSession()
        if (!session.session) return null

        const { data, error } = await supabase.auth.getUser()

        if (error) throw new Error(error.message)

        return { data: data?.user }
      },
    }),
  }),
})

export const { useLoginMutation, useSignupMutation, useLogoutMutation, useGetCurrentUserQuery } =
  authApi
