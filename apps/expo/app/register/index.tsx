import { RegisterScreen } from 'app/features/register/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Registrar',
        }}
      />
      <RegisterScreen />
    </>
  )
}
