import { ProfileScreen } from 'app/features/profile/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Perfil',
        }}
      />
      <ProfileScreen />
    </>
  )
}
