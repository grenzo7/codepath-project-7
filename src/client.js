import { createClient } from '@supabase/supabase-js';

const URL = "https://zbjivwtqbbzgtdiejrvv.supabase.co";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpiaml2d3RxYmJ6Z3RkaWVqcnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NzM2MjMsImV4cCI6MTk5NjI0OTYyM30.1g9ee0_8oenwooLUatLKIh71q6-_kLwMsj5CyDJ-vr0';

export const supabase = createClient(URL, API_KEY);