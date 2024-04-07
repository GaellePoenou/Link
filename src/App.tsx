import { Routes, Route } from 'react-router-dom';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { CreatePost, EditPost, Home, LikedPosts, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/saved" index element={<Saved />} />
          <Route path="/liked-posts" index element={<LikedPosts />} />
          <Route path="/create-post" index element={<CreatePost />} />
          <Route path="/update-post/:id" index element={<EditPost />} />
          <Route path="/posts/:id" index element={<PostDetails />} />
          <Route path="/profile/:id/*" index element={<Profile />} />
          <Route path="/update-profile/:id" index element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  )
}

export default App