import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://xzvaanwgxxrfqeiqfgqa.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6dmFhbndneHhyZnFlaXFmZ3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4NTA1MzMsImV4cCI6MjAxNzQyNjUzM30.V2EfXyN5TUfdMz3JlUS43Ypy6IXaEsCKRnv2hCUbSAw"
const supabase = createClient(supabaseUrl, supabaseKey)

    //  ======== get users ========== 

    async function getUsers() {
        let { data, error } = await supabase
        .from('users')
        .select()
    
        return { data, error }
        }
        //  ======== get user ========== 
    
        async function getNotes(id) {
        let { data, error } = await supabase
        .from('notes')
        .select()
        .eq('id', id)
        
        return {data, error}
        }
    
        // ========= add user ========== 
    
        async function addNote(info) {
            const {data, error} = await supabase
            .from('notes')
            .insert(info)
            .select()

            return {data, error}
        }
        // ====== export function =========
        
        export { getNotes, addNote };    
        