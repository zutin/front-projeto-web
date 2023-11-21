import {YStack, useTheme } from 'tamagui'
import React from 'react'
import { Avatar, XStack } from 'tamagui'
import { purple } from '@tamagui/colors'
import styled from "styled-components";     
import { Container, Repeat2, MessageSquarePlus, ThumbsUp, BookmarkMinus, UploadCloud, Settings, User2, PlusCircle} from '@tamagui/lucide-icons';
import LinearGradient from 'react-native-linear-gradient';
import {
    Text,
    Button
} from '@my/ui'

   
    export function DashboardScreen(){
       
       
        return(
            <YStack backgroundColor="$blue8">
                <PerfilComponent />
                <PublicacoesComponent>
                    <PostComponent />
                    <PostComponent />
                    <PostComponent />
                </PublicacoesComponent>
            </YStack>
       
            )
        }
        
    export function PerfilComponent(){
        return(
        <XStack space="$6">
                <Avatar circular size="$10">
                    <Avatar.Image
                        accessibilityLabel="Eu"
                            src="https://www.google.com/search?q=cu&client=opera-gx&hs=8a3&sca_esv=583912199&tbm=isch&sxsrf=AM9HkKkoOQkW7DF7cijcI_mOb3McYBNtaA:1700467409703&source=lnms&sa=X&ved=2ahUKEwig_KDfjtKCAxWsrpUCHRn1AloQ_AUoAXoECAIQAw&biw=1399&bih=759&dpr=1"
                            />
                    <Avatar.Fallback backgroundColor="$blue1Light" />
                    <PlusCircle color="$blue1Dark" size={24}></PlusCircle>
                    <User2 color="$blue1Dark" size={80}></User2>
                </Avatar>

            <YStack>
                <Text margin={10} padding={5}>
                    Betto
                </Text>
            </YStack>

            <Text>
                @BettoCarteiro
            </Text>

            <Settings size={32} margin={10} padding={20}> </Settings>

            </XStack>

        )
    }

    export function PublicacoesComponent({children}){
        return(
        <YStack space="$6" ai="center" >
            <Text>
                ________________________________________________________________________
            </Text>
            <Text fontSize={30}>
                Publicações
            </Text>
            <Text>
            ________________________________________________________________________
            </Text>
            {children}
        </YStack>
        )
    }

    export function PostComponent(){
        return(
            <XStack alignItems='flex-start'>
                <YStack>
                    <Text >Betto     @BettoCarteiro </Text>
                    <Text fontSize={15} >Hoje eu fiz the lamb de maggie </Text>

                    <XStack>
                        <Repeat2 size={16}></Repeat2>
                        <MessageSquarePlus size={16}> </MessageSquarePlus>
                        <ThumbsUp size={16}></ThumbsUp>
                        <BookmarkMinus size={16}> </BookmarkMinus>
                        <UploadCloud size={16}> </UploadCloud>
                    </XStack>
                </YStack>
               
                 
                <Avatar circular size="$6" >
                    <Avatar.Image
                        accessibilityLabel="Eu"
                            src="https://www.google.com/search?q=epilepsia&client=opera-gx&hs=CTK&sca_esv=583880146&tbm=isch&sxsrf=AM9HkKmaKYupUKJqj5J5eXhYCtfU7IzkXA:1700452819809&source=lnms&sa=X&ved=2ahUKEwiuu6Cy2NGCAxUTrpUCHdaeCPIQ_AUoAXoECAQQAw&biw=1399&bih=759&dpr=1#imgrc=HxTq09wptoCebM"
                            />
                    <Avatar.Fallback backgroundColor="$blue1Light" />
                    <User2 color="$blue1Dark" size={60}></User2>
                </Avatar>
               
            </XStack>
        )
    }

    
    