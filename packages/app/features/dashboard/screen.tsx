import { YStack } from 'tamagui'
import React, { useEffect, useState } from 'react';
import { Avatar, XStack } from 'tamagui'
import { Repeat2, MessageSquarePlus, ThumbsUp, BookmarkMinus, UploadCloud, Settings, User2, Gamepad2, LogOut} from '@tamagui/lucide-icons';
import {
    Text
} from '@my/ui'
import { useLink } from 'solito/link';

    export function DashboardScreen(){
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
                    const response = await fetch('https://universogamer.up.railway.app/posts/');
                    const data = await response.json();
            
                    setPosts(data.data);
                    // setUserData({
                    //     username: data.user.firstName,
                    //     userat: data.user.username,
                    //     userstatus: data.user.status,
                    //     userpfp: data.user.pfp
                    // })
                    console.log(posts)
                    } catch (error) {
                    console.error('Erro ao buscar posts da API:', error);
                    }
                };

            fetchData();
            fetchPosts();
        }, []);

        return(
            <YStack backgroundColor="$gray12" flex={1}>
                <HeaderComponent userid="123" />
                <PublicacoesComponent>
                {posts.map(post => (
                    <PostComponent key={post.id} texto={post.content} username={userData.username} userat={userData.userat} userpfp={userData.userpfp} />
                ))}
                </PublicacoesComponent>
            </YStack>
            )
        }
        
    export function HeaderComponent({userid}){
        const profileProps = useLink({
            href: '/profile',
        })

        const quitProps = useLink({
            href: '/',
        })

        return(
        <XStack space="$6" pt={8} justifyContent="center" backgroundColor='$blue6'>

            <LogOut {...quitProps} size={32} padding={20} color="white" mr={60}></LogOut>

            <YStack alignItems="center" pb={4}>
                <Gamepad2 size={32} padding={25} color="white"></Gamepad2>
                <Text fontSize={40} color="white">Feed</Text>
            </YStack>

            <User2 {...profileProps} color="#FFFFFF" size={40} ml={60}></User2>

        </XStack>
        )
    }

    export function PublicacoesComponent({children}){
        return(
        <YStack space="$2">
            <Text backgroundColor={'$pink9Dark'} width={400} height={7} mb={8}> </Text>
            {children}
        </YStack>
        )
    }

    export function PostComponent({texto, username, userat}){
        return(
            <>
                <XStack>
                    <Avatar circular size="$6" mr={20} ml={8}>
                        <Avatar.Image
                            accessibilityLabel="Eu"
                                src="https://www.google.com/search?q=epilepsia&client=opera-gx&hs=CTK&sca_esv=583880146&tbm=isch&sxsrf=AM9HkKmaKYupUKJqj5J5eXhYCtfU7IzkXA:1700452819809&source=lnms&sa=X&ved=2ahUKEwiuu6Cy2NGCAxUTrpUCHdaeCPIQ_AUoAXoECAQQAw&biw=1399&bih=759&dpr=1#imgrc=HxTq09wptoCebM"
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

    
    