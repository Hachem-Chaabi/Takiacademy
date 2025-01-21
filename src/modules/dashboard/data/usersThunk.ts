import supabase from '../../shared/store/services/supabase'
import data from '../../../../db.json'

export async function insertUser() {
  const { data: users, error } = await supabase.from('users').insert(data.users).select()

  if (error) throw new Error(error.message)

  return users
}
