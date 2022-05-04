import { render, screen } from '@testing-library/react'
import Chatlist from '../Components/ChatList';
import { Provider } from 'react-redux'

describe ('chatlist component',()=>{
    it('listitem render',() =>{
        render(<Chatlist />)
        
        expect(screen.getByText(/chat/)).toBeInTheDocument();

    })
})

describe ('chatlist snapshot',()=>{
    it('listitem render',() =>{
       const list =  render(<Chatlist />)
        
        expect(list).toMatchSnapshot();

    })
})

