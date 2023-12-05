import { YStack } from 'tamagui'
import { Avatar, XStack } from 'tamagui'
import { Repeat2, MessageSquarePlus, ThumbsUp, BookmarkMinus, UploadCloud, Settings, User2, PlusCircle} from '@tamagui/lucide-icons';
import {
    Text
} from '@my/ui'
import React, { useEffect, useState } from 'react';

    export function ProfileScreen(){
        const [userData, setUserData] = useState({
            username: 'Loading...',
            userat: 'Loading...',
            userstatus: 'Loading...',
            userpfp: 'https://www.google.com/search?q=epilepsia&client=opera-gx&hs=CTK&sca_esv=583880146&tbm=isch&sxsrf=AM9HkKmaKYupUKJqj5J5eXhYCtfU7IzkXA:1700452819809&source=lnms&sa=X&ved=2ahUKEwiuu6Cy2NGCAxUTrpUCHdaeCPIQ_AUoAXoECAQQAw&biw=1399&bih=759&dpr=1#imgrc=HxTq09wptoCebM',
        });

        const [posts, setPosts] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://universogamer.up.railway.app/users/find/b540a183-8bae-4ca5-8321-ad7174fa2197');
                    const data = await response.json();
        
                setUserData({
                    username: data.data.firstName,
                    userat: data.data.username,
                    userstatus: data.data.status,
                    userpfp: data.data.pfp
                });
            } catch (error) {
                    console.error('Erro ao buscar dados da API:', error);
                }
            };

            const fetchPosts = async () => {
                try {
                    const response = await fetch('https://universogamer.up.railway.app/posts/b540a183-8bae-4ca5-8321-ad7174fa2197');
                    const data = await response.json();
            
                    setPosts(data.data);
                    } catch (error) {
                    console.error('Erro ao buscar posts da API:', error);
                    }
                };
        
            fetchData();
            fetchPosts();
        }, []);

        return(
            <YStack backgroundColor="$gray12" flex={1}>
                <PerfilComponent username={userData.username} userat={userData.userat} userstatus={userData.userstatus} userpfp={userData.userpfp} />
                <PublicacoesComponent>
                    <PostComponent key={posts.id} texto={posts.content} username={userData.username} userat={userData.userat} userpfp={userData.userpfp} />
                </PublicacoesComponent>
            </YStack>
            )
        }
        
    export function PerfilComponent({username, userat, userstatus, userpfp}){
        return(
        <XStack space="$6">
            <Avatar circular size="$10" mt={8} ml={8}>
                <Avatar.Image
                    accessibilityLabel="Eu"
                        src={userpfp}
                        />
                <Avatar.Fallback backgroundColor="$blue1Light" />
                <PlusCircle color="$blue1Dark" size={24}></PlusCircle>
                <User2 color="$blue1Dark" size={80}></User2>
            </Avatar>

            <YStack my={35}>
                <Text fontSize={16} color="black">
                    {username ?? 'Loading...'}
                </Text>
                <Text color="gray">
                    @{userat ?? 'Loading...'}
                </Text>
                <Text mt={8} color="black">
                    {userstatus ?? 'Loading...'}
                </Text>
            </YStack>

            <Settings size={32} ml={10} mt={10} padding={20} color="black"></Settings>

            </XStack>

        )
    }

    export function PublicacoesComponent({children}){
        return(
        <YStack space="$3">
            <Text color="black">
                _____________________________________________________
            </Text>
            <Text fontSize={25} color="black" fontWeight={'bold'} alignSelf={'center'}>
                Publicações
            </Text>
            <Text color="black">
                _____________________________________________________
            </Text>
            {children}
        </YStack>
        )
    }

    export function PostComponent({texto, username, userat, userpfp}){
        return(
            <>
                <XStack>

                    <Avatar circular size="$6" mr={20} ml={8}>
                        <Avatar.Image
                            accessibilityLabel="Eu"
                                src={userpfp}
                                />
                        <Avatar.Fallback backgroundColor="$blue1Light" />
                        <User2 color="$blue1Dark" size={60}></User2>
                    </Avatar>

                    <YStack>
                        <XStack space={3}>
                            <Text color="black">{username ?? 'Loading...'}</Text>
                            <Text color="gray">@{userat ?? 'Loading...'}</Text>
                        </XStack>
                        <Text fontSize={15} color="black">{texto ?? 'Loading...'}</Text>

                        <XStack mt={15}>
                            <MessageSquarePlus size={16} color="black"> </MessageSquarePlus>
                            <Repeat2 size={16} color="black" ml={20}></Repeat2>
                            <ThumbsUp size={18} color="black" ml={20}></ThumbsUp>
                            <BookmarkMinus size={16} color="black" ml={125}> </BookmarkMinus>
                            <UploadCloud size={16} color="black" ml={10}> </UploadCloud>
                        </XStack>
                    </YStack>

                </XStack>

                <Text color="black">
                    _____________________________________________________
                </Text>
            </>
        )
    }

    
    