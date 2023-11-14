import {
  Text,
  XStack,
  YStack,
  Button
} from '@my/ui'
import { Mail, Lock, CheckCircle2 } from '@tamagui/lucide-icons'
import React from 'react'
import { useLink } from 'solito/link'
import { StyleSheet, TextInput, View, ImageBackground} from 'react-native';

export function RegisterScreen() {
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
  }); 
  
  const loginProps = useLink({
    href: '/',
  })

  return (
    <ImageBackground source={require('./assets/cover.png')} style={styles.backgroundImage}>
      <YStack f={1} jc="center" ai="center" p="$2" space="$7">
        <YStack space="$3" marginBottom="$10" maw={600}>
          <Text ta="center" letterSpacing={2} p="$2" fontWeight="bold" fontSize={40}>Universo Gamer</Text>
          <Text ta="center" fontSize={14}>
            Conecte com seus amigos
          </Text>
        </YStack>

        <YStack space="$4">
          <IconInput placeholder="Nickname">
            <Mail size={20} color="#BABABA" />
          </IconInput>
          <IconInput placeholder="Senha">
            <Lock size={20} color="#BABABA" />
          </IconInput>
          <IconInput placeholder="Confirme sua senha">
            <Lock size={20} color="#BABABA" />
          </IconInput>
        </YStack>

        <YStack space="$5">
          <ButtonHome title="Registre-se"/>
          <XStack space="$1" jc="center">
            <Text size={14} ta="center">Já tem uma conta?</Text>
            <Text {...loginProps} size={14} fontWeight="bold" textDecorationLine="underline" color="#A541C8"> Faça login</Text>
          </XStack>
        </YStack>
      </YStack>
    </ImageBackground>
  )
}

function ButtonHome({ title }) {
  return (
    <Button theme="purple" icon={CheckCircle2} scaleSpace={0.5} color="white" width={325} height={50}>
      <Text ta="center" fontWeight="bold" letterSpacing={0.5}>{title}</Text>
    </Button>
  )
}

function IconInput({ placeholder, children}) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#BABABA',
      borderRadius: 8,
      height: 50,
      width: 325,
      paddingHorizontal: 10,
    },
    iconContainer: {
      marginLeft: 5,
      marginRight: 15,
    },
    input: {
      flex: 1,
      height: 50,
      color: 'black',
    },
  });

  return (
    <XStack space="$2" ai="center">
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          {children}
        </View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="gray"
        />
      </View>
    </XStack>
  )
}
