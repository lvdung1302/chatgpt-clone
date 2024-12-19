import { useMutation, useQueryClient } from '@tanstack/react-query';
import './dashboardPage.css';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {

    const QueryClient = useQueryClient()

    const navigate = useNavigate()
    
    const mutation = useMutation({
        mutationFn: (text)=>{
            return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({text}),
            }).then((res) => res.json());
        },
        onSuccess: (id)=>{
            QueryClient.invalidateQueries({queryKey: ['userChats']});
            navigate(`/dashboard/chats/${id}`);
        },
    });

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const text = e.target.text.value;
        if(!text) return;

        mutation.mutate(text);
    };
    return (
        <div className='dashboardPage'>
            <div className='texts'>
                <div className='logo'>
                    <img src='/public/brycen-vietnam-logo.png' alt=''></img>
                    <h1>CHAT AI</h1>
                </div>
                <div className='options'>
                    <div className='option'>
                        <img src='/public/chat.png' alt=''></img>
                        <span>Create a New Chat</span>
                    </div>
                    <div className='option'>
                        <img src='/public/image.png' alt=''></img>
                        <span>Analyze Images</span>
                    </div>
                    <div className='option'>
                        <img src='/public/code.png' alt=''></img>
                        <span>Help me with my code</span>
                    </div>
                </div>
            </div>
            <div className='formContainer'>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='text' placeholder='Ask me anything...'></input>
                    <button>
                        <img src='/public/arrow.png'></img>
                    </button>
                </form>
            </div>
        </div>
    );
};
 
export default DashboardPage;