import { Link, Stack, router } from 'expo-router';
import {  ChannelList } from 'stream-chat-expo';
import { useAuth } from '../../../providers/AuthProvider';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function MainTabScreen() {
    const { user } = useAuth()
return (
   <>
   <Stack.Screen options={{headerRight: () => (
    
    <Link href={'/(home)/users'} asChild>
    <FontAwesome 
    name="users" 
    size={22} 
    color="gray" 
    style={{ marginHorizontal: 15}} 
    />
    </Link>
   )
   }}/>
<ChannelList 
onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
filters={{members: { $in: [user.id] } }}
    />
    </>
);
}