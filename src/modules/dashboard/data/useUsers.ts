import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import supabase, { supabaseUrl } from '../../shared/store/services/supabase'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    searchUsers: builder.query({
      queryFn: async (params) => {
        const { searchInput, filter, currentPage, pageSize, filterUser } = params

        const allUsers: any = supabase
          .from('users')
          .select('*', { count: 'exact' })
          .order('id', { ascending: true })

        let query: any = supabase
          .from('users')
          .select('*', { count: 'exact' })
          .order('id', { ascending: true })

        if (filter) {
          if (filter.option === 'ilike') {
            query = allUsers[filter.option](filter.name, `%${filter.value}%`)
          } else if (filter.option === 'ilikeS') {
            query = allUsers[filter.option.slice(0, -1)](filter.name, `${filter.value}%`)
          } else if (filter.option === 'ilikeE') {
            query = allUsers[filter.option.slice(0, -1)](filter.name, `%${filter.value}`)
          } else {
            query = allUsers[filter.option](filter.name, filter.value)
          }

          const { data: users, count } = await query
          return { data: {users, count} }
        }

        if (searchInput) {
          query = allUsers.or(
            `name.ilike.%${searchInput?.trim()}%, phone_number.ilike.%${searchInput?.trim()}%, email.ilike.%${searchInput?.trim()}% ${!isNaN(searchInput) ? `,id.eq.${searchInput}` : ''}`
          )
        }

        if (currentPage) {
          const from = (currentPage - 1) * pageSize
          const to = from + pageSize - 1
          query = query.range(from, to)
        }

        if (searchInput && !filter && !pageSize && !currentPage) {
          query = allUsers.eq('id', searchInput)
        }

        if (Object.keys(filterUser || {}).length > 0) {
          allUsers
            .eq('id', Number(filterUser.id))
            .eq('name', filterUser.name)
            .eq('email', filterUser.email)
            .eq('phone_number', filterUser.phone_number)
            .eq('created_at', filterUser.created_at)
            .eq('updated_at', filterUser.updated_at)

          const { data: users, count } = await allUsers
          return { data: {users, count} }
        }

        const { data: users, error, count } = await query

        if (error) {
          return { error: { message: error.message } }
        }

        return { data: { users, count } }
      },
      providesTags: ['Users'],
    }),
    deleteUsers: builder.mutation({
      queryFn: async (id) => {
        let query = supabase.from('users').delete()
        typeof id === 'object' ? query.in('id', id) : query.eq('id', id)

        const { data: users, error }: any = await query

        if (error) throw new Error(error.message)

        return { data: users }
      },
      invalidatesTags: ['Users'],
    }),
    createUsers: builder.mutation({
      queryFn: async (params) => {
        const { data, id } = params
        console.log(data)

        const hasImagePath = data.image?.startsWith?.('https')

        const imageName = `${Math.random()}-${data.image.name?.replaceAll('/', '_')}`

        const imagePath = hasImagePath
          ? data.image
          : `${supabaseUrl}/storage/v1/object/public/avatars/${imageName}`

        let query: any = supabase.from('users')

        if (!id)
          query = query.insert([
            {
              name: data.name,
              email: data.email,
              phone_number: data.phone_number,
              avatar: imagePath,
              created_at: data.created_at,
              updated_at: data.updated_at,
            },
          ])

        if (id)
          query = query
            .update([
              {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                avatar: imagePath,
                created_at: data.created_at,
                updated_at: data.updated_at,
              },
            ])
            .eq('id', id)

        const { data: users, error } = await query.select()

        if (error) throw new Error(error.message)

        if (hasImagePath) return { data: users }

        const { error: storageError } = await supabase.storage
          .from('avatars')
          .upload(imageName, data.image)

        if (storageError) {
          await supabase.from('users').delete().eq('id', users.id)
          throw new Error('User image could not be uploaded and the user was not created')
        }

        return { data: users }
      },
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useCreateUsersMutation, useDeleteUsersMutation, useSearchUsersQuery } = usersApi
