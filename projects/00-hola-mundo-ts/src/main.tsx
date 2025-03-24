import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import TwitterFollowCard from './components/TwitterFollowCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode><>
      <TwitterFollowCard userName="edudev" name="Eduardo Segovia" isFollowing={true}/>
      <TwitterFollowCard userName="claudiadev" name="Claudia Urrutia" isFollowing={false}/>
      <TwitterFollowCard userName="MonFerSeg" name="Montserrat Segovia" isFollowing={false}/>
  </>
  </StrictMode>,
)
