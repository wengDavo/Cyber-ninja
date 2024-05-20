import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useAuthStore = create((set, get) => ({
    // constant to store all user data
    allUserData : null,
    loading:false,
    user: () => ({
        // fetch data or set as null
        user_id: get().allUserData?.user_id || get().allUserData?.id || null,
        username: get().allUserData?.username || null,
        first_name: get().allUserData?.first_name || null,
        last_name: get().allUserData?.last_name || null,
        user_type: get().allUserData?.user_type || null,
        paid: get().allUserData?.paid || null,
        email: get().allUserData?.email || null,
        // admin: get().allUserData?.admin || null,
        created_at: get().allUserData?.created_at || get().allUserData?.date_joined || null,
        courses_enlisted: get().allUserData?.courses_enlisted || [],    
        
    }),
    setUser: (user) => set({ allUserData: user}),
    setLoading: (loading) => set({ loading }),
    isLoggedIn: () => get().allUserData !== null,
    // isLister: () => get().allUserData?.user_type === '2',
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useAuthStore);
}


export { useAuthStore };