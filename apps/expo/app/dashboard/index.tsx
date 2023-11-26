import { DashboardScreen } from 'app/features/dashboard/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Dashboard',
        }}
      />
      <DashboardScreen />
    </>
  )
}
