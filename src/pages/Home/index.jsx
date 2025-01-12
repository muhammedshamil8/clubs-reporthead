import LogoButton from '@/components/LogoButton'
import { Clubs } from '@/data/Clubs'
import { useNavigate } from 'react-router-dom'


const Home = ({ setClub }) => {
    const navigate = useNavigate()
    const handleClick = (key) => {
        setClub(key)
        navigate('/create-report')
    }

    return (
        <div className='flex flex-col min-h-[100vh] justify-center items-center gap-[15px] w-full bg-slate-100'>
            <h2 className='font-bold text-xl'>Create your Letter Head</h2>
            <div className='flex items-center justify-center flex-col max-w-[400px] mx-auto gap-4 w-full'>
                {Object.entries(Clubs).map(([key, value]) =>
                    <LogoButton key={key} logo={value.logo} label={value.name} color={value.color} onClick={() => handleClick(key)} />
                )}
            </div>
        </div>
    )
}

export default Home